import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ref, ...props }) {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-sm px-4 py-5 text-base text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 focus-visible:shadow-[0_0_15px_rgba(245,158,11,0.1)]",
        className
      )}
      ref={ref}
      {...props}
    />
  );
}
Textarea.displayName = "Textarea"

export { Textarea }
