import "./globals.css";
import Link from 'next/link';
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '700'], // Light, Regular, Bold
  variable: '--font-nunito',
});

export const metadata = {
  title: "generic distro quiz",
  description: "its a quiz to choose a linux distro",
  icon: 'favicon.ico'
};

export default function RootLayout({ children }) {

  let distroName;

  return (
    <html lang="en" className={`${nunito.variable}`}>
      <body className="bg-soft-bg font-sans">
        <main className="min-h-screen flex flex-col items-center w-full">
          <div className="w-full max-w-4xl flex flex-col items-center p-4 md:p-6">
            <header className="w-full flex justify-center items-center py-4 md:py-6">
              <Link href="/" className="font-bold text-3xl text-text-main hover:text-accent-blue-text m-3">
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
