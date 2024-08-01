import { AlertMessageProvider } from '@components/AlertMessage/AlertMessage';
import { CustomThemeProvider } from './components/CustomThemeProvider/CustomThemeProvider';
import { Router } from './routes/Router';
import { LicenseInfo } from '@mui/x-data-grid-premium';
import { TansStankQueryProvider } from '@components/TanStackQueryProvider/TanStackQueryProvider';

LicenseInfo.setLicenseKey(import.meta.env.MUIX_PREMIUM);

function App() {

  return (
    <CustomThemeProvider>
      <TansStankQueryProvider>
        <AlertMessageProvider>
          <Router />
        </AlertMessageProvider>
      </TansStankQueryProvider>
    </CustomThemeProvider>
  );
}

export default App;
