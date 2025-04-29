import Header from "@/components/Header";
import BlogPostCard from "@/components/BlogPostCard";
import { FileText } from "lucide-react";

const BlogPosts = () => {
  // Mock data - replace with your actual blog post information
  const blogPosts = [
    {
      title: "Como otimizar seu workflow de desenvolvimento",
      excerpt: "Aprenda dicas e truques para melhorar sua produtividade como desenvolvedor com ferramentas e técnicas modernas.",
      date: "15 Mar 2023",
      image: "/placeholder.svg",
      readTime: "5",
      categories: ["Desenvolvimento", "Produtividade"],
      url: "#"
    },
    {
      title: "Introdução ao React Hooks",
      excerpt: "Um guia completo sobre como começar a utilizar React Hooks em seus projetos para um código mais limpo e manutenível.",
      date: "02 Fev 2023",
      image: "/placeholder.svg",
      readTime: "8",
      categories: ["React", "JavaScript", "Frontend"],
      url: "#"
    },
    {
      title: "Criando APIs RESTful com Node.js e Express",
      excerpt: "Aprenda a desenvolver APIs RESTful robustas e escaláveis utilizando Node.js e Express, com exemplos práticos.",
      date: "18 Jan 2023",
      image: "/placeholder.svg",
      readTime: "10",
      categories: ["Node.js", "Backend", "API"],
      url: "#"
    },
    {
      title: "Melhores práticas de CSS em 2023",
      excerpt: "Um overview das melhores práticas, ferramentas e metodologias para escrever CSS em 2023.",
      date: "05 Jan 2023",
      image: "/placeholder.svg",
      readTime: "7",
      categories: ["CSS", "Frontend", "Design"],
      url: "#"
    },
    {
      title: "Implementando autenticação com JWT",
      excerpt: "Passo a passo para implementar um sistema de autenticação seguro utilizando JSON Web Tokens.",
      date: "20 Dez 2022",
      image: "/placeholder.svg",
      readTime: "12",
      categories: ["Segurança", "JWT", "Backend"],
      url: "#"
    },
    {
      title: "Gerenciamento de estado global com Redux Toolkit",
      excerpt: "Aprenda a simplificar o gerenciamento de estado em aplicações React utilizando Redux Toolkit.",
      date: "05 Dez 2022",
      image: "/placeholder.svg",
      readTime: "9",
      categories: ["React", "Redux", "Frontend"],
      url: "#"
    },
    {
      title: "Dockerizando sua aplicação Node.js",
      excerpt: "Um guia prático sobre como containerizar sua aplicação Node.js com Docker para facilitar o deploy e garantir consistência entre ambientes.",
      date: "15 Nov 2022",
      image: "/placeholder.svg",
      readTime: "8",
      categories: ["Docker", "DevOps", "Node.js"],
      url: "#"
    },
    {
      title: "Testes automatizados com Jest e Testing Library",
      excerpt: "Aprenda como implementar testes unitários e de integração em aplicações React utilizando Jest e Testing Library.",
      date: "01 Nov 2022",
      image: "/placeholder.svg",
      readTime: "11",
      categories: ["Testes", "React", "Jest"],
      url: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container max-w-7xl mx-auto px-4 py-12">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-primary/10 p-2 rounded-full">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-3xl font-bold">Blog</h1>
          </div>
          <p className="text-gray-600 max-w-2xl">
            Compartilho aqui pensamentos, tutoriais e insights sobre desenvolvimento, tecnologia e outras áreas de interesse.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} {...post} />
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

export default BlogPosts;
