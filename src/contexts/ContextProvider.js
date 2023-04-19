import { createContext, useContext, useState } from "react";
const StateContext = createContext();

export const useStateContext = () => useContext(StateContext);

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Dark");
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  return (
    <StateContext.Provider
      value={{
        screenSize,
        setScreenSize,
        currentColor,
        setCurrentColor,
        currentMode,
        setCurrentMode,
        themeSettings,
        setThemeSettings,
        activeMenu,
        setActiveMenu,
        setColor,
        setMode,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
