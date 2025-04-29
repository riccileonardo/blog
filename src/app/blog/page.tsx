import Header from "@/components/Header";
import BlogPostCard from "@/components/BlogPostCard";
import { FileText } from "lucide-react";

const BlogPosts = () => {
  const blogPosts = [
    {
      title: "HTML é ultrapassado? Entenda por que ele ainda é essencial",
      excerpt: "Em um mercado onde surgem novas tecnologias quase todos os meses, é natural pensar que algumas linguagens 'antigas' ficaram para trás.",
      image: "/images/html.png",
      readTime: "5",
      categories: ["Html", "Modernidade"],
      url: "/blog/html-e-ultrapassado"
    },
    {
      title: "Os Principais Comandos do Git Que Todo Dev Precisa Saber",
      excerpt: "Conheça os comandos essenciais do Git para gerenciar seus projetos com eficiência, desde log e branch até stash e rebase.",
      image: "/images/comandos-git.png",
      readTime: "6",
      categories: ["Git", "Versionamento", "Desenvolvimento"],
      url: "/blog/comandos-git"
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
