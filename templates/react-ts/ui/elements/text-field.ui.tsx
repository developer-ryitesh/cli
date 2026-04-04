import React, { type JSX } from "react";
import { Label } from "./label.ui";
import { cn } from "@/shared/utils";

type FeatureProps = {
   label?: string | JSX.Element;
   eleSize?: keyof typeof TEXT_FIELD_SIZE_TYPE;
   prefixIcon?: any;
   suffixIcon?: any;
   instruction?: string | JSX.Element;
};
export type TextFieldProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & FeatureProps;

const TEXT_FIELD_SIZE_TYPE = {
   sm: "px-[12px] py-[2px] h-[27px] text-[12px] rounded-[3px] order:text-[11px]",
   md: "px-[12px] py-[8px] h-[35px] text-[13px] rounded-[7px] order:text-[14px]",
   lg: "px-[12px] py-[8px] h-[50px] text-[16px] rounded-[7px] order:text-[14px]",
};

export function TextField({ label, style, eleSize, prefixIcon, suffixIcon, instruction, ...props }: TextFieldProps) {
   const isIcon = Boolean(prefixIcon || suffixIcon);

   props.className = cn(
      `border leading-none border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full disabled:border-gray-200 disabled:bg-gray-50  order:text-[14px] ${
         TEXT_FIELD_SIZE_TYPE[eleSize || "md"]
      } ${isIcon ? "border-0 outline-none" : ""}`,
      props.className || "",
   );

   if (isIcon) {
      return (
         <>
            {label && (
               <Label htmlFor={props.id} className="mb-2 block font-normal">
                  {label}
               </Label>
            )}
            <div className="border flex items-center rounded-[4px] border-gray-300  focus-within:outline-2 focus-within:outline-blue-500" style={style}>
               {prefixIcon && <span className="pl-2">{prefixIcon}</span>}
               <input {...props} />
               {suffixIcon && <span className="pr-2">{suffixIcon}</span>}
            </div>
            {instruction && <p className="text-[14px] text-[#6d7175]">{instruction}</p>}
         </>
      );
   }

   return (
      <>
         {label && (
            <Label htmlFor={props.id} className="mb-2 block font-normal">
               {label}
            </Label>
         )}
         <input {...props} />
         {instruction && <p className="text-[14px] text-[#6d7175]">{instruction}</p>}
      </>
   );
}
