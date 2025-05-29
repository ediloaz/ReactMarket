/*
enviar pow whatspp el perfume que me llegue acá por medio del URL, ekjemplo:
const URL = "https://wa.me/83026568?text=Hola%20me%20gustar%C3%ADa%20saber
entonces ahí formamos un mensaje de Hola, me gustaría saber más de este perfume: {title}, que cuesta {price} y el link es {url}
*/
import { ShareOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const BASE_URL = "http://localhost:5173/";

export const ShareButton = ({ id, title, price }) => {
  const message = `Hola, me gustaría saber más de este perfume: ${title}, que cuesta ${price}. El link es ${BASE_URL}detalle/${id}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

  return (
    <IconButton
      component="a"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      color="primary"
    >
      <ShareOutlined />
    </IconButton>
  );
}