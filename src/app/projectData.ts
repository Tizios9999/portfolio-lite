export interface ProjectData {
  id: number;
  name: string;
  imageLink: string;
  alt: string;
  description: string;
  technologies: string[];
  links: links;
}

interface links {
  youtube: string;
  live: string;
  blog: string;
  github: string;
}
