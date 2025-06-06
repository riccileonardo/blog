import { Github, Linkedin, Mail, MapPin, FileUser } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProfileSectionProps {
  name?: string;
  title?: string;
  bio?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  photoUrl?: string;
  email?: string;
  city?: string;
  state?: string;
}

const ProfileSection = ({
  name = "Leonardo Ricci",
  title = "Junior Software Engineer",
  bio = "Engenheiro de Software em formação, graduando de Sistemas de Informação.\n\nApaixonado por tecnologia, sempre buscando aprender e compartilhar conhecimento. Experiência em desenvolvimento web, com foco em React, Next... Acredito que a colaboração e a comunicação são essenciais para o sucesso de qualquer projeto.",
  linkedinUrl = "https://www.linkedin.com/in/dev-leonardo-ricci/",
  githubUrl = "https://github.com/riccileonardo",
  photoUrl = "/images/foto-pessoal.png",
  email = "l.lopesricci@gmail.com",
  city = "Sinop",
  state = "MT"
}: ProfileSectionProps) => {
  return (
    <section className="py-10">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-15">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-45 h-45 rounded-full overflow-hidden border-4 border-primary/20 mb-4">
              <img 
                src={photoUrl} 
                alt={name} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>{email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{city} - {state}</span>
              </div>
            </div>
          </div>
          
          {/* Nome, título, bio e links */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{name}</h1>
            <p className="text-xl text-gray-600 mb-4">{title}</p>
            
            <p className="text-gray-700 mb-6 max-w-2xl whitespace-pre-line">
              {bio}
            </p>
            
            <div className="flex space-x-4 justify-center md:justify-start">
              <Button variant="outline" size="sm" asChild>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </Button>
              
              <Button variant="outline" size="sm" asChild>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github size={18} />
                  GitHub
                </a>
              </Button>

              <Button variant="outline" size="sm" asChild>
                <a href="/files/Curriculo - Leonardo Ricci.pdf" download="Curriculo - Leonardo-Ricci.pdf" className="flex items-center gap-2">
                  <FileUser size={18} /> Baixar Currículo
                </a>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
