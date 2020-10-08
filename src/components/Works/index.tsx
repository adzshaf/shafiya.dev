import { ProjectCard } from "./ProjectCard";

const Works = (props) => {
  const { content } = props;
  return (
    <div className="mb-8">
      <h1 className="text-ivory text-5xl underline mb-8">Recent Works.</h1>
      <div className="flex">
        {content.map((item) => (
          <ProjectCard {...item} />
        ))}
      </div>
    </div>
  );
};

export default Works;
