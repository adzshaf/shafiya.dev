import Head from "next/head";
import { FC } from "react";
import Layout from "../src/components/Layout";
import Hero from "../src/components/Hero";
import Works from "../src/components/Works";

const Home: FC = () => {
  return (
    <div>
      <Head>
        <title>Shafiya Adzhani</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Hero />
        <Works />
      </Layout>
    </div>
  );
};

export default Home;
