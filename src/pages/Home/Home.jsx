import styles from "./Home.module.css";

const homeContent = [
  {
    title: "🌌 Journy into the Future",
    content: `In a world where the impossible has become reality, where the stars
          are no longer out of react, welcome to the future of humanity's
          survival and exploration. Witness the evolution of technology as it
          transform barren planets into thriving havings, all made possible by
          the wonders of innovation and human determination`,
  },
  {
    title: "🌍 From Nhegrect to Innovation",
    content: `Once the cradle of civilization, Earth now stands as a solemn reminder
          of the consequences of neglect and enviromental decline. But fear not,
          for the ingenuity of mankind has soared to new heights. With our
          relentless pursuit of advancement, we have not only healed our scars
          but extended our reach across the cosmos.`,
  },
  {
    title: "🚀 Enter Space Travel: Where Dreams Take Flight",
    content: `Embark on an extraordinary journey with our groundbreaking web
          application, aptly named "Space Travel." As a commander engineer, the
          fate of humanity's exodus rests in your capable hands. Prepare to face
          the ultimate challenge: evacuating humankind from their birthplace and
          guiding them towards a future among the stars.`,
  },
  {
    title: "🔧 Engineer, Explorer, Leader",
    content: `Space Travel empowers you to engineer, design, and even dismantle
          spacecraft. Craft vessels that defy the boundaries of imagination,
          envisioning a future where life flourishes beyond the stars. But
          remember, your role extends beyond contruction - you are a leader, an
          explorer, a commander steering huminty's destiny.`,
  },
];

function Home() {
  return (
    <main className={styles.home}>
      <h1>Space Travel: Expanding Horizon Beyond Earth</h1>
      {homeContent.map(({ title, content }) => (
        <section className={styles["h-box"]}>
          <h2>{title}</h2>
          <p>{content}</p>
        </section>
      ))}
    </main>
  );
}

export default Home;
