// import React from "react";
// import "./App.css";
// import "./styles/Globle.scss";

// function App() {
//   return (
//     <div className="App">
// <div className="m-2 p-2 pb-4 md:m-10 mt-24 md:p-10 bg-gray-200 dark:bg-gray-800 md:rounded-3xl rounded-xl">
//   <h1 className="text-xl font-semibold">
//     Welcome to Marketing DashBoard
//   </h1>
// </div>
//     </div>
//   );
// }

// export default App;

import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { Sidebar } from "./components";

import { useStateContext } from "./contexts/ContextProvider";
import AppRoutes from "./routes/AppRoutes";

import "./styles/Globle.scss";

export const App = () => {
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
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full"></div>
              <div>
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
