import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

function PlaceholderImage({ iconSize = "size-9" }: { iconSize?: string }) {
  return (
    <div
      aria-label="Placeholder"
      role="img"
      aria-roledescription="placeholder"
      className="flex h-full w-full items-center justify-center bg-black-200"
    >
      <Icons.placeholder
        className={cn("text-black-900", iconSize)}
        aria-hidden="true"
      />
    </div>
  );
}

export default PlaceholderImage;
