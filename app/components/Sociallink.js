import Image from "next/image";
import EmailSubscription from "@/app/components/EmailSubscription"; // Client component

const Sociallink = () => {
  return (
    <div className="relative bg-primary-blue-2 w-full h-[24rem] lg:h-[15rem] 2xl:h-[18rem] flex items-center justify-center">
       {/* SVG Divider */}
    <div className="divider-top -top-2 w-full z-10">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
      >
        <path
          d="M987.16,44.39c-78.99-8.42-163.38-20.36-243.32-27.16-82.26-7.01-168.06-6.6-250.45.16-57.84,4.74-114,12.56-172,16.92C213.61,42.32,102.47,38.25,0,22.55v37.45h1200v-21.1c-67.81,9.35-142.79,12.95-212.84,5.48Z"
          className="fill-white"
          
        ></path>
      </svg>
    </div>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-8 xl:gap-20 pt-3 lg:pt-8 2xl:pt-24 3xl:pt-36 z-20">
        
        {/* Social Media Links */}
        <div className="order-1 lg:order-2 flex flex-row items-center justify-center gap-5">
          {[
            { href: "https://www.facebook.com/centauruscharteryachtsrental/", src: "/Facebook.png", alt: "Facebook" },
            { href: "https://twitter.com/centaurscharter", src: "/Twitter.png", alt: "Twitter" },
            { href: "https://www.instagram.com/centauruscharter/", src: "/Instagram.png", alt: "Instagram" },
            { href: "https://www.pinterest.com/centauruscharteryachtsdubai/", src: "/Pinterest.png", alt: "Pinterest" },
            { href: "https://www.linkedin.com/company/centauruscharter", src: "/LinkedIn.png", alt: "LinkedIn" },
            { href: "https://www.youtube.com/channel/UCcvuO64sGm4HxfNMZRYfScQ?view_as=subscriber", src: "/Youtube.png", alt: "Youtube" },
          ].map(({ href, src, alt }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer">
              <Image src={src} alt={alt} width={30} height={30} />
            </a>
          ))}
        </div>

        {/* Subscription Section */}
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start">
          <p className="text-white text-lg lg:text-2xl 3xl:text-4xl font-bold">Amazing Offers just for you</p>
          <p className="text-white text-lg text-center lg:text-left">Sign up to receive amazing offers and tips</p>
        </div>

        {/* Email Subscription Form (Client Component) */}
        <EmailSubscription />
      </div>
    </div>
  );
};

export default Sociallink;
