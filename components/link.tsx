import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "cva";
import type { ComponentProps } from "react";
import { cn } from "../lib/classnames";
import NextLink from "next/link";

const linkVariants = cva({
  base: "transition-colors hover:underline transition",
  variants: {
    variant: {
      primary: "text-indigo-900 dark:text-indigo-100",
      inverse: "text-white",
      muted: "text-stone-900/40 dark:text-stone-100/40",
    },
  },
  defaultVariants: { variant: "primary" },
});

type LinkProps = ComponentProps<typeof Slot> &
  ComponentProps<typeof NextLink> &
  VariantProps<typeof linkVariants> & {
    asChild?: boolean;
  };

export function Link({
  children,
  className,
  asChild,
  variant,
  ...props
}: LinkProps) {
  const Comp = asChild ? Slot : NextLink;

  return (
    <Comp {...props} className={cn(linkVariants({ variant }), className)}>
      {children}
    </Comp>
  );
}
