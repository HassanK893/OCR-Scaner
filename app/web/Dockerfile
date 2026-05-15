FROM node:lts-alpine

WORKDIR /app/web

COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm npm ci

COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]