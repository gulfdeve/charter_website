import "./globals.css";
import { Montserrat } from "next/font/google";
// import 'react-phone-input-2/lib/style.css';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});



export default function RootLayout({ children }) {
  return children;
}