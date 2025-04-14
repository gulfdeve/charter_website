import Image from "next/image";
import EmailSubscription from "@/app/components/EmailSubscription"; // Client component

const Sociallink = () => {
  return (
    <div className="bg-primary-blue-2 w-full h-[20rem] lg:h-[8rem] flex items-center justify-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-8 xl:gap-20">
        
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
          <p className="text-white text-lg font-bold">Amazing Offers just for you</p>
          <p className="text-white text-lg text-center lg:text-left">Sign up to receive amazing offers and tips</p>
        </div>

        {/* Email Subscription Form (Client Component) */}
        <EmailSubscription />
      </div>
    </div>
  );
};

export default Sociallink;
