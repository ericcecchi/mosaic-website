import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "cva";
import type { ComponentProps } from "react";
import { cn } from "../app/util/classnames";

const buttonVariants = cva({
  base: "rounded-full font-medium inline-block border border-current transition-colors",
  variants: {
    variant: {
      default: "",
      primary: "bg-cyan-600 text-white hover:bg-cyan-700 border-cyan-600",
      inverse:
        "bg-white text-indigo-900 hover:bg-indigo-900 hover:text-white hover:border-white",
      muted: "text-gray-500 dark:text-gray-400",
    },
    size: {
      sm: "text-sm px-4 py-2",
      md: "text-base px-4 py-3",
      lg: "text-lg px-6 py-4",
    },
  },
  defaultVariants: { variant: "default", size: "md" },
});

type ButtonProps = ComponentProps<typeof Slot> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  children,
  asChild,
  variant,
  size,
  className,
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)}>
      {children}
    </Comp>
  );
}
