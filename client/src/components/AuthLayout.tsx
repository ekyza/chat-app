import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  text: string;
  linkText: string;
  linkPath: string;
  linkName: string;
}

export default function AuthLayout({ children, title, text, linkText, linkPath, linkName }: AuthLayoutProps) {
  return (
    <>
      <header className="p-4">
        <h1 className="text-2xl font-bold text-green-600">XC</h1>
      </header>
      <div className="px-4 mx-auto max-w-screen-sm min-h-[calc(100vh-68px)] flex flex-col justify-center gap-8">
        <div>
          <h1 className="text-2xl font-bold text-black">{title}</h1>
          <p className="text-sm leading-6 text-gray-500">{text}</p>
        </div>
        <div className="flex flex-col gap-4">{children}</div>
        <p className="text-sm text-center">
          {linkText}{" "}
          <Link to={linkPath} className="text-green-600 underline">
            {linkName}
          </Link>
        </p>
      </div>
    </>
  );
}
