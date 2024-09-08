import { ProductsList as _ProductsList } from "@components/ProductList/ProductsList";
import { usePageStore } from "@stores/usePageStore";

export const ProductsList = () => {
  const setTitle = usePageStore((store) => store.setTitle);
  setTitle('Hola React Market');
  return (
    <_ProductsList />
  );
};
