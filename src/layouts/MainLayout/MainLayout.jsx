import { useEffect } from 'react';
import { Box, Container } from "@mui/material";
import { Outlet } from 'react-router-dom';
import { useStaticStore } from '@stores/useStaticStore';

export const MainLayout = () => {
  const { fetchStaticData } = useStaticStore((state) => state);

  useEffect(() => {
      fetchStaticData()
  }, [])

  return (
    <Box sx={{ display: "flex" }} mt="5em">
      <Container maxWidth={'xl'}>
        <Outlet />
      </Container>
    </Box>
  );
};
