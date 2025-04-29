import { FolderOpen } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  date?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  date
}: ProjectCardProps) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow">
      {image && (
        <div className="h-48 w-full overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="bg-primary/10 p-2 rounded-full">
            <FolderOpen className="h-5 w-5 text-primary" />
          </div>
          {date && <Badge variant="outline">{date}</Badge>}
        </div>
        <CardTitle className="mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="mb-4">{description}</CardDescription>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-3">
        {liveUrl && (
          <Button variant="default" size="sm" className="flex-1" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              Ver Projeto
            </a>
          </Button>
        )}
        {githubUrl && (
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              Código Fonte
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
