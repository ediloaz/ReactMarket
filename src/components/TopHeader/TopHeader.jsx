import { Box, Typography } from "@mui/material"

import logo from "@images/logo.jpg"

export const TopHeader = () => {
  return (
    <Box bgcolor="#0d233a" display="flex" pl={3} py={1} position="sticky" top={0}>
      <img src={logo} alt="logo" height="50px" width="auto" />
      <Box textAlign="left" display="flex" flexDirection="column" alignSelf="center" pl={1} >
        <Typography component="span" fontSize={22} color="#d9b76d">Perfumería en línea </Typography>
        <Typography component="span" fontSize={16} mt={-1} color="white"> de Puriscal</Typography>
      </Box>
    </Box>
  )
}