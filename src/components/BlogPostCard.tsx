
import { FileText } from "lucide-react";
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

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  readTime?: string;
  categories?: string[];
  url?: string;
}

const BlogPostCard = ({
  title,
  excerpt,
  date,
  image,
  readTime,
  categories = [],
  url
}: BlogPostCardProps) => {
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
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline">{date}</Badge>
            {readTime && (
              <Badge variant="secondary">{readTime} min</Badge>
            )}
          </div>
        </div>
        <CardTitle className="mt-4 hover:text-primary transition-colors">
          <a href={url}>{title}</a>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="line-clamp-3">{excerpt}</CardDescription>
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {categories.map((category) => (
              <Badge key={category} variant="secondary" className="text-xs">
                {category}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
      <a href={url} className="w-full">
        <Button className="w-full">
          Ler mais
        </Button>
      </a>
      </CardFooter>
    </Card>
  );
};

export default BlogPostCard;