FROM debian:bookworm-slim AS models

RUN apt-get update && \
    apt-get install -y --no-install-recommends curl ca-certificates && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /models

ARG DET_URL="https://github.com/RapidAI/RapidOCR/releases/download/v1.4.0/ru_PP-OCRv4_det.onnx"
ARG REC_URL="https://github.com/RapidAI/RapidOCR/releases/download/v1.4.0/ru_PP-OCRv4_rec.onnx"
ARG DICT_URL="https://raw.githubusercontent.com/PaddlePaddle/PaddleOCR/release/2.7/ppocr/utils/dict/cyrillic_dict.txt"

RUN curl -fL --retry 3 -o det.onnx "${DET_URL}"  && \
    curl -fL --retry 3 -o rec.onnx "${REC_URL}"  && \
    curl -fL --retry 3 -o dict.txt "${DICT_URL}"

FROM node:22-bookworm-slim@sha256:REPLACE_WITH_REAL_SHA AS builder

WORKDIR /app/api

ENV NODE_ENV=development

COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm npm ci

COPY . .

FROM node:22-bookworm-slim@sha256:REPLACE_WITH_REAL_SHA

WORKDIR /app/api

ENV NODE_ENV=production \
    PORT=5000 \
    OCR_DETECTION_MODEL=/app/api/models/det.onnx \
    OCR_RECOGNITION_MODEL=/app/api/models/rec.onnx \
    OCR_DICTIONARY=/app/api/models/dict.txt


COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm npm ci --omit=dev && \
    npm cache clean --force


COPY --from=builder /app/api/dist ./dist


COPY --from=models /models ./models

RUN chown -R node:node /app/api
USER node

EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
    CMD node -e "fetch('http://localhost:'+process.env.PORT+'/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "dist/server.js"]