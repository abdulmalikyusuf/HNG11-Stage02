function ProductCountDisplay({
  page,
  size,
  total,
}: {
  page: number;
  size: number;
  total: number;
}) {
  const start = (page - 1) * size + 1;
  const end = Math.min(page * size, total);

  return (
    <p className="text-primary font-medium text-sm">
      Showing {start}-{end} of {total} products
    </p>
  );
}

export default ProductCountDisplay;
