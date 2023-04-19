import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";

import { ThemeSettings } from "./theme";
import { Sidebar } from "./components";
import { useStateContext } from "./contexts/ContextProvider";
import AppRoutes from "./routes/AppRoutes";

import "./styles/Globle.scss";

const App = () => {
  const {
    currentColor,
    setCurrentColor,
    currentMode,
    setCurrentMode,
    activeMenu,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if ((currentThemeColor, currentThemeMode)) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <>
      <div className={currentMode === "Dark" ? "dark" : ""}>
        <BrowserRouter>
          <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4" style={{ zIndex: "" }}>
              <TooltipComponent content="Settings" position="Top">
                <button
                  type="button"
                  onClick={() => setThemeSettings(true)}
                  style={{ backgroundColor: currentColor, borderRadius: "50%" }}
                  className="text-3xl text-white p-3 drop-shadow-xl hover:bg-light-gray"
                >
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>
            {activeMenu ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white z-10">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
            )}
            <div
              className={
                activeMenu
                  ? "dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full"
                  : "bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex-2"
              }
            >
              <div>
                {themeSettings && <ThemeSettings />}
                <AppRoutes />
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
