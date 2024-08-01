
import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@utils/i18n/i18n.js'
import App from './App.jsx'
import './index.css'
import { Helmet } from 'react-helmet';
import { Resources } from '@utils/themes/Resources.jsx';


const { favicon, appName } = Resources();

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Helmet>
      <title>{appName}</title>
      <link rel="icon" type="image/png" href={favicon} />
    </Helmet>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>,
)
