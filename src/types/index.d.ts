type Price = {
  NGN: Array<never>;
};
type Photo = {
  model_name: string;
  model_id: string;
  organization_id: "123";
  filename: string;
  url: string;
  is_featured: boolean;
  save_as_jpg: boolean;
  is_public: boolean;
  file_rename: boolean;
  position: 1;
};
export type Item = {
  name: string;
  description: null;
  unique_id: string;
  url_slug: string;
  is_available: boolean;
  is_service: boolean;
  previous_url_slugs: string[] | null;
  unavailable: boolean;
  unavailable_start: null;
  unavailable_end: null;
  id: string;
  parent_product_id: null;
  parent: null;
  organization_id: string;
  product_image: [];
  categories: [];
  date_created: string;
  last_updated: string;
  user_id: string;
  photos: Photo[];
  current_price: Array<Price>;
  is_deleted: boolean;
  available_quantity: number;
  selling_price: null;
  discounted_price: null;
  buying_price: null;
  extra_infos: null;
};

export type Response = {
  page: number;
  size: number;
  total: number;
  debug: boolean | null;
  previous_page: string | null;
  next_page: string | null;
  items: Array<Item>;
};

export type Category = {
  id: string;
  name: string;
  organization_id: string;
  is_deleted: false;
  description: string;
  category_type: string;
  subcategories: [];
  entity_items: [];
  parents: [];
  photos: [];
  url_slug: null;
};
