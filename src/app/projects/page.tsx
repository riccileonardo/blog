import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import { Briefcase } from "lucide-react";

const Projects = () => {
  // Mock data - replace with your actual project information
  const projects = [
    {
      title: "Portfolio Website",
      description: "Website de portfolio pessoal com seções para projetos, habilidades e formulário de contato.",
      technologies: ["Next.js", "Tailwind CSS"],
      liveUrl: "",
      githubUrl: "https://github.com/riccileonardo/blog",
      date: "2025"
    },
    {
      title: "API de Gestão de Cursos com Autenticação JWT",
      description: "Desenvolvi uma API RESTful utilizando Python e o framework Flask, focada na gestão de cursos online. A aplicação foi estruturada para atender funcionalidades essenciais de uma plataforma educacional",
      technologies: ["Python", "Flask", "JWT"],
      liveUrl: "",
      githubUrl: "https://github.com/riccileonardo/Api_Python_Flask",
      date: "2023"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container max-w-7xl mx-auto px-4 py-12">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-primary/10 p-2 rounded-full">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-3xl font-bold">Meus Projetos</h1>
          </div>
          <p className="text-gray-600 max-w-2xl">
            Conheça alguns dos projetos que desenvolvi ao longo da minha carreira.
            Cada projeto representou uma oportunidade para aplicar e aprimorar minhas habilidades técnicas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
      
      <footer className="bg-gray-100 py-6">
        <div className="container max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} - Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Projects;
