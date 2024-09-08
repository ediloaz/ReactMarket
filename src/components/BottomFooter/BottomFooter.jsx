import { Box, Typography } from "@mui/material"

import logo from "@images/logo.jpg"
import whatsappLogo from "@images/whatsapp.png"

export const BottomFooter = () => {
  return (
    <Box bgcolor="#0d233a" display="flex" justifyContent="space-between" p={3} py={1} position="sticky" bottom={0}>
      <img src={logo} alt="logo" height="30px" width="auto" />
      <Box display="flex" alignSelf="center">
        <Typography width="100%" textAlign="right" component="span" fontSize={15} color="white" mr={1}>Escribir al whatsapp </Typography>
        <img src={whatsappLogo} alt="logo" height="20px" width="auto" />
      </Box>
    </Box>
  )
}