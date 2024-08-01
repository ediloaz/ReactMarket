import { Box } from '@mui/material';

const Thumbnail = ({ img, index, onClick, isActive }) => {
  return (
    <Box
      onClick={() => onClick(index)}
      sx={{
        cursor: 'pointer',
        border: isActive ? '2px solid blue' : '2px solid transparent',
        borderRadius: '4px',
      }}
    >
      <img src={img} alt={`Thumbnail ${index + 1}`} style={{ width: '100px', height: '60px', borderRadius: '4px' }} />
    </Box>
  );
};

export default Thumbnail;