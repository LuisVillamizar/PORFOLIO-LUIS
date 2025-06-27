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
    id: "AUTOCENTAL",
    title: "AUTOCENTAL",
    tags: ["Spring Boot", "Boostrap", "Angular", "MySQL"],
    description:
      "Este es un proyecto personal que he desarrollado para mostrar mis habilidades, simula un aplicativo para un taller de autos y se conforma de dos partes el Back hecho en espringboot el fort en Angular y cuanta con una concexion a una DB(MySQL).",
    project_url: "https://github.com/LuisVillamizar/AUTOCENTRAL2",
    img_url: "/projects/ELC2.webp",
  },
  {
    id: "Calendar",
    title: "CALENDARIO RES",
    tags: ["Tailwind", "Spring Boot", "Angular"],
    description:
      "Proyecto desarrollado en compañia el cual tiene como fin implementarse en un ambiente empresarial donde se pueden agendar multiples reuniones, el fin del aplicativo es validar los espacios libres de las personas para que no se puedan agendar reuniones en espacios ya ocupados.",
    project_url: "https://github.com/LuisVillamizar/ELCalendar",
     img_url: "/projects/ELC1.webp",
  },
];
