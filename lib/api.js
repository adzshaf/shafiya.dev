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
