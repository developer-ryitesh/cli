import React, { type JSX } from "react";
import { Label } from "./label.ui";
import { cn } from "@/shared/utils";

type FeatureProps = { label?: string | JSX.Element };
export type TextareaProps = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & FeatureProps;

export function Textarea({ className, label, ...props }: TextareaProps) {
   return (
      <>
         {label && (
            <Label className="mb-2 font-normal" htmlFor={props.id}>
               {label}
            </Label>
         )}
         <textarea
            {...props}
            className={cn(`border-1 border-[#e5e7eb] rounded-[7px] px-[12px] py-[8px] w-full order:text-[14px] text-[14px] disabled:border-gray-200 disabled:bg-gray-50`, className || "")}
         />
      </>
   );
}
