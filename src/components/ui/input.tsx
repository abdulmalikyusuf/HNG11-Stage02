import {
  forwardRef,
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Icons, type Icon as IconType } from "../icons";

const Input = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col gap-2", className)} {...props} />
);
Input.displayName = "Input";

function InputLabel({
  className,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn("fs-16 font-semibold text-text-blue", className)}
      {...props}
    />
  );
}

const variants = cva(
  "flex items-center w-full gap-2 px-4 h-[46px] md:h-[52px] text-black-400 border-primary focus:border-primary-label disabled:border-black-400 invalid:border-red-500",
  {
    variants: {
      variant: {
        contained: "rounded-md bg-white border",
        line: "bg-transparent border-b",
      },
    },
    // compoundVariants: {},
    defaultVariants: {},
  }
);

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof variants> {
  icon?: keyof typeof Icons;
  iconBefore?: keyof typeof Icons;
  errorMsg?: string;
}

const InputElement = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, icon, iconBefore, errorMsg, ...props }, ref) => {
    const IconBefore = iconBefore && (Icons[iconBefore] as IconType);
    const IconAfter = icon && (Icons[icon] as IconType);
    return (
      <>
        <div className={cn(variants({ variant }))}>
          {IconBefore && (
            <IconBefore className="size-6 text-black-900 peer-disabled:text-black-400" />
          )}
          <input
            className={cn(
              "peer w-full fs-14 md:fs-16 bg-transparent focus:outline-none",
              className
            )}
            ref={ref}
            {...props}
          />
          {IconAfter && (
            <IconAfter className="size-6 text-black-900 peer-disabled:text-black-400" />
          )}
        </div>
        {errorMsg && (
          <small className="mt-2 text-black-700 fs-12">{errorMsg}</small>
        )}
      </>
    );
  }
);
InputElement.displayName = "InputElement";

export { InputElement, InputLabel, Input };
