import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
  return (
    <TooltipComponent
      content={title}
      position="BottomCenter"
      cssClass="my-tooltip"
    >
      <button
        type="button"
        onClick={() => customFunc()}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 top-2 right-2"
        ></span>
        {icon}
      </button>
    </TooltipComponent>
  );
};

const BurgurMenu = () => {
  const { currentColor, activeMenu, setActiveMenu, setScreenSize, screenSize } =
    useStateContext();
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setActiveMenu, setScreenSize]);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [setActiveMenu, screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between p-2 md:mr-6 md-ml-6 relative">
      <NavButton
        customFunc={handleActiveMenu}
        title="Menu"
        icon={<AiOutlineMenu />}
        color={currentColor}
      />
    </div>
  );
};

export default BurgurMenu;
