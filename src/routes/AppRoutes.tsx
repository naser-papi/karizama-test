import { Route, Routes } from "react-router-dom";
import { PageRoutes } from "../models/GeneralTypes";
import HomePage from "../pages/home/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={PageRoutes.ROOT} element={<HomePage />}></Route>
    </Routes>
  );
};

export default AppRoutes;
