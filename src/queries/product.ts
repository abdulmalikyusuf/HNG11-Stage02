import axios from "axios";
import { Item } from "@/types";

export const getProducts = async (
  options: Record<string, unknown>
): Promise<{
  items: Array<Item>;
  size: number;
  total: number;
}> => {
  //   const url = new URL("/api/products");
  //   console.log(url.toString());
  const params = {
    organization_id: import.meta.env.VITE_ORGANIZATION_ID,
    Appid: import.meta.env.VITE_APP_ID,
    Apikey: import.meta.env.VITE_API_KEY,
    ...options,
  };
  // .get(
  //   `/api/products?organization_id=${
  //     import.meta.env.VITE_ORGANIZATION_ID
  //   }&Appid=${import.meta.env.VITE_APP_ID}&Apikey=${
  //     import.meta.env.VITE_API_KEY
  //   }`
  // )
  const products = await axios
    .get("/api/products", { params })
    .then((res) => res.data);
  return products;
};

export const getProduct = async (productId: string): Promise<Item> => {
  const params = {
    organization_id: import.meta.env.VITE_ORGANIZATION_ID,
    Appid: import.meta.env.VITE_APP_ID,
    Apikey: import.meta.env.VITE_API_KEY,
  };

  const product = await axios
    .get(`/api/products/unique_id/${productId}`, { params })
    .then((res) => res.data);
  return product;
};
