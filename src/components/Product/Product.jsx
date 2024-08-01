import { Box, Typography } from "@mui/material"
import { Carousel } from "./Carousel/Carousel";

export const Product = (props) => {
  const {
    title = '',
    description = '',
    price = 0,
    images = [],
    categories = [],
    tags = [],
  } = props;

  return (
      <Box>
        <Carousel images={images} />
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
        <Typography variant="h5">{price}</Typography>
        <Typography variant="body2">{categories.join(', ')}</Typography>
        <Typography variant="body2">{tags.join(', ')}</Typography>
      </Box>
  )
}