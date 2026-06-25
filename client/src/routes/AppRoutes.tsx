import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import CompanyDetails from "../pages/CompanyDetails";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company/:companyId" element={<CompanyDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
