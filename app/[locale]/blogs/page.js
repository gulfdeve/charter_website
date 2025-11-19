import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import blogs from './blogs.json';
import FeaturedBlogsCarousel from './FeaturedBlogsCarousel';

export default function BlogPage() {
  // Get featured blogs
  const featuredBlogs = blogs.filter(blog => blog.isFeatured).slice(0, 5);
  const blogPosts = blogs;

  const featuredBlog = blogs.find(
    blog =>
      blog.title ===
      'Experience the Formula 1 Grand Prix from a Luxury Yacht in Dubai'
  );

  return (
    <>
      <div className="bg-white w-full h-full nav-space">
        <div className="hidden">
          <img
            alt="contact header banner"
            src="/Contactheader.webp"
            className="w-full"
          />
        </div>
      </div>

      <div className="w-full">
        {/* Featured Blogs Carousel - Client Component */}
        <FeaturedBlogsCarousel featuredBlogs={featuredBlogs} />

        {/* FEATURED BLOG - unhide when there are many blogs  */}
        <div className="w-full">
          <div className="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left gap-8 py-10">
            <div className="flex-shrink-0 md:w-1/2">
              <Link
                href={`/blogs/${featuredBlog.slug}`}
                className="text-primary-blue-2 font-semibold"
              >
                <Image
                  src={featuredBlog.featured_image}
                  alt={featuredBlog.title}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full h-64"
                />
              </Link>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">
                <Link
                  href={`/blogs/${featuredBlog.slug}`}
                  className="text-primary-blue-2 font-semibold"
                >
                  {featuredBlog.title}
                </Link>
              </h2>
              <div className="text-sm text-gray-500 mb-2">
                By {featuredBlog.author} &middot; {featuredBlog.date}
              </div>
              <div
                className="mb-4"
                dangerouslySetInnerHTML={{
                  __html: featuredBlog.body
                    ? featuredBlog.body.slice(0, 200) + '...'
                    : '',
                }}
              />
            </div>
          </div>
        </div>

        {/* All Blog Posts Grid */}
        <div className="w-full">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
            {blogPosts.map(post => (
              <Link
                href={`/blogs/${post.slug}`}
                key={post.slug}
                className="text-primary-blue-2"
              >
                <div className="bg-white rounded-lg custom-shadow p-4 flex flex-col">
                  <Image
                    src={post.featured_image}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="rounded-md object-cover w-full h-50 mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2 text-primary-blue-2">
                    {post.title}
                  </h3>
                  <div className="text-sm text-gray-500 mb-2">
                    By {post.author} &middot; {post.date}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
