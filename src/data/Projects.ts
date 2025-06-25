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
    id: "Portafolio",
    title: "PORTAFOLIO",
    tags: ["Tailwind", "JavaScript", "Astro"],
    description:
      "Desarrolle este Porfolio para aplicar mis conocimientos en Astro, implemente algunas librerias de JS para que la pagina fuera mas interacitva, realmente el proyecto es una hoja de vida la cual muestra informacion sobre mi trayectoria.",
    project_url: "NA",
    img_url: "/projects/fasmee.webp",
  },
  {
    id: "Calendar",
    title: "CALENDARIO RES",
    tags: ["Tailwind", "Spring Boot", "Angular "],
    description:
      "Proyecto desarrollado en compañia el cual tiene como fin impremetarse en un ambiente empresarial donde se pueden agendar multiples reuniones, el fin del aplicativo es validar los espacios libres de las personas para que no se puedan agendar reuniones en espacios ya ocupados.",
    project_url: "NA",
    img_url: "/projects/python.webp",
  },
];
