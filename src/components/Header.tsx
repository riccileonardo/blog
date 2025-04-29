"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Code } from "lucide-react";

const Header = () => {
  const pathname = usePathname(); 

  const navItems = [
    { title: "Currículo", path: "/" },
    { title: "Cursos", path: "/courses" },
    { title: "Projetos", path: "/projects" },
    { title: "Blog", path: "/blog" }
  ];

  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          <div className="flex items-center">
            <Code className="h-6 w-6 text-primary inline-block mr-1" />
            <span className="text-gray-800">Leonardo</span>
            <span className="text-blue-600">Dev</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "font-medium transition-colors hover:text-primary",
                pathname === item.path 
                  ? "text-primary border-b-2 border-primary" 
                  : "text-gray-600"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        
        {/* Mobile menu */}
        <div className="md:hidden">
          <select 
            className="bg-transparent border border-gray-300 rounded-md py-1 px-2"
            onChange={(e) => {
              window.location.href = e.target.value;
            }}
            value={pathname}
          >
            {navItems.map((item) => (
              <option key={item.path} value={item.path}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
