import { Icons } from "@/components/icons";
import { cn, arrayRange } from "@/lib/utils";

type RatingProps = {
  rating?: number;
  size: "sm" | "lg";
  className?: string;
};
type RatingTextProps = {
  noOfreviews: number;
  size: "sm" | "lg";
};

function Rating({ rating = 5, size, className }: RatingProps) {
  return (
    <div className="flex gap-0.5">
      {arrayRange(1, 5, 1).map((i) => (
        <Icons.star
          key={i}
          className={cn(
            i <= rating
              ? "fill-orange-500 stroke-orange-500"
              : "black-orange-400",
            size === "sm" ? "stroke-1 size-4" : "stroke-[1.25px] size-5",
            className
          )}
        />
      ))}
    </div>
  );
}

function RatingText({ noOfreviews, size }: RatingTextProps) {
  return (
    <div className="flex gap-2">
      <Rating size={size} />
      <p className="text-black-600 fs-12 capitalize">{noOfreviews} reviews</p>
    </div>
  );
}

export default Rating;
export { RatingText };
