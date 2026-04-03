import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '../lib/cn';

type ButtonProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: 'primary' | 'secondary' | 'ghost';
  }
>;

export function Button({ children, className, variant = 'primary', ...props }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400/60';
  const styles = {
    primary:
      'bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500 text-white shadow-glow hover:scale-[1.02]',
    secondary:
      'border border-white/10 bg-white/[0.04] text-white hover:border-white/20 hover:bg-white/[0.08]',
    ghost: 'text-zinc-300 hover:text-white',
  } as const;

  return (
    <a className={cn(base, styles[variant], className)} {...props}>
      {children}
    </a>
  );
}
