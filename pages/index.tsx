import Head from "next/head";
import Layout from "../src/components/Layout";
import Hero from "../src/components/Hero";
import Works from "../src/components/Works";
import { getAllProjects } from "../lib/api";

type Props = {
  content: Array<any>;
};

export function getStaticProps() {
  const content = getAllProjects();
  const contentType = content.map((item, index) => {
    let cloneItem = { ...item };
    cloneItem["className"] = index === 0 ? "mr-4" : "";
    return cloneItem;
  });

  return {
    props: { content: contentType },
  };
}

const Home = ({ content }: Props) => {
  return (
    <div>
      <Head>
        <title>Shafiya Adzhani</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Hero />
        <div id="work">
          <Works content={content} />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
