import { useState, useEffect, useContext } from "react";
import { LoadingContext } from "../../context/LoadingProvider.jsx";
import { useParams, useNavigate } from "react-router";

import styles from "./Spacecraft.module.css";
import SpaceTravelApi from "../../services/SpaceTravelApi.js";

function Spacecraft() {
  const [spacecraft, setSpacecraft] = useState();
  const { enableLoading, disableLoading } = useContext(LoadingContext);
  const { id } = useParams();
  const navigate = useNavigate();

  console.log({ spacecraft });

  useEffect(() => {
    async function getSpacecraft() {
      enableLoading();
      const { error, data } = await SpaceTravelApi.getSpacecraftById({ id });
      if (error) {
        console.error(`api getSpacecraftById(${id}) failed`, error);
      } else {
        setSpacecraft(data);
      }
      disableLoading();
    }
    getSpacecraft();
  }, [enableLoading, disableLoading, id]);

  return (
    <div className={styles.spacecraft__container}>
      <button
        className={styles["button__back"]}
        onClick={() => {
          navigate(-1);
        }}
      >
        Back 👈
      </button>
      <ul className={styles.spacecraft__grid}>
        {spacecraft ? (
          <>
            <li className={styles.spacecraft__img}>
              <div className={styles.spacecraft__imageContainer}>
                {spacecraft.pictureUrl ? (
                  <img src={spacecraft.pictureUrl} alt={spacecraft.name} />
                ) : (
                  <span>🚀</span>
                )}
              </div>
            </li>
            <li className={styles.spacecraft__name}>Name: {spacecraft.name}</li>
            <li className={styles.spacecraft__cap}>
              Capacity: {spacecraft.capacity}
            </li>
            <li className={styles.spacecraft__info}>
              <div> Description:</div>
              <br /> {spacecraft.description}
            </li>
          </>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}

export default Spacecraft;
