import { Route, Routes } from "react-router-dom";
import {
  DashBoard,
  Line,
  Pie,
  PyramidChart,
  NotFound,
  DataTables,
} from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      {/* dashboard */}
      <Route path="/" element={<DashBoard />} />
      <Route path="/data-table" element={<DataTables />} />
      {/* Charts */}
      <Route path="/line" element={<Line />} />
      <Route path="/pie" element={<Pie />} />
      <Route path="/bar" element={<PyramidChart />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
