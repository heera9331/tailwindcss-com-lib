import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tailwindcss Components Library",
  description: "Open source tailwindcss library, all the components are free to use and deploy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gray-800 py-3 px-2 flex items-center justify-between">
          <Link href={'/'}>
            <h1 className="text-3xl font-semibold text-gray-100">Tailwindcss</h1>
          </Link>
          <ul className="flex items-center justify-center gap-2">
            <li className="text-lg text-white bg-gray-900 rounded-sm px-2 py-1 shadow-md font-semibold hover:shadow-sm hover:shadow-white">
              <Link href={'/'} className="">
                Home
              </Link>
            </li>
            <li className="text-lg text-white bg-gray-900 rounded-sm px-2 py-1 shadow-md font-semibold hover:shadow-sm hover:shadow-white">
              <Link href={'/forms'} className="">
                Forms
              </Link>
            </li>
            <li className="text-lg text-white bg-gray-900 rounded-sm px-2 py-1 shadow-md font-semibold hover:shadow-sm hover:shadow-white">
              <Link href={'/cards'} className="">
                Cards
              </Link>
            </li>
            <li className="text-lg text-white bg-gray-900 rounded-sm px-2 py-1 shadow-md font-semibold hover:shadow-sm hover:shadow-white">
              <Link href={'/buttons'} className="">
                Buttons
              </Link>
            </li>
            <li className="text-lg text-white bg-gray-900 rounded-sm px-2 py-1 shadow-md font-semibold hover:shadow-sm hover:shadow-white">
              <Link href={'/sitemap'} className="">
                Sitemap
              </Link>
            </li>
          </ul>
        </header>

        <div className="mt-[20px] px-2 pb-10">
          {children}
        </div>
      </body>
    </html>
  );
}
