import React, { type JSX } from "react";

type FeatureProps = { label?: string | JSX.Element };
type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & FeatureProps;

export function Checkbox({ label, type, ...props }: Props) {
   return (
      <label htmlFor={props.id} className="inline-flex items-center gap-2 cursor-pointer select-none">
         <input type="checkbox" {...props} id={props.id} hidden />
         <div className="w-[19px] h-[19px] rounded-sm border-2 border-gray-400 checkbox" />
         {label && <span className="text-[14px] font-normal">{label}</span>}
      </label>
   );
}
