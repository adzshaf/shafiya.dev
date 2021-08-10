import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "content");

export function getAllProjects() {
  const projectDirectory = join(postsDirectory, `/projects`);
  const slugs = fs.readdirSync(projectDirectory);
  const posts = slugs.map((slug) => getProjectBySlug(slug));
  return posts;
}

export function getProjectBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `/projects`);
  const file = join(fullPath, `${realSlug}.md`);
  const fileContents = fs.readFileSync(file, "utf8");
  const { data } = matter(fileContents);

  return data;
}

export function getAllExperiences() {
  const projectDirectory = join(postsDirectory, `/experiences`);
  const slugs = fs.readdirSync(projectDirectory);
  const experiences = slugs.map((slug) => getExperienceBySlug(slug));

  function replacer(key, value) {
    if (value instanceof Date) {
      return value.toString();
    }
    return value;
  }

  let result = JSON.stringify(experiences, replacer);
  let resultParse = JSON.parse(result);
  let sortedResult = resultParse.sort(function (a, b) {
    return (
      new Date(b.experience_start_period) - new Date(a.experience_start_period)
    );
  });

  return sortedResult;
}

export function getExperienceBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `/experiences`);
  const file = join(fullPath, `${realSlug}.md`);
  const fileContents = fs.readFileSync(file, "utf8");
  const { data } = matter(fileContents);

  return data;
}
