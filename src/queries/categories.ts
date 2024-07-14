import { Category } from "@/types";
import axios from "axios";

export const getCategories = async (): Promise<{
  items: Array<Category>;
}> => {
  const params = {
    organization_id: import.meta.env.VITE_ORGANIZATION_ID,
    Appid: import.meta.env.VITE_APP_ID,
    Apikey: import.meta.env.VITE_API_KEY,
  };
  const categories = await axios
    .get("https://timbu-get-all-categories.reavdev.workers.dev", { params })
    .then((res) => res.data);
  return categories;
};
