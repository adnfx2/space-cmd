import { useState, useEffect, useContext } from "react";

import styles from "./Planets.module.css";
import { LoadingContext } from "../../context/LoadingProvider.jsx";
import SpaceTravelApi from "../../services/SpaceTravelApi.js";

function Planets() {
  const [planetsWithSpacecrafts, setPlanetsWithSpacecrafts] = useState([]);
  const { isLoading, enableLoading, disableLoading } =
    useContext(LoadingContext);
  const [selectedPlanetId, setSelectedPlanetId] = useState();
  const [selectedSpacecraftId, setSelectedSpacecraftId] = useState();

  async function getPlanetsWithSpacecrafts() {
    // GET PLANETS
    const { data: planets, isError: isErrorPlanets } =
      await SpaceTravelApi.getPlanets();
    // GET SPACECRAFTS
    const { data: spacecrafts, isError: isErrorSpacecrafts } =
      await SpaceTravelApi.getSpacecrafts();
    console.log(" -- ");
    if (!isErrorPlanets && !isErrorSpacecrafts) {
      spacecrafts.forEach((spacecraft) => {
        const spacecraftLocation =
          planets[spacecraft.currentLocation] || planets[2];
        console.log({ spacecrafts, spacecraft, spacecraftLocation });
        if (spacecraftLocation.spacecrafts) {
          spacecraftLocation.spacecrafts.push(spacecraft);
        } else {
          spacecraftLocation.spacecrafts = [spacecraft];
        }
      });

      setPlanetsWithSpacecrafts(planets);
    }
  }

  useEffect(() => {
    async function runGetPlanetsWithSpacecrafts() {
      enableLoading();
      await getPlanetsWithSpacecrafts();
      disableLoading();
    }

    runGetPlanetsWithSpacecrafts();
  }, [enableLoading, disableLoading]);

  function handleClickOfPlanet(id) {
    setSelectedPlanetId(id);
  }

  async function handleClickOfSpacecraft(spacecraftId) {
    // Prevent spacecraft moves while moving one
    if (isLoading) return;
    // When no planet selected create a warning
    if (!selectedPlanetId) return alert("Select planet first");
    // SET THE SELECTED SPACECRAFT
    setSelectedSpacecraftId(spacecraftId);
    // SEND SPACECRAFT TO PLANET USING THE api
    enableLoading();
    await SpaceTravelApi.sendSpacecraftToPlanet({
      spacecraftId,
      targetPlanetId: selectedPlanetId,
    });
    // REFRESH THE PAGE CONTENT
    await getPlanetsWithSpacecrafts();
    disableLoading();
  }

  return (
    <>
      {planetsWithSpacecrafts.map((planet, index) => (
        <div key={index} className={styles["planetWithSpacecrafts"]}>
          <div
            className={`${styles["planet"]} ${selectedPlanetId === planet.id && styles["planet--selected"]}`}
            onClick={() => handleClickOfPlanet(planet.id)}
          >
            <div className={styles["planet__imageContainer"]}>
              <img
                src={planet.pictureUrl}
                alt={`The planet ${planet.name}`}
                className={styles["planet__image"]}
              />
            </div>

            <div className={styles["planet__info"]}>
              <div>{planet.name}</div>
              <div>{planet.currentPopulation}</div>
            </div>
          </div>

          <div className={styles["planet__spacecrafts"]}>
            {planet.spacecrafts?.map((spacecraft, index) => (
              <div
                key={index}
                className={`${styles["planet__spacecraft"]} ${selectedSpacecraftId === spacecraft.id && styles["planet__spacecraft--selected"]}`}
                onClick={() =>
                  handleClickOfSpacecraft(spacecraft.id, planet.id)
                }
              >
                <div className={styles["planet__spacecraft__imageContainer"]}>
                  {spacecraft.pictureUrl ? (
                    <img
                      src={spacecraft.pictureUrl}
                      alt={`The spacecraft ${spacecraft.name}`}
                      className={styles["planet__spacecraft__image"]}
                    />
                  ) : (
                    <span
                      className={styles["planet__spacecraft__image--default"]}
                    >
                      🚀
                    </span>
                  )}
                </div>
                <div className={"planet__spacecraft__info"}>
                  <div>{spacecraft.name}</div>
                  <div>{spacecraft.capacity}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default Planets;
