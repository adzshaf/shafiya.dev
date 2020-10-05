import Head from "next/head";
import { FC } from "react";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";

const Home: FC = () => {
  return (
    <div>
      <Head>
        <title>Shafiya Adzhani</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
