import { Product } from "@components/Product/Product";
import { Typography } from "@mui/material";
import { usePageStore } from "@stores/usePageStore";

const TEST_IMAGES = [
  "https://picsum.photos/200/300?random=1",
  "https://picsum.photos/200/300?grayscale",
  "https://picsum.photos/200/300?random=3",
  "https://picsum.photos/200/300?random=4",
  "https://picsum.photos/200/300?random=5",
]

export const Home = () => {
  const setTitle = usePageStore((store) => store.setTitle);
  setTitle('Hola React Market');
  return (
    <>
      {/* <Typography variant="h1" textAlign="center" height="100vh" alignContent="center" >Hola React Market</Typography> */}
      <Product title="Producto 1" description="Descripción del producto 1" price={100} images={TEST_IMAGES} />
    </>
  );
};
