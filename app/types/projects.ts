interface ProjectUrl {
  text: string;
  url: string;
}

export interface Project {
  title: string;
  category: string;
  subtext: string;
  url?: string;
  urls?: ProjectUrl[];
}