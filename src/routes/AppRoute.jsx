import { Routes, Route, Navigate } from "react-router";

import Home from "../pages/Home/Home";
// import Spacecrafts from "../pages/Spacecrafts/Spacecrafts.jsx";
// import SpacecraftBuild from "../pages/SpacecraftBuild/SpacecraftBuild.jsx";
// import Spacecraft from "../pages/Spacecraft/Spacecraft.jsx";
// import Planets from "../pages/Planets/Planets.jsx";

function AppRoute() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/spacecraft"}>
        <Route index element={<div>spacecraft</div>} />
        <Route path={":id"} element={<div>spacecraft-ITEM</div>} />
        <Route path={"build"} element={<div>spacecraft-BUILD</div>} />
      </Route>
      <Route path={"/planets"} element={<div>planets</div>} />
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
}

export default AppRoute;
