interface AuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function AuthButton({ children, ...props }: AuthButtonProps) {
  return (
    <button {...props} className="bg-green-600 py-2 border border-green-600 rounded-lg text-sm font-medium text-white">
      {children}
    </button>
  );
}
