import { Home } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { Resources } from "@utils/themes/Resources";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const NotFound = () => {
  const { notFoundLogo } = Resources();
  const { t } = useTranslation();

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ flexGrow: 1, height: '100vh', width: '100vw', background: (theme) => theme.palette.primary.main, color: '#fff', }}
    >
      <Typography variant="h1" sx={{fontWeight: '400', fontSize: '2.5rem !important'}}>
      {t('404')}
      </Typography>
      <img src={notFoundLogo} alt="logo" style={{maxWidth: '20em', margin: '2em', filter: 'drop-Shadow(0 4px 6px #000)' }} />
      <Typography variant="h4" sx={{mb: '2em'}}>
        {t('warnings.notFountMessage')}
      </Typography>
      <Button component={Link} to="/" color="primary" variant="contained" endIcon={<Home/>}>{t('returnToStart')}</Button>
    </Grid>
  );
};
