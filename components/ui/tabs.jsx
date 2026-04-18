"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

function TabsList({ className, ref, ...props }) {
  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        "inline-flex h-auto rounded-md p-1 text-primary",
        className
      )}
      {...props}
    />
  );
}
TabsList.displayName = TabsPrimitive.List.displayName

function TabsTrigger({ className, ref, ...props }) {
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        "inline-flex items-center w-full bg-[var(--glass-card-bg)] backdrop-blur-sm border border-[var(--glass-border)] justify-center whitespace-nowrap text-[var(--text-secondary)] rounded-xl p-3 text-base font-medium ring-offset-white transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#fbbf24] data-[state=active]:to-[#f97316] data-[state=active]:text-black data-[state=active]:font-bold data-[state=active]:shadow-[0_0_25px_rgba(245,158,11,0.25)]",
        className
      )}
      {...props}
    />
  );
}
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

function TabsContent({ className, ref, ...props }) {
  return (
    <TabsPrimitive.Content
      ref={ref}
      className={cn(
        "min-h-[480px] ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2",
        className
      )}
      {...props}
    />
  );
}
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
