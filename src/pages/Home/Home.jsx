import { TopHeader } from "@components/TopHeader/TopHeader";
import { BottomFooter } from "@components/BottomFooter/BottomFooter";
import { IconButton, InputBase, Paper, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { ProductsList } from "@pages/ProductsList/ProductsList";
import { Search } from "@mui/icons-material";

export const Home = () => {
  const theme = useTheme();
  return (
    <Box sx={{ bgcolor: theme.palette.grey[100]}}>
      <TopHeader />
      <SearchInput />
      <ProductsList />
      <BottomFooter />
    </Box>
  );
};

const SearchInput = () => {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "90%", margin: "auto", my: 1 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Escribe acá tu perfume favorito"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <Search />
      </IconButton>
    </Paper>
  )
}