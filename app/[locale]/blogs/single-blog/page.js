"use client";

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const blog = {
  image: "/images/formula1-2025-banner.webp",
  title: "Sample Blog Title",
  author: "Centaurus Charter",
  date: "July 2, 2025",
  content: `Lorem ipsum dolor sit amet consectetur. Leo egestas lobortis pulvinar dignissim tellus faucibus euismod nunc. Aliquam eu massa semper ornare mi pretium proin tellus. Eu ullamcorper vitae sit egestas tristique lectus elementum mollis vitae. Id fermentum et scelerisque ac consequat ac. Auctor pulvinar sed a pretium risus amet venenatis. Vulputate aliquam eu euismod dictum consequat lobortis. Sed sed et netus id neque cras quis.
Fermentum hendrerit ut commodo donec dapibus justo lacus pellentesque risus. Convallis eleifend lorem molestie tortor in eu eget. Facilisi etiam proin tincidunt in pellentesque. Pellentesque bibendum est justo imperdiet nibh est vitae dictumst natoque. 

Egestas nisi adipiscing elit cursus aliquam fames sed. In ullamcorper cras arcu volutpat enim volutpat cras in integer.
Urna cursus neque lectus integer consequat volutpat nulla sed adipiscing. Aliquet sit nunc eu turpis elit feugiat. In etiam aliquam amet diam posuere sagittis venenatis. Turpis cras nunc vel laoreet et. Sollicitudin sed in purus condimentum nunc risus pellentesque blandit rutrum. 

Ac scelerisque iaculis vestibulum scelerisque risus donec morbi. Tortor in blandit porttitor ultricies lorem malesuada quisque felis sem. Lacus felis quis est orci vivamus facilisi scelerisque odio. Amet mi sit vel orci convallis non. Sit mauris consectetur lectus velit faucibus sit euismod egestas.
Massa egestas nisi leo condimentum. Morbi porta rhoncus nisi quis odio blandit. Varius odio phasellus sed a euismod feugiat et ultrices tincidunt. Diam quis pulvinar quam non. Sit ultricies duis morbi arcu.

Non proin duis mattis netus dictum ullamcorper volutpat. Purus faucibus molestie ac mauris pulvinar nec elit tristique est. Hendrerit eget neque sed non. Turpis praesent quis etiam volutpat nunc. Habitant eu elementum quisque vivamus ut tellus non. Mi adipiscing et nulla viverra.
At nec facilisi pulvinar volutpat. Malesuada lorem etiam in penatibus. Feugiat augue integer tortor elit sit nisl aliquet. Vitae phasellus egestas placerat pretium egestas sit nec. Diam nulla fermentum libero pretium arcu in senectus. Sed sagittis cras velit augue. Vestibulum ut porttitor justo vitae ultrices nec risus id in. Massa ornare nunc placerat adipiscing vitae bibendum.`,
  images: ["/images/premium-drinks.webp", "/images/formula1-2025-banner.webp"],
  moreText: `Lorem ipsum dolor sit amet consectetur. Leo egestas lobortis pulvinar dignissim tellus faucibus euismod nunc. Aliquam eu massa semper ornare mi pretium proin tellus. Eu ullamcorper vitae sit egestas tristique lectus elementum mollis vitae. Id fermentum et scelerisque ac consequat ac. Auctor pulvinar sed a pretium risus amet venenatis. Vulputate aliquam eu euismod dictum consequat lobortis. Sed sed et netus id neque cras quis.
Fermentum hendrerit ut commodo donec dapibus justo lacus pellentesque risus. Convallis eleifend lorem molestie tortor in eu eget. Facilisi etiam proin tincidunt in pellentesque. Pellentesque bibendum est justo imperdiet nibh est vitae dictumst natoque. 
`
};

const latestBlogs = [
  {
    image: "/images/formula1-2025-banner.webp",
    title: "Experience the Formula 1 Grand Prix from a Luxury Yacht in Dubai",
    author: "Centaurus Charter",
    date: "July 29, 2025",
  },
  {
    image: "/images/footer-sunset.webp",
    title: "Lorem ipsum dolor sit amet consecteturadipiscing elit. Quisque faucibus ex sapien vitae ",
    author: "Centaurus Charter",
    date: "June 30, 2025",
  },
  {
    image: "/images/footer-sunset.webp",
    title: "Lorem ipsum dolor sit amet consecteturadipiscing elit. Quisque faucibus ex sapien vitae ",
    author: "Centaurus Charter",
    date: "June 30, 2025",
  },
  {
    image: "/images/footer-sunset.webp",
    title: "Lorem ipsum dolor sit amet consecteturadipiscing elit. Quisque faucibus ex sapien vitae ",
    author: "Centaurus Charter",
    date: "June 30, 2025",
  },
  {
    image: "/images/footer-sunset.webp",
    title: "Lorem ipsum dolor sit amet consecteturadipiscing elit.  ",
    author: "Centaurus Charter",
    date: "June 30, 2025",
  }
];

export default function BlogDetailPage() {
  return (
    <div className="nav-space container flex flex-col md:flex-row md:w-11/12 mx-auto gap-6 lg:gap-10 mb-10">
      {/* Left Side: Blog Content */}
      <div className="md:w-8/12">
        <Image
          src={blog.image}
          alt={blog.title}
          width={900}
          height={400}
          className="rounded-lg object-cover w-full h-120 mt-12 mb-6"
        />
        <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
        <div className="text-gray-500 mb-6">
          By {blog.author} &middot; {blog.date}
        </div>
        <div className="mb-8">{blog.content}</div>
        {/* 2-column images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {blog.images.map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={`Blog image ${idx + 1}`}
              width={400}
              height={300}
              className="rounded-md object-cover w-full h-64"
            />
          ))}
        </div>
        <div>{blog.moreText}</div>
      </div>

      {/* Right Side: Latest Blogs (fixed) */}
      <div className="md:w-4/12">
        <div className="sticky top-48">
          <h2 className="text-xl font-bold mb-4 text-primary-blue-2">Latest Blogs</h2>
          <div className="grid grid-cols-1 gap-4 mb-4">
            {latestBlogs.map((item, idx) => (
              <div key={idx} className="flex gap-3 items-start p-2">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="rounded object-cover w-16 h-16"
                />
                <div>
                  <div className="font-semibold">{item.title}</div>
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