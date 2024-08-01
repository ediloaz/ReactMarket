import { Typography } from "@mui/material";
import { usePageStore } from "@stores/usePageStore";

export const Home = () => {
  const setTitle = usePageStore((store) => store.setTitle);
  setTitle('Hola React Market');
  return (
    <>
      <Typography variant="h1" textAlign="center" height="100vh" alignContent="center" >Hola React Market</Typography>
    </>
  );
};
