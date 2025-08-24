import { useState, useContext } from "react";
import { useNavigate } from "react-router";

import styles from "./SpacecraftBuild.module.css";
import { LoadingContext } from "../../context/LoadingProvider.jsx";
import SpaceTravelApi from "../../services/SpaceTravelApi.js";

function SpacecraftBuild() {
  const INITIAL_SPACECRAFT = {
    name: "",
    capacity: "",
    description: "",
    pictureUrl: "",
  };
  const [spacecraft, setSpacecraft] = useState(INITIAL_SPACECRAFT);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const { enableLoading, disableLoading } = useContext(LoadingContext);

  function handleChangeOfFormInput(event) {
    const { name, value } = event.target;

    setSpacecraft((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleSubmitOfForm(event) {
    event.preventDefault();
    const { name, capacity, description } = spacecraft;

    let invalidInputs = [];
    if (!name) invalidInputs.push("Name is required!");
    if (!capacity) invalidInputs.push("Capacity is required!");
    if (typeof Number(capacity) !== "number") {
      invalidInputs.push("Capacity must be a number!");
    }
    if (!description) invalidInputs.push("Description is required!");

    if (invalidInputs.length !== 0) {
      setErrors(invalidInputs);
      return;
    }

    enableLoading();
    await SpaceTravelApi.buildSpacecraft(spacecraft);
    navigate(-1);
    disableLoading();
  }

  function handleClickOfBack(event) {
    navigate(`/spacecraft`);
  }

  return (
    <>
      <button className={styles["button__back"]} onClick={handleClickOfBack}>
        Back 👈
      </button>
      <div>
        <form onSubmit={handleSubmitOfForm}>
          <div className={styles["form"]}>
            <div className={styles["form__inputs"]}>
              <div className={styles["form__inputContainer"]}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={spacecraft.name}
                  onChange={handleChangeOfFormInput}
                  autoComplete="off"
                />
              </div>

              <div className={styles["form__inputContainer"]}>
                <input
                  type="text"
                  name="capacity"
                  placeholder="Capacity"
                  value={spacecraft.capacity}
                  onChange={handleChangeOfFormInput}
                  autoComplete="off"
                />
              </div>

              <div className={styles["form__inputContainer"]}>
                <textarea
                  name="description"
                  placeholder="Description"
                  value={spacecraft.description}
                  onChange={handleChangeOfFormInput}
                />
              </div>

              <div className={styles["form__inputContainer"]}>
                <input
                  type="text"
                  name="pictureUrl"
                  placeholder="Picture URL"
                  value={spacecraft.pictureUrl}
                  onChange={handleChangeOfFormInput}
                  autoComplete="off"
                />
              </div>
            </div>

            <div className={styles["submitContainer"]}>
              <div className={styles["errorContainer"]}>
                {errors.map((error, index) => (
                  <div key={index} className={styles["error"]}>
                    {error}
                  </div>
                ))}
              </div>

              <div className={styles["button__submit"]}>
                <button type="submit" onClick={handleSubmitOfForm}>
                  Build 🏗️
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SpacecraftBuild;
