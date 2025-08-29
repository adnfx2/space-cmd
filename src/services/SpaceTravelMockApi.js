import { nanoid } from "nanoid";

class SpaceTravelMockApi {
  static MOCK_DB = {
    planets: [
      {
        id: 0,
        name: "Mercury",
        currentPopulation: 0,
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/8/88/Reprocessed_Mariner_10_image_of_Mercury.jpg",
      },
      {
        id: 1,
        name: "Venus",
        currentPopulation: 0,
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Venus_globe.jpg/800px-Venus_globe.jpg",
      },
      {
        id: 2,
        name: "Earth",
        currentPopulation: 100000,
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/800px-The_Blue_Marble_%28remastered%29.jpg",
      },
      {
        id: 3,
        name: "Mars",
        currentPopulation: 0,
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/800px-OSIRIS_Mars_true_color.jpg",
      },
      {
        id: 4,
        name: "Jupiter",
        currentPopulation: 0,
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Jupiter%2C_image_taken_by_NASA%27s_Hubble_Space_Telescope%2C_June_2019.png/800px-Jupiter%2C_image_taken_by_NASA%27s_Hubble_Space_Telescope%2C_June_2019.png",
      },
      {
        id: 5,
        name: "Saturn",
        currentPopulation: 0,
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/8423_20181_1saturn2016.jpg/1920px-8423_20181_1saturn2016.jpg",
      },
      {
        id: 6,
        name: "Uranus",
        currentPopulation: 0,
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29_-_JPEG_converted.jpg/800px-Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29_-_JPEG_converted.jpg",
      },
      {
        id: 7,
        name: "Neptune",
        currentPopulation: 0,
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/0/06/Neptune.jpg",
      },
    ],
    spacecrafts: [
      {
        id: "prispax",
        name: "Prispax",
        capacity: 10000,
        description:
          "Presenting the Astrolux Odyssey: a revolutionary spacecraft merging cutting-edge technology with lavish luxury, designed to usher 10,000 passengers into the solar system's embrace. A marvel of engineering, its sleek exterior is adorned with solar panels, fueling advanced propulsion while minimizing environmental impact." +
          "Within, the vessel transforms into a haven of opulence. Lavish suites offer cosmic panoramas, celestial artwork bedecks lounges, and sprawling gardens thrive in zero-gravity. Culinary excellence reigns in gourmet restaurants, while immersive theaters and VR chambers offer stellar entertainment." +
          "Safety remains paramount with cosmic radiation shielding and top-tier medical facilities. The Astrolux Odyssey not only advances space exploration but redefines elegance, uniting humanity's thirst for knowledge with a taste of the sublime.",
        pictureUrl: null,
        currentLocation: 2,
      },
      {
        id: "starbreaker",
        name: "Starbreaker",
        capacity: 20000,
        description:
          "The Starbreaker is a sleek, high-performance interstellar vessel engineered for deep-space reconnaissance and tactical disruption. Powered by a dual-core quantum drive, it can breach gravitational fields and navigate hostile sectors with precision. Its hull is layered with adaptive shielding, allowing it to absorb and redirect energy attacks. Designed for stealth and speed, the Starbreaker carries a crew of six and features modular AI-assisted navigation. Its signature maneuver—“the burn arc”—lets it slip past enemy scanners undetected. Whether scouting unknown systems or intercepting rogue transmissions, the Starbreaker is a symbol of agility, resilience, and technological mastery in the void",
        pictureUrl: "https://pixyship.com/sprites/8522.png",
        currentLocation: 2,
      },
      {
        id: "Dusting",
        name: "Dusting",
        capacity: 1000,
        description: "War spacecraft meant to switfly attack",
        pictureUrl: "https://pixyship.com/sprites/7893.png",
        currentLocation: 2,
      },
    ],
  };

  static MOCK_DB_KEY = "MOCK_DB";

  static prepareResponse() {
    return {
      isError: false,
      data: null,
    };
  }

  static wait(duration = 1000) {
    return new Promise((resolve) => setTimeout(resolve, duration));
  }

  static getMockDb() {
    let mockDb = localStorage.getItem(SpaceTravelMockApi.MOCK_DB_KEY);

    if (!mockDb) {
      localStorage.setItem(
        SpaceTravelMockApi.MOCK_DB_KEY,
        JSON.stringify(SpaceTravelMockApi.MOCK_DB),
      );
      mockDb = SpaceTravelMockApi.MOCK_DB;
    } else {
      mockDb = JSON.parse(mockDb);
    }

    return mockDb;
  }

  static setMockDb(mockDb) {
    localStorage.setItem(
      SpaceTravelMockApi.MOCK_DB_KEY,
      JSON.stringify(mockDb),
    );
  }

  static async getPlanets() {
    await SpaceTravelMockApi.wait();

    const response = SpaceTravelMockApi.prepareResponse();

    try {
      const mockDb = SpaceTravelMockApi.getMockDb();
      response.data = mockDb.planets;
    } catch (error) {
      response.isError = true;
      response.data = error;
    }

    return response;
  }

  static async getSpacecrafts() {
    await SpaceTravelMockApi.wait();

    const response = SpaceTravelMockApi.prepareResponse();

    try {
      const mockDb = SpaceTravelMockApi.getMockDb();
      response.data = mockDb.spacecrafts;
    } catch (error) {
      response.isError = true;
      response.data = error;
    }

    return response;
  }

  static async getSpacecraftById({ id }) {
    await SpaceTravelMockApi.wait();

    const response = SpaceTravelMockApi.prepareResponse();

    try {
      const mockDb = SpaceTravelMockApi.getMockDb();

      for (let i = 0; i < mockDb.spacecrafts.length; i++) {
        const spacecraft = mockDb.spacecrafts[i];

        if (spacecraft.id === id) {
          response.data = spacecraft;
          break;
        }
      }
    } catch (error) {
      response.isError = true;
      response.data = error;
    }

    return response;
  }

  static async buildSpacecraft({
    name,
    capacity,
    description,
    pictureUrl = undefined,
  }) {
    await SpaceTravelMockApi.wait();

    const response = SpaceTravelMockApi.prepareResponse();

    try {
      const spacecraft = {
        id: nanoid(),
        name,
        capacity,
        description,
        pictureUrl,
        currentLocation: 2,
      };

      const mockDb = SpaceTravelMockApi.getMockDb();
      mockDb.spacecrafts.push(spacecraft);
      SpaceTravelMockApi.setMockDb(mockDb);
    } catch (error) {
      response.isError = true;
      response.data = error;
    }

    return response;
  }

  static async destroySpacecraftById({ id }) {
    await SpaceTravelMockApi.wait();

    const response = SpaceTravelMockApi.prepareResponse();

    try {
      const mockDb = SpaceTravelMockApi.getMockDb();

      for (let i = 0; i < mockDb.spacecrafts.length; i++) {
        const spacecraft = mockDb.spacecrafts[i];

        if (spacecraft.id === id) {
          mockDb.spacecrafts.splice(i, 1);
          SpaceTravelMockApi.setMockDb(mockDb);
        }
      }
    } catch (error) {
      response.isError = true;
      response.data = error;
    }

    return response;
  }

  static async sendSpacecraftToPlanet({ spacecraftId, targetPlanetId }) {
    await SpaceTravelMockApi.wait();

    const response = SpaceTravelMockApi.prepareResponse();

    try {
      const mockDb = SpaceTravelMockApi.getMockDb();

      for (let i = 0; i < mockDb.spacecrafts.length; i++) {
        const spacecraft = mockDb.spacecrafts[i];

        if (spacecraft.id === spacecraftId) {
          if (spacecraft.currentLocation === targetPlanetId) {
            throw new Error("The spacecraft is already on this planet!");
          }

          let transferredCapacity = spacecraft.capacity;

          for (const planet of mockDb.planets) {
            if (planet.id === spacecraft.currentLocation) {
              if (planet.currentPopulation < transferredCapacity) {
                transferredCapacity = planet.currentPopulation;
              }

              planet.currentPopulation -= transferredCapacity;
            }
          }

          for (const planet of mockDb.planets) {
            if (planet.id === targetPlanetId) {
              planet.currentPopulation += transferredCapacity;
            }
          }

          spacecraft.currentLocation = targetPlanetId;
          SpaceTravelMockApi.setMockDb(mockDb);
        }
      }
    } catch (error) {
      response.isError = true;
      response.data = error;
    }

    return response;
  }
}

export default SpaceTravelMockApi;
