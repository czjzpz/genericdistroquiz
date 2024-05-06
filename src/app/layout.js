import "./globals.css";
import Link from 'next/link';

export const metadata = {
  title: "generic distro quiz",
  description: "its a quiz to choose a linux distro",
  icon: 'favicon.ico'
};

export default function RootLayout({ children }) {

  let distroName;

  return (
    <html lang="en">
      <body><main className="h-dvh w-dvw flex justify-center items-start">
      <div className="h-full w-full bg-neutral-100 flex flex-col justify-start items-center overflow-auto">
      <div className="flex flex-col justify-center items-center">
        <Link href="/" className="font-bold text-3xl m-3">
          generic distro quiz
        </Link>
      </div>
       {children}
      </div>
    </main></body>
    </html>
  );
}
