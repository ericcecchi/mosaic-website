import { cn } from "@/lib/classnames";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "cva";
import { ComponentProps } from "react";

const sectionVariants = cva({
  base: "py-16 px-6",
  variants: {
    variant: {
      primary: "bg-background",
      dark: "bg-stone-800 text-stone-50",
      muted: "bg-muted",
      white: "bg-white text-stone-900",
      orange: "bg-orange-400 dark:bg-amber-700",
      hero: "bg-indigo-900 text-white",
    },
    spacing: {
      normal: "space-y-12",
      tight: "space-y-6",
      loose: "space-y-16",
    },
  },
  defaultVariants: { variant: "primary", spacing: "normal" },
});

type Props = ComponentProps<"section"> &
  VariantProps<typeof sectionVariants> & {
    asChild?: boolean;
  };

export default function Section({
  children,
  className,
  variant,
  spacing,
  asChild,
  ...props
}: Props) {
  const Comp = asChild ? Slot : "section";

  return (
    <Comp
      className={cn(sectionVariants({ variant, spacing }), className)}
      {...props}
    >
      {children}
    </Comp>
  );
}
