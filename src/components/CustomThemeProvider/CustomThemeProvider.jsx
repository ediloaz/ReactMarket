import { useContext, createContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, useMediaQuery } from "@mui/material";
import { getTheme } from "@utils/themes/CustomTheme";
import { useLocalStorage } from "@utils/hooks/useLocalStorage";

const themeModeContext = createContext();
const toggleThemeContext = createContext();

export const useThemeModeContext = () => {
  return useContext(themeModeContext);
};

export const useToggleThemeContext = () => {
  return useContext(toggleThemeContext);
};

export const CustomThemeProvider = (props) => {  
  const [themeMode, setThemeMode] = useLocalStorage('theme', useMediaQuery('(prefers-color-scheme: light)') ? 'dark' : 'light');

  const toggleThemeMode = () => {
    setThemeMode(themeMode == "dark" ? "light" : "dark");
  };
  return (
    <themeModeContext.Provider value={themeMode}>
      <toggleThemeContext.Provider value={toggleThemeMode}>
        <ThemeProvider theme={getTheme(themeMode)}>
          <CssBaseline />
          { props.children }
        </ThemeProvider>
      </toggleThemeContext.Provider>
    </themeModeContext.Provider>
  );
};
