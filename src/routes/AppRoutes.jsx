import { Route, Routes } from "react-router-dom";
import { DashBoard, NotFound, Pie } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      {/* dashboard */}
      <Route path="/" element={<DashBoard />} />

      {/* Charts */}
      <Route path="/pie" element={<Pie />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
