import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Heart, MessageCircle, Repeat2, Share } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  const {
    img,
    title,
    description,
    bloggerImg,
    bloggerFirstName,
    bloggerLastName,
    _id,
  } = blog;
  console.log(blog);

  return (
    <div className="group">
      <Card className="max-w-[350px] max-h-[500px] overflow-hidden transition-all duration-300 group-hover:shadow-lg ">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            priority
            src={img}
            alt={title}
            className="transition-transform duration-300 group-hover:scale-110 object-fill"
            width={400}
            height={400}
          />
        </div>
        <CardContent className="p-4">
          <div className="flex items-center space-x-4 mb-4">
            <Avatar>
              <AvatarImage src={bloggerImg} />
              <AvatarFallback>{bloggerFirstName}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">
                {bloggerFirstName}
                {bloggerLastName}
              </p>
              <p className="text-sm text-gray-500">
                @{bloggerFirstName.toLowerCase().replace(" ", "")}
              </p>
            </div>
          </div>
          <Link href={`/blogs/${_id}`}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <h3 className="font-bold text-lg   mb-2">
                    {title.length > 15 ? title.slice(0, 20) + "..." : title}
                  </h3>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{title}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>

          <p
            dangerouslySetInnerHTML={{
              __html:
                description.length > 100
                  ? description.slice(0, 100) + "..."
                  : description,
            }}
            className="text-gray-600 text-sm min-h-[65px]"
          ></p>
        </CardContent>
        <CardFooter className="flex justify-between p-4 border-t">
          <Button variant="ghost" size="icon">
            <MessageCircle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Repeat2 className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Share className="h-5 w-5" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BlogCard;
