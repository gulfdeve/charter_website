'use client';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function ShareButtons({ url, title }) {
  return (
    <div className="grid grid-cols-1 s:grid-cols-2 lg:grid-cols-4 gap-2 mt-8">
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" className="btn-share text-sm bg-blue-600 text-white px-4 py-2 rounded flex justify-center items-center gap-2">
        <FaFacebookF size={18} />
        Share on Facebook
      </a>

      <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer" className="btn-share text-sm bg-black text-white px-4 py-2 rounded flex justify-center items-center gap-2">
        <FaXTwitter size={18} />
        Share on X
      </a>

      <a href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer" className="btn-share text-sm bg-blue-700 text-white px-4 py-2 rounded flex justify-center items-center gap-2">
        <FaLinkedinIn size={18} />
        Share on LinkedIn
      </a>

      <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + url)}`} target="_blank" rel="noopener noreferrer" className="btn-share text-sm bg-green-500 text-white px-4 py-2 rounded flex justify-center items-center gap-2">
        <FaWhatsapp size={18} />
        Share on WhatsApp
      </a>
    </div>
  );
}
