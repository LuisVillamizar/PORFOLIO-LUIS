interface Project {
  id: string;
  title: string;
  tags: string[];
  description: string;
  project_url: string;
  img_url: string;
}

export const Projects: Project[] = [
  {
    id: "fasmee-web",
    title: "FASMEE",
    tags: ["Javascript", "PUG", "ExpressJS", "Bootstrap"],
    description:
      "Sitio web institucional del FASMEE con información sobre servicios y actividades, diseñado para ser accesible y fácil de navegar.",
    project_url: "https://fasmee.gob.ve/",
    img_url: "/projects/fasmee.webp",
  },
  {
    id: "python",
    title: "Fundamentos de Python",
    tags: ["Python"],
    description:
      "Repositorio con fundamentos de Python, ideal para aprender y reforzar conceptos básicos y avanzados.",
    img_url: "/projects/python.webp",
    project_url: "https://github.com/chrisestabaocupado/python",
  },
];
