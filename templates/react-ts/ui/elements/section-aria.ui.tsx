import type { ReactNode } from "react";

type Props = {
   title?: string;
   extra?: ReactNode;
   children: ReactNode;
};
export function SectionAria({ title, extra, children }: Props) {
   return (
      <div className="border border-gray-300 overflow-hidden">
         {title && (
            <div className="flex items-center justify-between bg-white px-5 py-2 border-gray-300 border-b">
               <span className="text-sm font-medium capitalize">{title}</span>
               <div className="flex gap-2">
                  <div>{extra}</div>
               </div>
            </div>
         )}
         <div className="p-3 bg-gray-50" >
            {children}
         </div>
      </div>
   );
}
