import { useState, useContext, useEffect } from "react";
import { BrowserRouter } from "react-router";

import styles from "./App.module.css";
import { LoadingContext } from "./context/LoadingProvider.jsx";
// import NavigationBar from "./components/NavigationBar/NavigationBar.jsx";
// import AppRoute from "./routes/AppRoute.jsx";
// import Motto from "./components/Motto/Motto.jsx";
// import Loading from "./components/Loading/Loading.jsx";

import SpaceTravelApi from "./services/SpaceTravelApi.js";

async function test() {
  const planets = await SpaceTravelApi.getPlanets();
  console.log(planets);
}

function App() {
  const { isLoading } = useContext(LoadingContext);
  useEffect(() => {
    test();
  }, []);

  return (
    <>
      {
        <BrowserRouter>
          <div className={styles["app"]}>
            <header className={styles["app__header"]}>todo</header>

            <main className={styles["app__main"]}>todo</main>

            <footer className={styles["app__footer"]}>todo</footer>
          </div>
        </BrowserRouter>
      }

      {
        // todo render Loading based on its condition
      }
    </>
  );
}

export default App;
