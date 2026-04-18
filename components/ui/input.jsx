import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ref, ...props }) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-[48px] rounded-xl border border-[var(--glass-border)] focus:border-accent font-light bg-[var(--glass-bg)] backdrop-blur-sm px-4 py-5 text-base text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(245,158,11,0.1)]",
        className
      )}
      ref={ref}
      {...props}
    />
  );
}
Input.displayName = "Input"

export { Input }
