import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-all duration-300",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#fbbf24] to-[#f97316] text-black hover:shadow-[0_0_30px_rgba(251,191,36,0.3),0_0_60px_rgba(249,115,22,0.15)] hover:-translate-y-0.5",
        primary: "bg-primary text-white",
        outline:
          "border border-accent bg-transparent text-accent hover:bg-accent/10 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]",
      },
      size: {
        default: "h-[44px] px-6",
        md: "h-[48px] px-6",
        lg: "h-[56px] px-8 text-sm uppercase tracking-[2px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({ className, variant, size, asChild = false, ref, ...props }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
}
Button.displayName = "Button";

export { Button, buttonVariants };
