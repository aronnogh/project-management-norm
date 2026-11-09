import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useScrollProgress } from './Reveal';

type NavbarProps = {
  onBrowse: () => void;
  onLogoClick: () => void;
};

export function Navbar({ onBrowse, onLogoClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Events', action: onBrowse },
    { label: 'Featured', href: '#featured' },
    { label: 'How it works', href: '#how' },
    { label: 'About', href: '#about' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Scroll progress bar */}
        <div className="h-px w-full bg-transparent">
          <div
            className="h-px bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div
          className={`transition-all duration-500 ${
            scrolled ? 'py-2.5' : 'py-4'
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
                scrolled
                  ? 'glass-strong shadow-2xl shadow-black/40'
                  : 'border border-transparent'
              }`}
            >
              {/* Logo */}
              <button
                onClick={onLogoClick}
                className="group flex items-center gap-3"
              >
                <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 transition-transform duration-500 group-hover:scale-105">
                  <span className="font-serif text-xl font-medium text-ink-960">
                    n
                  </span>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-lg font-medium tracking-tight text-ink-50">
                    norm
                  </span>
                  <span className="font-ui text-[9px] uppercase tracking-[0.2em] text-ink-400">
                    Events
                  </span>
                </div>
              </button>

              {/* Desktop nav */}
              <nav className="hidden items-center gap-1 md:flex">
                {links.map((link) =>
                  link.href ? (
                    <a
                      key={link.label}
                      href={link.href}
                      className="font-ui relative rounded-lg px-4 py-2 text-sm font-medium text-ink-200 transition-colors hover:text-ink-50"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <button
                      key={link.label}
                      onClick={link.action}
                      className="font-ui relative rounded-lg px-4 py-2 text-sm font-medium text-ink-200 transition-colors hover:text-ink-50"
                    >
                      {link.label}
                    </button>
                  )
                )}
              </nav>

              {/* CTA */}
              <div className="flex items-center gap-2">
                <button
                  onClick={onBrowse}
                  className="font-ui group hidden items-center gap-2 rounded-xl btn-gold px-5 py-2.5 text-sm sm:flex"
                >
                  Browse events
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
                <button
                  onClick={() => setMobileOpen((v) => !v)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl glass md:hidden"
                  aria-label="Toggle menu"
                >
                  {mobileOpen ? (
                    <X className="h-5 w-5 text-ink-50" />
                  ) : (
                    <Menu className="h-5 w-5 text-ink-50" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
              <div className="mt-2 flex flex-col gap-1 rounded-2xl glass-strong p-3 md:hidden">
                {links.map((link) =>
                  link.href ? (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-ui rounded-lg px-4 py-3 text-sm font-medium text-ink-200 transition-colors hover:bg-white/5 hover:text-ink-50"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <button
                      key={link.label}
                      onClick={() => {
                        link.action?.();
                        setMobileOpen(false);
                      }}
                      className="font-ui rounded-lg px-4 py-3 text-left text-sm font-medium text-ink-200 transition-colors hover:bg-white/5 hover:text-ink-50"
                    >
                      {link.label}
                    </button>
                  )
                )}
                <button
                  onClick={() => {
                    onBrowse();
                    setMobileOpen(false);
                  }}
                  className="font-ui mt-1 flex items-center justify-center gap-2 rounded-xl btn-gold px-4 py-3 text-sm"
                >
                  Browse events
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
