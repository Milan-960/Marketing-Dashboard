import { Route, Routes } from "react-router-dom";
import { DashBoard, NotFound } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      {/* dashboard */}
      <Route path="/" element={<DashBoard />} />

      {/* Charts */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
