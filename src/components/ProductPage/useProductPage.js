import { Box, Grid, Typography } from "@mui/material"
import { Carousel } from "@components/Carousel/Carousel";
import { formatCurrency } from "@helpers/money";
import { useParams } from "react-router-dom";

export const useProductPage = (props) => {
  const { id } = useParams();
  
  return {
    id,
  }
}