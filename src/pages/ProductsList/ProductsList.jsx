import { ProductDetailed } from "@components/ProductDetailed/ProductDetailed";
import { ProductMiniature } from "@components/ProductMiniature/ProductMiniature";
import { Grid, Typography } from "@mui/material";
import { usePageStore } from "@stores/usePageStore";

import productsJson from "@data/products.json"
import { S3_URL_IMAGE } from "@constants/s3";


const TEST_DESCRIPTION = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."

export const ProductsList = () => {
  const setTitle = usePageStore((store) => store.setTitle);
  setTitle('Hola React Market');
  return (
    <>
      {/* <Typography variant="h1" textAlign="center" height="100vh" alignContent="center" >Hola React Market</Typography> */}
      <Grid container spacing={2}>
      {productsJson.map((product) => (
          <Grid key={product?.id} item xs={12} sm={6} md={4}>
            <ProductMiniature 
              title={product.titulo} 
              description={product.descripcion} 
              price={product.precio_actual} 
              images={product?.imagenes?.map((image) => `${S3_URL_IMAGE}/${product?.id}/${image}`)} 
            />
          </Grid>
          )
        )}
      </Grid>
    </>
  );
};
