import Image from "next/image";
import blogsData from "../blogs.json";
import { notFound } from "next/navigation";
import ShareButtons from "./sharebuttons";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

export async function generateMetadata({ params }) {
	const { slug } = await params;
  const slugLower = slug.toLowerCase();
  const blog = blogsData.find((b) => b.slug.toLowerCase() === slugLower);
  if (!blog) return {};

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `https://centauruscharter.com/blogs/${slugLower}`,
      images: [
        {
          url: blog.featured_image,
          width: 900,
          height: 400,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [blog.featured_image],
    },
  };
}

export default async function BlogDetailPage({ params }) {
	const { slug } = await params;
  const slugLower = slug.toLowerCase();
  const blog = blogsData.find((b) => b.slug.toLowerCase() === slugLower);

  if (!blog) return notFound();

  const latestBlogs = blogsData.filter((b) => b.slug.toLowerCase() !== slugLower).slice(0, 5);
  const blogIndex = blogsData.findIndex((b) => b.slug.toLowerCase() === slugLower);
  const nextBlog = blogIndex > 0 ? blogsData[blogIndex - 1] : null;
  const prevBlog = blogIndex < blogsData.length - 1 ? blogsData[blogIndex + 1] : null;

  const shareUrl = `https://centauruscharter.com/blogs/${slugLower}`;

  return (
    <div className="nav-space container flex flex-col md:flex-row md:w-11/12 mx-auto gap-6 lg:gap-10 mb-10 mt-10">
      
      <div className="md:w-8/12">
        <Image
          src={blog.featured_image}
          alt={blog.featured_alt}
          width={900}
          height={400}
          className="rounded-lg object-cover w-full h-120 mb-6"
        />
        <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
        <div className="text-gray-500 mb-6">
          By {blog.author} &middot; {blog.date}
        </div>
        <div dangerouslySetInnerHTML={{ __html: blog.body }} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          {blog.images?.map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={blog.alt?.[idx] || ""}
              width={400}
              height={300}
              className="rounded-md object-cover w-full h-64"
            />
          ))}
        </div>
        <div dangerouslySetInnerHTML={{ __html: blog.moreText }} />

        <ShareButtons url={shareUrl} title={blog.title} />

        <div className="flex justify-between">
        <a href={prevBlog ? `/blogs/${prevBlog.slug}` : "#"} aria-disabled={!prevBlog} className="flex items-center mt-auto pt-5 group text-primary-blue-2">
                    <FiArrowLeft size={20} className="text-lg transform md:group-hover:-translate-x-4 transition-transform duration-300" />
                    <div className="btn-back">Previous</div>
        </a>
        <a href={nextBlog ? `/blogs/${nextBlog.slug}` : "#"} aria-disabled={!nextBlog} className="flex items-center mt-auto pt-5 group text-primary-blue-2">
                    <div className="btn-info">Next</div>
                    <FiArrowRight size={20} className="text-lg transform md:group-hover:translate-x-4 transition-transform duration-300" />
        </a>
        </div>

      </div>

      <div className="md:w-4/12">
      <div className="sticky top-32">
        <h2 className="text-xl font-bold mb-4 text-primary-blue-2">Latest Blogs</h2>
        <div className="space-y-4">
          {latestBlogs.map((item) => (
            <div key={item.slug} className="flex gap-3 items-start p-2">
              <Image
                src={item.featured_image}
                alt={item.title}
                width={60}
                height={60}
                className="rounded object-cover"
              />
              <div>
                <a href={`/blogs/${item.slug.toLowerCase()}`} className="font-semibold hover:underline text-primary-blue-2">
                  {item.title}
                </a>
                <div className="text-xs text-gray-500">
                  By {item.author} &middot; {item.date}
                </div>
              </div>
            </div>
          ))}
        </div>
        <a href="/blogs" className="flex items-center mt-auto pt-5 group text-primary-blue-2">
            <div className="btn-info">View all Blogs</div>
            <FiArrowRight size={20} className="text-lg transform md:group-hover:translate-x-4 transition-transform duration-300" />
        </a>
      </div>
    </div>
     </div>
  );
}
