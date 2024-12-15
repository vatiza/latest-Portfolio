import NavbarBlog from "@/components/blogs/shared/navbar/navbar";
import React from "react";

const BlogLayout = ({ children }) => {
  return (
    <div>
      <NavbarBlog />
      {children}
    </div>
  );
};

export default BlogLayout;
