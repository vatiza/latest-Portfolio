import Image from "next/image";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const res = await fetch(`https://vatiza-portfolio.vercel.app/blogs/${slug}`);
  const data = await res.json();
  return {
    title: data?.title || "Blogs",
    description: data?.description || "description",
  };
}

const SingleBlog = async ({ params }) => {
  const { slug } = await params;
  const res = await fetch(`https://vatiza-portfolio.vercel.app/blogs/${slug}`);
  const data = await res.json();
  const {
    title,
    description,
    img,
    postdate,
    bloggerFirstName,
    bloggerLastName,
    bloggerImg,
  } = data;
  return (
    <div className="px-5 lg:px-20">
      <h1 className="text-4xl font-bold">{title}</h1>
      <div className="flex items-center gap-2">
        <Image
          height={200}
          width={200}
          className="w-20 h-20 rounded-full"
          src={bloggerImg}
          alt={bloggerFirstName}
        />
        <div>
          <h2 className="text-xl font-bold">
            {bloggerFirstName} {bloggerLastName}
          </h2>
          <p className="text-gray-600">{postdate}</p>
        </div>
      </div>
      <Image
        className="mt-5 w-full h-64 object-cover"
        height={400}
        width={500}
        src={img}
        alt={title}
      />
      <div className="w-full">
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};

export default SingleBlog;
