import db from "@/lib/db";

export const postCart = async ({
  uniqueId,
  quantity,
}: {
  uniqueId: string;
  quantity: number;
}) => {
  console.log({ uniqueId, quantity });

  const product = await db.cartItem.where("uniqueId").equals(uniqueId).first();
  if (product) {
    await db.cartItem.update(product.id, {
      quantity: (product.quantity += quantity),
    });
  } else {
    await db.cartItem.add({ uniqueId, quantity });
  }
};
