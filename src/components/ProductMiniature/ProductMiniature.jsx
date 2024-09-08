import { useState } from "react";
import { Box, Dialog, Grid, IconButton, Typography, useTheme } from "@mui/material"
import { Carousel } from "@components/Carousel/Carousel";
import { formatCurrency } from "@helpers/money";
import { FavoriteBorderRounded, HeartBrokenRounded } from "@mui/icons-material";
import { ProductDetailed } from "@components/ProductDetailed/ProductDetailed";

export const ProductMiniature = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  const theme = useTheme();
  const {
    title = '',
    description = '',
    price = 0,
    images = [],
    categories = [],
    tags = [],
  } = props;

  if (showDetails) return <ProductDetailedContainer {...props} showDetails={showDetails} setShowDetails={setShowDetails} />

  return (
      <Box 
        m={2} 
        p={2}
        alignContent="center"
        justifyContent="center"
        height={400}
        borderRadius={10}
        textAlign="center"
        // bgcolor={theme.palette.warning.light}
        bgcolor={theme.palette.background.paper} 
        boxShadow="0 0 10px rgba(200,200,200,0.1)"
        onClick={() => setShowDetails(true)}
      >
        <Grid container>
          <FavoriteIcon />
          <Grid item xs={12} md={6}>
            <img src={images?.[0]} alt={`Imagen de ${title}`} width="auto" height="100%" style={{ maxHeight: '300px', mixBlendMode: 'multiply' }} />
          </Grid>
          <Grid item xs={12} md={6} textAlign={{ xs: "center", md: "left" }}>
            <Box>
            <Typography id="title" fontWeight="bold">{title}</Typography>
            </Box>
            <Typography id="price" >{formatCurrency(price || 0)}</Typography>
          </Grid>
        </Grid>
      </Box>
  )
}

const FavoriteIcon = () => {
  return (
    <Box position="absolute" right={20} m={1}>
      <IconButton>
        <FavoriteBorderRounded />
        {/* FavoriteRounded */}
      </IconButton>
    </Box>
  )
}

const ProductDetailedContainer = (props) => {
  const { showDetails, setShowDetails } = props;
  return (
    <Dialog  onClose={() => setShowDetails(false)} open={showDetails}>
      <Box 
        width="100%"
        height="90vh"
      >
        <ProductDetailed {...props} />
      </Box>
    </Dialog>
  )
}