import { useState } from 'react';
import { Box, Container, Link, Typography } from '@mui/material';
import Thumbnail from './Thumbnail/Thumbnail';

import CarouselMui from 'react-material-ui-carousel'

export const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h5" align="center" sx={{ mb: 4 }}>
        Carousel Demo
      </Typography>
      <CarouselMui>
        {images?.map((src, index) => (
          <Box key={index}>
            <img src={src} alt={`Image ${index}`} />
          </Box>
        ))}
      </CarouselMui>
    </Container>
  );
};
