import React, { useState } from 'react';
import { ProductMiniature } from "@components/ProductMiniature/ProductMiniature";
import { Grid, Typography, Button, Pagination } from "@mui/material";
import productsJson from "@data/products.json";
import { S3_URL_IMAGE } from "@constants/s3";

const LAST_PAGE = 14;

export const ProductsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10; // Número de productos por página

  // Calcular los productos a mostrar en función de la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsJson.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleChange = (_, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <PaginationContainer currentPage={currentPage} handleChange={handleChange} />
      <Grid container spacing={2}>
        {currentProducts.map((product) => (
          <Grid key={product?.id} item xs={12} sm={6} md={4}>
            <ProductMiniature 
              title={product.titulo} 
              description={product.descripcion} 
              price={product.precio_actual} 
              images={product?.imagenes?.map((image) => `${S3_URL_IMAGE}/${product?.id}/${image}`)} 
            />
          </Grid>
        ))}
      </Grid>
      <PaginationContainer currentPage={currentPage} handleChange={handleChange} />
    </>
  );
};

const PaginationContainer = ({ currentPage, handleChange }) => {
  return (
    <Grid container justifyContent="center" py={5}>
      <Pagination count={LAST_PAGE} page={currentPage} onChange={handleChange} />
    </Grid>
  );
}