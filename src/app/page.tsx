"use client";

import Link from "next/link";
import Header from "@/components/Header";
import ProfileSection from "@/components/ProfileSection";
import CourseCard from "@/components/CourseCard";
import ProjectCard from "@/components/ProjectCard";
import BlogPostCard from "@/components/BlogPostCard";
import { Briefcase, BookOpen, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const featuredCourses = [
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
  ];

  const featuredProjects = [
    {
      title: "E-commerce Platform",
      description: "Uma plataforma de comércio eletrônico completa com sistema de pagamentos, carrinho e perfil de usuário.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2023"
    },
    {
      title: "Portfolio Website",
      description: "Website de portfolio pessoal com seções para projetos, habilidades e formulário de contato.",
      technologies: ["Next.js", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/riccileonardo/blog",
      date: "2025"
    }
  ];

  const featuredPosts = [
    {
      title: "HTML é ultrapassado? Entenda por que ele ainda é essencial",
      excerpt: "Em um mercado onde surgem novas tecnologias quase todos os meses, é natural pensar que algumas linguagens 'antigas' ficaram para trás.",
      date: "28 Abr 2025",
      image: "/images/html.png",
      readTime: "5",
      categories: ["Html", "Modernidade"],
      url: "/blog/html-e-ultrapassado"
    },
    {
      title: "Introdução ao React Hooks",
      excerpt: "Um guia completo sobre como começar a utilizar React Hooks em seus projetos para um código mais limpo e manutenível.",
      date: "02 Fev 2023",
      readTime: "8",
      categories: ["React", "JavaScript", "Frontend"],
      url: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pb-16">
        <ProfileSection />

        <section className="py-12 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Cursos em Destaque</h2>
              </div>
              <Button variant="ghost" asChild>
                <Link href="/courses" className="flex items-center gap-1">
                  Ver todos
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCourses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
              <div className="hidden lg:flex items-center justify-center border border-dashed rounded-lg p-6">
                <Link href="/courses" className="text-center">
                  <p className="text-lg font-medium text-gray-600">Mais Cursos</p>
                  <p className="text-sm text-gray-500">Ver minha lista completa de cursos</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Projetos em Destaque</h2>
              </div>
              <Button variant="ghost" asChild>
                <Link href="/projects" className="flex items-center gap-1">
                  Ver todos
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Artigos Recentes</h2>
              </div>
              <Button variant="ghost" asChild>
                <Link href="/blog" className="flex items-center gap-1">
                  Ver todos
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.map((post, index) => (
                <BlogPostCard key={index} {...post} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-6">
        <div className="container max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
