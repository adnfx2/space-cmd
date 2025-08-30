import { useContext } from "react";
import { BrowserRouter } from "react-router";

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
      <BrowserRouter basename="/space-cmd">
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
      </BrowserRouter>
      {isLoading ? <Loading /> : ""}
    </>
  );
}

export default App;
