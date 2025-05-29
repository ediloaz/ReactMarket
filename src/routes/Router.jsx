import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EmptyLayout } from "@layouts/EmptyLayout/EmptyLayout";
import { MainLayout } from "@layouts/MainLayout/MainLayout";
import { NotFound } from "@pages/NotFound/NotFound";
import { Home } from "@pages/Home/Home";
import { ProductPage } from "@components/ProductPage/ProductPage";


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<EmptyLayout />}>
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="inicio" element={<Home />} />
          <Route path="not-found" element={<NotFound />} />
          <Route path="detalle/:id" element={<ProductPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
