import { Box, Grid, Typography } from "@mui/material"
import { Carousel } from "@components/Carousel/Carousel";
import { formatCurrency } from "@helpers/money";

export const ProductMiniature = (props) => {
  const {
    title = '',
    description = '',
    price = 0,
    images = [],
    categories = [],
    tags = [],
  } = props;

  return (
      <Box textAlign="center" p={2} >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Carousel images={images} />
          </Grid>
          <Grid item xs={12} md={6} textAlign={{ xs: "center", md: "left" }}>
            <Box>
            <Typography id="size" component="span" variant="caption">100ml</Typography>  
            </Box>
            <Typography id="title" variant="h4">{title}</Typography>
            <Typography variant="body1">{description}</Typography>
            <Typography id="price" variant="h5">{formatCurrency(price || 0)}</Typography>
            <Typography variant="body2">{categories.join(', ')}</Typography>
            <Typography variant="body2">{tags.join(', ')}</Typography>
          </Grid>
        </Grid>
      </Box>
  )
}