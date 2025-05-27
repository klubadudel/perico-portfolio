export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
  tags: string[];
  projectUrl?: string;
  repoUrl?: string;
}
