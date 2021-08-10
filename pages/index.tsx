import Head from "next/head";
import Layout from "../src/components/Layout";
import Hero from "../src/components/Hero";
import Works from "../src/components/Works";
import { getAllExperiences, getAllProjects } from "../lib/api";
import Timeline from "../src/components/Timeline";

type Props = {
  content: Array<any>;
  experienceContent: any;
};

export function getStaticProps() {
  const content = getAllProjects();
  const experienceContent = getAllExperiences();

  const contentType = content.map((item, index) => {
    let cloneItem = { ...item };
    cloneItem["className"] = index === 0 ? "mr-4" : "";
    return cloneItem;
  });

  return {
    props: { content: contentType, experienceContent: experienceContent },
  };
}

const Home = ({ content, experienceContent }: Props) => {
  return (
    <div>
      <Head>
        <title>Shafiya Adzhani</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Hero />
        <Timeline experiences={experienceContent} />
        <div id="work">
          <Works content={content} />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
