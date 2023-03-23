import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartComponent from "../src/Component/Start";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { useCallback, useState } from "react";
function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const theme1 = createTheme({
    palette: {
      mode: "light",
    },
  });
  const [themeMode, setTheme] = useState(theme1);
  const changeTheme = useCallback(() => {
    setTheme(themeMode.palette.mode == "light" ? theme : theme1);
  }, [themeMode]);

  return (
    <ThemeProvider theme={themeMode}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<StartComponent changeTheme={changeTheme} />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
