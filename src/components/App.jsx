import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";

import CollectReviews from "./Reviews";

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState(darkTheme);
  const { mode } = currentTheme.palette;

  function changeTheme() {
    mode === "dark" ? setCurrentTheme(lightTheme) : setCurrentTheme(darkTheme);
  }

  return (
    <div style={{ backgroundColor: "rgba(81, 81, 81, 1)", height: "100vh" }}>
      <ThemeProvider theme={currentTheme}>
        <Button
          variant="contained"
          color={mode === "dark" ? "secondary" : "primary"}
          onClick={changeTheme}
          style={{margin: '30px'}}
        >
          {mode === "dark" ? "Light Mode" : "Dark Mode"}
        </Button>
        <CollectReviews />
      </ThemeProvider>
    </div>
  );
};
