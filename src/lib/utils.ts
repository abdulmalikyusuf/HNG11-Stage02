import { Photo } from "@/types";
import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function formatPrice(
  price: number | string,
  currency: "USD" | "EUR" | "GBP" | "BDT" | "NGN" = "NGN",
  notation: "compact" | "engineering" | "scientific" | "standard" = "standard"
) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
    notation,
  }).format(Number(price));
}

export function arrayRange(start: number, stop: number, step: number) {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (_, index) => start + index * step
  );
}

export function getImageUrl(photoObj: Photo) {
  return `${import.meta.env.VITE_BASE_URL}/images/${photoObj.url}`;
}
export function getProductCurrentPrice(currentPrice) {
  try {
    return formatPrice(currentPrice.at(0).NGN.at(0));
  } catch (error) {
    return 0;
  }
}

const params = {
  organization_id: import.meta.env.VITE_ORGANIZATION_ID,
  Appid: import.meta.env.VITE_APP_ID,
  Apikey: import.meta.env.VITE_API_KEY,
};

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.params = { ...config.params, ...params };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
