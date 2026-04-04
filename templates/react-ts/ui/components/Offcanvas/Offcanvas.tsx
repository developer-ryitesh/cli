"use client";
import { forwardRef, type ReactNode, useImperativeHandle, useState } from "react";
import { cn } from "../utils";

type Placement = "left" | "right" | "top" | "bottom";

type Props = {
   isFragment?: boolean;
   placement?: Placement;
   children?: ReactNode;
   className?: string;
};

export type OffCanvasRefType = {
   setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

export const OffCanvas = forwardRef<OffCanvasRefType, Props>(({ isFragment, className, placement = "left", children }, ref) => {
   const [isOpen, setToggle] = useState(false);
   useImperativeHandle(ref, () => ({ setToggle }), []);

   if (isFragment) return children;

   // placement styles
   const base = "fixed bg-white shadow-lg transition-transform duration-300 z-50";
   const placements: Record<Placement, string> = {
      left: `top-0 left-0 h-full transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`,
      right: `top-0 right-0 h-full transform ${isOpen ? "translate-x-0" : "translate-x-full"}`,
      top: `top-0 left-0 w-full transform ${isOpen ? "translate-y-0" : "-translate-y-full"}`,
      bottom: `bottom-0 left-0 w-full transform ${isOpen ? "translate-y-0" : "translate-y-full"}`,
   };

   return (
      <div className="relative">
         {/* Backdrop */}
         {isOpen && <div onClick={() => setToggle(false)} className="fixed inset-0 z-40" style={{ background: "#00000040" }} />}

         {/* Panel */}
         <div className={cn([base, placements[placement]].join(" "), className)}>{children}</div>
      </div>
   );
});
