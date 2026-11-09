import { Mail, ArrowUpRight, Instagram, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="px-4 pb-10 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl glass-card px-6 py-12 sm:px-10 sm:py-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600">
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
              </div>
              <p className="mt-5 max-w-xs text-[15px] leading-[1.7] text-ink-300">
                An event platform for people who care about the details.
                Conferences, festivals, exhibitions, and workshops — chosen one
                at a time.
              </p>
              <div className="mt-5 flex items-center gap-2">
                {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-xl glass-subtle text-ink-300 transition-all duration-300 hover:text-gold-400 hover:border-gold-400/20"
                    aria-label="Social link"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Explore */}
            <div>
              <h4 className="font-ui text-xs font-medium uppercase tracking-wider text-ink-400">
                Explore
              </h4>
              <ul className="font-ui mt-4 flex flex-col gap-3 text-sm">
                <li>
                  <a href="#events" className="text-ink-200 transition-colors hover:text-gold-400">
                    All events
                  </a>
                </li>
                <li>
                  <a href="#featured" className="text-ink-200 transition-colors hover:text-gold-400">
                    Featured
                  </a>
                </li>
                <li>
                  <a href="#how" className="text-ink-200 transition-colors hover:text-gold-400">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-ink-200 transition-colors hover:text-gold-400">
                    About norm
                  </a>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-ui text-xs font-medium uppercase tracking-wider text-ink-400">
                Categories
              </h4>
              <ul className="font-ui mt-4 flex flex-col gap-3 text-sm">
                {['Technology', 'Music', 'Art', 'Business'].map((c) => (
                  <li key={c}>
                    <a href="#events" className="text-ink-200 transition-colors hover:text-gold-400">
                      {c}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-ui text-xs font-medium uppercase tracking-wider text-ink-400">
                Get in touch
              </h4>
              <ul className="font-ui mt-4 flex flex-col gap-3 text-sm">
                <li className="flex items-center gap-2 text-ink-200">
                  <Mail className="h-4 w-4 text-gold-400/60" />
                  hello@norm.events
                </li>
                <li className="flex items-center gap-2 text-ink-200">
                  <ArrowUpRight className="h-4 w-4 text-gold-400/60" />
                  Press &amp; partners
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/6 pt-6 sm:flex-row">
            <p className="font-ui text-xs text-ink-500">
              © {new Date().getFullYear()} norm. All rights reserved.
            </p>
            <p className="font-ui text-xs text-ink-500">
              Crafted with intention, not assembled.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
