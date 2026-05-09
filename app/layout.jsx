import { Cinzel, Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});
const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata = {
  title: "Story Portfolio",
  description: "Animated story based portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${nunitoSans.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
