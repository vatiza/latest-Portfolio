"use client";
import BlogCard from "@/components/blogs/shared/card/blog-card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";

const Blogs = () => {
  new Promise((resolve) => setTimeout(resolve, 2000));
  const [blogs, setBlogs] = useState([]);
  const [order, setOrder] = useState("latest");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  console.log(blogs);
  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch(
        `https://vatiza-portfolio.vercel.app/blogs?order=${order}&search=${search}`
      );
      const data = await res.json();
      setBlogs(data);
      setLoading(false);
    };
    fetchBlogs();
  }, [order, search]);

  return (
    <div className="mt-10 ">
      <h1 className="text-center text-2xl lg:text-4xl font-bold">
        Blog&apos;s
      </h1>
      <Separator className="h-1 my-2" />
      <div className="px-5 lg:px-20">
        <div className="flex justify-between ">
          <div>
            <Input
              type="text"
              value={search}
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div>
            <label>Sort By:</label>
            <select value={order} onChange={(e) => setOrder(e.target.value)}>
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center">
          {loading && (
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-[250px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          )}
        </div>
        <div className="mt-4">
          <h1 className="text-3xl">Latest Blog Posts</h1>
          <p>
            Explore our latest blog posts and stay up-to-date with the latest
            trends and insights.
          </p>
        </div>
        <div className="grid grid-rows-1 lg:grid-cols-3 gap-3 my-5">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
