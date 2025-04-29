import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import { Briefcase } from "lucide-react";

const Projects = () => {
  // Mock data - replace with your actual project information
  const projects = [
    {
      title: "E-commerce App",
      description: "Uma plataforma de comércio eletrônico completa com sistema de pagamentos, carrinho e perfil de usuário.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2023"
    },
    {
      title: "Task Manager",
      description: "Aplicativo de gerenciamento de tarefas com funcionalidades de arrastar e soltar, priorização e lembretes.",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2022"
    },
    {
      title: "Portfolio Website",
      description: "Website de portfolio pessoal com seções para projetos, habilidades e formulário de contato.",
      image: "/placeholder.svg",
      technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2022"
    },
    {
      title: "Weather App",
      description: "Aplicativo de previsão do tempo que consome APIs meteorológicas e exibe dados em um formato amigável.",
      image: "/placeholder.svg",
      technologies: ["React", "Weather API", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2021"
    },
    {
      title: "Blog CMS",
      description: "Sistema de gerenciamento de conteúdo para blog com painel administrativo e editor WYSIWYG.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "TipTap"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2021"
    },
    {
      title: "Fitness Tracker",
      description: "Aplicativo mobile para rastreamento de exercícios, nutrição e progresso físico.",
      image: "/placeholder.svg",
      technologies: ["React Native", "Redux", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2020"
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
