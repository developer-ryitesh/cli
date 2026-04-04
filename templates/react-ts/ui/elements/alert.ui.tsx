import { MdCheckCircle, MdError, MdWarning, MdInfo, MdDarkMode } from "react-icons/md";
import type { ReactNode } from "react";

export const COLOR_TYPE = {
   dark: {
      className: "bg-gray-800 text-white border-gray-700",
      icon: MdDarkMode,
   },
   secondary: {
      className: "bg-gray-100 text-gray-700 border-gray-300",
      icon: MdInfo,
   },
   done: {
      className: "bg-green-50 text-green-700 border-green-200",
      icon: MdCheckCircle,
   },
   error: {
      className: "bg-red-50 text-red-700 border-red-200",
      icon: MdError,
   },
   warn: {
      className: "bg-yellow-50 text-yellow-800 border-yellow-200",
      icon: MdWarning,
   },
   info: {
      className: "bg-cyan-50 text-cyan-700 border-cyan-200",
      icon: MdInfo,
   },
} as const;

type Props = {
   type: keyof typeof COLOR_TYPE;
   title?: string;
   message?: string;
   actions?: ReactNode; // 👈 NEW
};

export function Alert({ type, title, message, actions }: Props) {
   const { className, icon: Icon } = COLOR_TYPE[type];

   return (
      <div className={`border rounded-md p-4 flex gap-3 ${className}`}>
         <Icon size={25} className="shrink-0 mt-0.5" />

         <div className="flex-1">
            {title && <div className="font-semibold">{title}</div>}
            {message && <div className="text-sm opacity-90 mt-0.5">{message}</div>}

            {actions && <div className="flex justify-end gap-2 mt-1">{actions}</div>}
         </div>
      </div>
   );
}
