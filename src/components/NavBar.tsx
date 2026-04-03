import { Menu } from 'lucide-react';
import { useState } from 'react';
import { navItems } from '../data/portfolio';
import { Button } from './Button';

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 px-6 pt-5 md:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col rounded-[28px] border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-sky-500 text-sm font-bold text-white">
              SS
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white">Sharad Saha</span>
              <span className="text-xs text-zinc-400">Software Engineer</span>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-zinc-400 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Button href="#contact" variant="secondary">
              Let&apos;s Talk
            </Button>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white md:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            <Menu size={18} />
          </button>
        </div>

        {open ? (
          <nav className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-zinc-300 transition hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
