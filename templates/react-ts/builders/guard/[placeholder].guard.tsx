import type { ReactNode } from "react";
import { Navigate, Outlet } from "react-router";

type Props = {
   children: ReactNode;
};
export function PlaceHolderGuard({ children }: Props) {
   if (false) {
      return <Navigate to="/auth" replace />;
   }
   if (false) {
      return children;
   }
   return <Outlet />;
}
