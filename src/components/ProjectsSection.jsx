import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "TaskFlow",
    description: "Full Stack task manager.",
    image: "/saumya-portfolio/projects/project1.jpeg",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "bcrypt"],
    githubUrl: "https://github.com/saumya1694/TaskFlow",
  },
  {
    id: 2,
    title: "ChatSphere",
    description: "Real time chat app.",
    image: "/saumya-portfolio/projects/project2.jpeg",
    tags: ["JavaScript", "Node.js", "Express.js", "Socket.io"],
    githubUrl: "https://github.com/saumya1694/ChatSphere",
  },
  {
    id: 3,
    title: "URL Shortener",
    description: "Converts long URLs into short links.",
    image: "/saumya-portfolio/projects/project3.jpeg",
    tags: ["HTML", "CSS", "JavaScript", "REST APIs"],
    githubUrl: "https://github.com/saumya1694/Url-Shortener",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore my recent work
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-end">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/saumya1694"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};