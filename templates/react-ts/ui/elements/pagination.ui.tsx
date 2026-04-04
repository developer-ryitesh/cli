import { cn } from "@/shared/utils";
import React from "react";
import { FaAnglesLeft, FaAnglesRight, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export type IQueryRecord = Record<any, any>;

export type IPagination = {
   limit: number;
   currentPage: number;
   totalPages: number;
   onPageChange: (page: IQueryRecord) => void;
};

export function Pagination({ currentPage, totalPages, onPageChange }: IPagination) {
   currentPage = isNaN(currentPage) ? 1 : currentPage;
   const isFirstPage = currentPage === 1;
   const isLastPage = currentPage === totalPages;

   const pagesToShow = (): (number | string)[] => {
      const pages: (number | string)[] = [];

      if (totalPages <= 5) {
         for (let i = 1; i <= totalPages; i++) pages.push(i);
      } else {
         if (currentPage <= 2) {
            pages.push(1, 2, 3, "...", totalPages);
         } else if (currentPage >= totalPages - 2) {
            pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
         } else {
            pages.push(1, "...", currentPage, "...", totalPages);
         }
      }
      return pages;
   };
 
   return (
      <div className="flex items-center gap-1 text-sm">
         <React.Fragment>
            <Button //
               onClick={() => onPageChange({ page: 1 })}
               Icon={FaAnglesLeft}
               disabled={isFirstPage}
            />
            <Button //
               onClick={() => onPageChange({ page: currentPage - 1 })}
               Icon={FaChevronLeft}
               disabled={isFirstPage}
            />
         </React.Fragment>

         {pagesToShow().map((page, index) =>
            typeof page === "number" ? (
               <Button //
                  key={index}
                  onClick={() => onPageChange({ page: page })}
                  active={page === currentPage}>
                  {page}
               </Button>
            ) : (
               <span key={index} className="p-[8px]">
                  {page}
               </span>
            ),
         )}
         <Button //
            onClick={() => onPageChange({ page: currentPage + 1 })}
            Icon={FaChevronRight}
            disabled={isLastPage}
         />
         <Button //
            onClick={() => onPageChange({ page: totalPages })}
            Icon={FaAnglesRight}
            disabled={isLastPage}
         />
      </div>
   );
}

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
   Icon?: any;
   active?: boolean;
};
const Button = ({ children, Icon, active, ...props }: Props) => {
   const activeCss = active ? " bg-primary text-white" : "";
   props.className = cn(
      "border border border-gray-200 h-[30px] w-[30px] text-[10px] cursor-pointer font-medium disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed",
      props.className + activeCss,
   );
   return (
      <button {...props}>
         {children}
         {Icon && <Icon size={12} className="mx-auto" />}
      </button>
   );
};
