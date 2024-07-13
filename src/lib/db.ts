import Dexie, { type EntityTable } from "dexie";

interface CartItem {
  id: number;
  uniqueId: string;
  quantity: number;
}

const db = new Dexie("shopping-cart") as Dexie & {
  cartItem: EntityTable<
    CartItem,
    "id" // primary key "id" (for the typings only)
  >;
};

// Declare tables, IDs and indexes
db.version(1).stores({
  cartItem: "++id, uniqueId, quantity",
});

export default db;
