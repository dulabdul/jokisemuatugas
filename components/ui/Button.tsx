import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'white';
  className?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className,
  target,
  rel,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary:
      'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/30',
    outline:
      'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    white: 'bg-white text-primary hover:bg-gray-100 shadow-md',
  };

  const combinedClasses = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        target={target}
        rel={rel}
        aria-label='Action Button'>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={combinedClasses}
      aria-label='Action Button'>
      {children}
    </button>
  );
}
