import { useEffect, useState } from "react";

export function useDebounce(value:unknown, delay:number = 300):unknown {
  // эта функция вызывается ЗАНОВО на каждом рендере
  // value на каждом вызове — это новый аргумент

  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);

  return debounced;
}
