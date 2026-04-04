import { cn } from "@/shared/utils";
import { type ReactNode } from "react";

type Props = {
   iconWidth: number;
   iconHeight: number;
   description: string;
   className?: string;
   action?: ReactNode;
};
export function NoData({ iconWidth, iconHeight, description, className = "", action }: Props) {
   return (
      <div className={cn("flex flex-col justify-center", className)}>
         <img //
            src="/icons/no-data.png"
            alt="data"
            className="mx-auto block"
            width={iconWidth}
            height={iconHeight}
         />
         <p className="text-sm text-center text-gray-400">{description}</p>
         {action}
      </div>
   );
}
