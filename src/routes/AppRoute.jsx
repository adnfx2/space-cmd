import { Routes, Route, Navigate } from "react-router";

import Home from "../pages/Home/Home";
import Spacecrafts from "../pages/Spacecrafts/Spacecrafts.jsx";
import SpacecraftBuild from "../pages/SpacecraftBuild/SpacecraftBuild.jsx";
import Spacecraft from "../pages/Spacecraft/Spacecraft.jsx";
import Planets from "../pages/Planets/Planets.jsx";

function AppRoute() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/spacecraft"}>
        <Route index element={<Spacecrafts />} />
        <Route path={":id"} element={<Spacecraft />} />
        <Route path={"build"} element={<SpacecraftBuild />} />
      </Route>
      <Route path={"/planets"} element={<Planets />} />
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
}

export default AppRoute;
