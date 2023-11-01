import { createContext, useContext, useEffect, useState } from "react";

// Create context
const ThemeContext = createContext();

// Create Provider function
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

// use Custom Hooks
const useTheme = () => useContext(ThemeContext);
export { useTheme, ThemeProvider };
