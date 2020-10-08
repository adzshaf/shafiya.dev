import { FC } from "react";

export type Project = {
  project_image: string;
  project_title: string;
  project_link: string;
  project_description: string;
  project_tags: string[];
  className: string;
};

export const ProjectCard: FC<Project> = ({
  project_image,
  project_title,
  project_link,
  project_description,
  project_tags,
  className,
}: Project) => {
  return (
    <div className={`bg-bright-gray w-100 ${className}`}>
      <img src={project_image} />
      <div className="text-ivory p-4">
        <h1 className="mb-4">{project_title}</h1>
        <a className="underline" href={project_link}>
          {project_link}
        </a>
        <p className="my-4">{project_description}</p>
        <div className="underline flex">
          {project_tags.map((tag) => (
            <p className="mr-4">{tag}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
