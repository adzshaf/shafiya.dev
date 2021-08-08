import { ProjectCard } from "./ProjectCard";

const Works = (props) => {
  const { content } = props;
  return (
    <div className="mb-8 mt-8">
      <h1 className="text-ivory text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl underline mb-8">
        Recent Works.
      </h1>
      <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row">
        {content.map((item) => (
          <ProjectCard {...item} />
        ))}
      </div>
    </div>
  );
};

export default Works;
