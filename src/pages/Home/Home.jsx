import { ProductDetailed } from "@components/ProductDetailed/ProductDetailed";
import { ProductMiniature } from "@components/ProductMiniature/ProductMiniature";
import { Grid, Typography } from "@mui/material";
import { usePageStore } from "@stores/usePageStore";

const TEST_IMAGES = [
  "https://picsum.photos/200/300?random=1",
  "https://picsum.photos/200/300?grayscale",
  "https://picsum.photos/200/300?random=3",
  "https://picsum.photos/200/300?random=4",
  "https://picsum.photos/200/300?random=5",
]

const TEST_DESCRIPTION = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."

export const Home = () => {
  const setTitle = usePageStore((store) => store.setTitle);
  setTitle('Hola React Market');
  return (
    <>
      {/* <Typography variant="h1" textAlign="center" height="100vh" alignContent="center" >Hola React Market</Typography> */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <ProductMiniature title="Producto 1" description={TEST_DESCRIPTION} price={25000} images={TEST_IMAGES} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProductMiniature title="Producto 2" description={TEST_DESCRIPTION} price={25000} images={TEST_IMAGES} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProductMiniature title="Producto 3" description={TEST_DESCRIPTION} price={25000} images={TEST_IMAGES} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProductMiniature title="Producto 4" description={TEST_DESCRIPTION} price={25000} images={TEST_IMAGES} />
        </Grid>
      </Grid>
      <ProductDetailed title="Producto 1" description={TEST_DESCRIPTION} price={25000} images={TEST_IMAGES} />
    </>
  );
};
