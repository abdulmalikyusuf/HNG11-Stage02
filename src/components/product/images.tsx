import { useState } from "react";
import PlaceholderImage from "@/components/ui/placeholder-image";
import { IconBox, Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Photo } from "@/types";

const ChevronDown = Icons["chevron-down"];

function Images({
  images,
  productName,
}: {
  images: Photo[];
  productName: string;
}) {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  return (
    <div className="flex-1 md:w-[570px] flex flex-col-reverse md:flex-row gap-3 md:gap-5">
      <div className="flex md:flex-col justify-center items-center gap-3 md:gap-4">
        <IconBox
          size="small"
          variant="sharp"
          onClick={() =>
            setCurrentImageIdx((prev) =>
              prev === 0 ? images.length - 1 : prev - 1
            )
          }
          className="max-md:hidden bg-black-100 rounded-full"
        >
          <ChevronDown className="h-1 w-2 -rotate-180" />
        </IconBox>
        {images.length > 0 ? (
          images.map((image, i) => (
            <div
              key={image.url}
              className={cn(i === currentImageIdx && "border border-black-900")}
            >
              <div
                className="flex items-center justify-center"
                onClick={() => setCurrentImageIdx(i)}
              >
                <img
                  src={
                    `${import.meta.env.VITE_BASE_URL}/images/${image.url}` ??
                    "/images/placeholder.png"
                  }
                  alt={`${productName} image-${i}`}
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover h-full"
                  loading="lazy"
                />
              </div>
            </div>
          ))
        ) : (
          <div className="h-[102px] w-[77px]">
            <PlaceholderImage />
          </div>
        )}
        <IconBox
          size="small"
          variant="sharp"
          onClick={() =>
            setCurrentImageIdx((prev) =>
              prev === images.length - 1 ? 0 : prev + 1
            )
          }
          className="max-md:hidden bg-black-100 rounded-full"
        >
          <ChevronDown className="h-1 w-2" />
        </IconBox>
      </div>
      <div className="flex-1 min-h-[457px] w-full h-full md:aspect-square">
        {images[currentImageIdx] ? (
          <img
            src={
              `${import.meta.env.VITE_BASE_URL}/images/${
                images[currentImageIdx].url
              }` ?? "/images/placeholder.png"
            }
            alt={productName}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover h-full"
            loading="lazy"
          />
        ) : (
          <PlaceholderImage />
        )}
      </div>
    </div>
  );
}

export default Images;
