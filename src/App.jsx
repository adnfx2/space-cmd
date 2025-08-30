import { useContext } from "react";
import { HashRouter } from "react-router";

import styles from "./App.module.css";
import { LoadingContext } from "./context/LoadingProvider.jsx";
import NavigationBar from "./components/NavigationBar/NavigationBar.jsx";
import AppRoute from "./routes/AppRoute.jsx";
import Motto from "./components/Motto/Motto.jsx";
import Loading from "./components/Loading/Loading.jsx";

function App() {
  const { isLoading } = useContext(LoadingContext);

  return (
    <>
      <HashRouter>
        <div className={styles["app"]}>
          <header className={styles["app__header"]}>
            <NavigationBar />
          </header>

          <main className={styles["app__main"]}>
            <AppRoute />
          </main>

          <footer className={styles["app__footer"]}>
            <Motto />
          </footer>
        </div>
      </HashRouter>
      {isLoading ? <Loading /> : ""}
    </>
  );
}

export default App;
