import { BookOpen } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  title: string;
  institution: string;
  description: string;
  certificate?: string;
  tags?: string[];
}

const CourseCard = ({
  title,
  institution,
  description,
  certificate,
  tags = []
}: CourseCardProps) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="bg-primary/10 p-2 rounded-full">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
        </div>
        <CardTitle className="mt-4">{title}</CardTitle>
        <CardDescription>{institution}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-gray-600">{description}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      {certificate && (
        <CardFooter>
          <a 
            href={certificate} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline w-full text-center"
          >
            Ver Certificado
          </a>
        </CardFooter>
      )}
    </Card>
  );
};

export default CourseCard;