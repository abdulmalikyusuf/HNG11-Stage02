"use client";

import { type VariantProps, cva } from "class-variance-authority";
import { type HTMLAttributes, forwardRef, useState } from "react";

import { cn } from "@/lib/utils";

const swatchVariants = cva("relative place-items-center", {
	variants: {
		variant: {
			circle: "[--size-circle:10px] !size-[var(--size)] m-[var(--margin)] rounded-full before:hidden before:-inset-[var(--circle-inset)] before:border before:border-black-500 before:rounded-full",
			square: "before:-bottom-[var(--offset)] mb-[var(--margin-sq)] before:inset-x-0 before:h-[var(--border-b,1px)] before:bg-black-900",
		},
		state: {
			active: "[--size:var(--size-circle)] before:absolute before:inline-grid [--margin:var(--circle-inset)] [--margin-sq:var(--offset)]",
			disabled: "opacity-10 [--size:14px]",
			inactive: "[--size:14px]",
		},
		size: {
			small: "size-[14px] [--offset:3px] [--border-b:1px] [--circle-inset:2px]",
			large: "size-8 [--size-circle:30px] [--offset:4px] [--border-b:2px] [--circle-inset:4px]",
		},
	},
	defaultVariants: { variant: "circle", size: "small", state: "active" },
});

export interface SwatchProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof swatchVariants> {}

const Swatch = forwardRef<HTMLDivElement, SwatchProps>(({ variant, size, className, ...props }, ref) => {
	const [state, setState] = useState<VariantProps<typeof swatchVariants>["state"]>("active");
	// className === "bg-red-500" ? "active" : className === "bg-blue-200" ? "inactive" : "disabled",

	return (
		<span
			ref={ref}
			onClick={() => setState((prev) => (prev !== "disabled" && prev === "inactive" ? "active" : "inactive"))}
			{...props}
			className={cn(swatchVariants({ variant, size, state }), className, "has-[]:")}
		/>
	);
});

Swatch.displayName = "Swatch";

export { Swatch };

const swatchesVariants = cva("flex", {
	variants: {
		variant: {
			circle: "",
			square: "",
		},
		size: {
			small: "gap-1",
			large: "gap-2",
		},
	},
	defaultVariants: { variant: "circle", size: "small" },
});

export interface SwatchesProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof swatchesVariants> {
	colours: Array<string>;
}

const Swatches = forwardRef<HTMLDivElement, SwatchesProps>(({ variant, size, colours, className, ...props }, ref) => {
	return (
		<div ref={ref} {...props} className={cn(swatchesVariants({ variant, size }), className)}>
			{colours.map((colour) => (
				<Swatch key={colour} variant={variant} size={size} className={colour} />
			))}
		</div>
	);
});

Swatches.displayName = "Swatches";

export { Swatches };
