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
      <CarouselMui autoPlay={false}>
        {images?.map((src, index) => (
          <Box key={index}>
            <img src={src} alt={`Image ${index}`} style={{ maxHeight: '200px'}} />
          </Box>
        ))}
      </CarouselMui>
    </Container>
  );
};
