import Header from "@/components/Header";
import CourseCard from "@/components/CourseCard";
import { BookOpen } from "lucide-react";

const Courses = () => {
  // Mock data - replace with your actual course information
  const courses = [
    {
      title: "HTML e CSS: Classes, posicionamento e Flexbox",
      institution: "Alura",
      description: "Curso focado em técnicas modernas de estilização e posicionamento de elementos utilizando Flexbox.",
      completionDate: "24/04/2025",
      duration: "8h",
      certificate: "https://cursos.alura.com.br/certificate/leonardo-ricci/html-css-classes-posicionamento-flexbox",
      tags: ["HTML", "CSS", "Flexbox"]
    },
    {
      title: "Lógica de programação: mergulhe em programação com JavaScript",
      institution: "Alura",
      description: "Fundamentos da lógica de programação aplicados com JavaScript para o desenvolvimento de algoritmos básicos.",
      completionDate: "30/01/2025",
      duration: "6h",
      certificate: "https://cursos.alura.com.br/certificate/leonardo-ricci/logica-programacao-mergulhe-programacao-javascript",
      tags: ["JavaScript", "Programação", "Lógica"]
    },
    {
      title: "Responsive Web Design",
      institution: "FreeCodeCamp",
      description: "Curso completo de design responsivo abordando boas práticas de criação de layouts adaptáveis a diferentes dispositivos.",
      completionDate: "Data não informada",
      duration: "Não informado",
      certificate: "#",
      tags: ["HTML", "CSS", "Design Responsivo"]
    },
    {
      title: "Git e GitHub: dominando controle de versão de código",
      institution: "Alura",
      description: "Aprenda a utilizar Git e GitHub para versionamento de código e trabalho em equipe em projetos de software.",
      completionDate: "14/01/2025",
      duration: "8h",
      certificate: "https://cursos.alura.com.br/certificate/leonardo-ricci/git-github-dominando-controle-versao-codigo",
      tags: ["Git", "GitHub", "Controle de Versão"]
    },
    {
      title: "HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags",
      institution: "Alura",
      description: "Introdução ao desenvolvimento web com HTML e CSS, focando em organização de projetos e estruturação de páginas.",
      completionDate: "25/04/2025",
      duration: "8h",
      certificate: "https://cursos.alura.com.br/certificate/leonardo-ricci/html-css-ambiente-arquivos-tags",
      tags: ["HTML", "CSS", "Desenvolvimento Web"]
    }
  ];  

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container max-w-7xl mx-auto px-4 py-12">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-primary/10 p-2 rounded-full">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-3xl font-bold">Meus Cursos</h1>
          </div>
          <p className="text-gray-600 max-w-2xl">
            Estes são os cursos e certificações que concluí ao longo da minha jornada profissional.
            Estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
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

export default Courses;
