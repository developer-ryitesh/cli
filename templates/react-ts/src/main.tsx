import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import { BrowserRouter } from "react-router";
import AppModule from "./app/app.module";
import { StoreProvider } from "./store";

createRoot(document.getElementById("root")!).render(
   <StoreProvider>
      <BrowserRouter>
         <AppModule />
      </BrowserRouter>
   </StoreProvider>
);
