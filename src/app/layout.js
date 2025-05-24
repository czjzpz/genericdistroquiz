import "./globals.css";
import Link from 'next/link';
import { Roboto, Montserrat } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-roboto',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: "generic distro quiz",
  description: "its a quiz to choose a linux distro",
  icon: 'favicon.ico'
};

export default function RootLayout({ children }) {

  let distroName;

  return (
    <html lang="en" className={`${roboto.variable} ${montserrat.variable}`}>
      <body className="bg-slate-50 font-sans">
        <main className="min-h-screen flex flex-col items-center w-full">
          <div className="w-full max-w-4xl flex flex-col items-center p-4 md:p-6">
            <header className="w-full flex justify-center items-center py-4 md:py-6">
              <Link href="/" className="font-heading font-bold text-3xl text-gray-700 hover:text-sky-600 m-3">
                Generic Distro Quiz
              </Link>
            </header>
            <div className="w-full">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
