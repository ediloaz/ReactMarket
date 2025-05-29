import { Box, Typography } from "@mui/material"

import logo from "@images/logo.jpg"
import whatsappLogo from "@images/whatsapp.png"

const URL = "https://wa.me/83026568?text=Hola%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20el%20producto%20que%20vi%20en%20la%20p%C3%A1gina"

export const BottomFooter = () => {
  return (
    <Box bgcolor="#0d233a" display="flex" justifyContent="space-between" p={3} py={1} position="sticky" bottom={0}>
      <img src={logo} alt="logo" height="30px" width="auto" />
      <Box display="flex" alignSelf="center" onClick={() => window.open(URL, "_blank")} sx={{ cursor: "pointer" }}>
        <Typography width="100%" textAlign="right" component="span" fontSize={15} color="white" mr={1}>Escribir al whatsapp </Typography>
        <img src={whatsappLogo} alt="logo" height="20px" width="auto" />
      </Box>
    </Box>
  )
}