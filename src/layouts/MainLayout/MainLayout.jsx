import { useEffect } from 'react';
import { Box, Container } from "@mui/material";
import { Outlet } from 'react-router-dom';
import { useStaticStore } from '@stores/useStaticStore';
import { TopHeader } from '@components/TopHeader/TopHeader';
import { BottomFooter } from '@components/BottomFooter/BottomFooter';

export const MainLayout = () => {
  const { fetchStaticData } = useStaticStore((state) => state);

  useEffect(() => {
      fetchStaticData()
  }, [])

  return (
    <Box>
      <TopHeader />
        <Container maxWidth={'xl'} sx={{minHeight: 'calc(100vh - 66px - 46px)'}}>
          <Outlet />
        </Container>
      <BottomFooter />
    </Box>
  );
};
