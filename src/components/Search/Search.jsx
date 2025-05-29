import { Search } from "@mui/icons-material"
import { IconButton, InputBase, Paper } from "@mui/material"

export const SearchInput = () => {
    return (
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%", margin: "auto", my: 1 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Escribe acá tu perfume para buscarlo..."
          inputProps={{ 'aria-label': 'search parfums' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <Search />
        </IconButton>
      </Paper>
    )
  }