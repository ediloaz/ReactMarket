import { Box } from "@mui/system";
import { ProductsList } from "@pages/ProductsList/ProductsList";
import { SearchInput } from "@components/Search/Search";

export const Home = () => {
  return (
    <Box mt={2}>
      <SearchInput />
      <ProductsList />
    </Box>
  );
};

