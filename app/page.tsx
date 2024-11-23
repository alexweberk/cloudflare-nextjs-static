import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Homie Whazzup!</h1>
      <p>Hello World! This is the Home page dawwwggg!</p>
      <p>
        Visit the <Link href="/about">About</Link> page.
      </p>
    </div>
  );
};

export default Home;
