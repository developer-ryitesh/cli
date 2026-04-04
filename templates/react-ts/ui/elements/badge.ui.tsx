import * as React from "react";

import { cn } from "@/shared/utils";

const BADGE = {
   variants: {
      default: {
         primary: "bg-primary text-foreground",
         secondary: "bg-secondary text-white",
         done: "bg-done text-white",
         error: "bg-error text-white",
         warn: "bg-warn text-black",
         info: "bg-info text-white",
         dark: "bg-dark text-white",
      },
      outline: {
         primary: "bg-transparent text-primary border border-primary",
         secondary: "bg-transparent text-secondary border border-secondary",
         done: "bg-transparent text-done border border-done",
         error: "bg-transparent text-error border border-error",
         warn: "bg-transparent text-warn border border-warn",
         info: "bg-transparent text-info border border-info",
         dark: "bg-transparent text-dark border border-dark",
      },
   },
   size: {
      xs: "px-2 py-0.5 text-[9px]", // extra small
      sm: "px-2 py-1 text-[10px]", // small
      md: "px-3 py-1.5 text-[12px]", // medium (default)
      lg: "px-3 py-1.5 text-[13px]",
   },
   rounded: {
      xs: "rounded", // extra small
      sm: "rounded-sm", // small
      md: "rounded-lg", // medium (default)
      lg: "rounded-lg", // large
      xl: "rounded-xl", // extra large
      full: "rounded-full",
   },
};

type FeatureProps = {
   accent?: keyof typeof BADGE.variants.default;
   size?: keyof typeof BADGE.size;
   variant?: keyof typeof BADGE.variants;
   rounded?: keyof typeof BADGE.rounded;
};

type Props = React.ComponentProps<"span"> & FeatureProps;

function Badge({ className, variant = "default", accent = "primary", size = "sm", rounded = "full", ...props }: Props) {
   return (
      <span
         data-slot="badge"
         className={cn(
            `inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all outline-none ${[
               BADGE.variants[variant]?.[accent], //
               BADGE.size[size],
               BADGE.rounded[rounded],
            ].join(" ")}`,
            className,
         )}
         {...props}
      />
   );
}

export { Badge };
