import { ArrowRight, ArrowUpRight, Sparkles, Calendar } from 'lucide-react';
import type { NormEvent } from '@/data';
import { stats, marqueeItems } from '@/data';
import { formatDateShort, formatPrice, getWeekday } from '@/lib/format';

type HeroProps = {
  onBrowse: () => void;
  eventCount: number;
  featured: NormEvent[];
  onSelect: (event: NormEvent) => void;
};

export function Hero({ onBrowse, eventCount, featured, onSelect }: HeroProps) {
  const spotlight = featured[0];

  return (
    <section className="relative px-4 pt-32 pb-0 sm:px-6 sm:pt-36 lg:px-8 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow */}
        <div className="flex justify-center">
          <div className="font-ui flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-ink-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
            </span>
            <span>{eventCount} live events · curated by norm</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="mt-10 text-center text-[3.25rem] font-light leading-[0.98] tracking-tightest text-ink-50 sm:text-7xl lg:text-[7.5rem]">
          <span className="text-gradient">Events worth</span>
          <br />
          <span className="font-serif italic text-gold">showing up</span>{' '}
          <span className="text-gradient">for.</span>
        </h1>

        {/* Subhead */}
        <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-[1.6] text-ink-300 sm:text-xl">
          norm is a platform for people who care about the details. Conferences,
          festivals, exhibitions, and workshops — chosen one at a time, with the
          same care you would put into a guest list.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={onBrowse}
            className="font-ui group flex items-center gap-2 rounded-xl btn-gold px-7 py-4 text-base"
          >
            Explore events
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <a
            href="#featured"
            className="font-ui flex items-center gap-2 rounded-xl btn-ghost px-7 py-4 text-base font-medium"
          >
            See what&apos;s featured
          </a>
        </div>

        {/* Spotlight + Stats layout */}
        <div className="mt-20 grid grid-cols-1 gap-5 lg:grid-cols-[1.4fr_1fr]">
          {/* Spotlight event card */}
          {spotlight && (
            <button
              onClick={() => onSelect(spotlight)}
              className="shine-on-hover group relative overflow-hidden rounded-3xl glass-card text-left transition-all duration-700 hover:-translate-y-1"
            >
              <div className="relative h-72 overflow-hidden sm:h-80 lg:h-full">
                <img
                  src={spotlight.image}
                  alt={spotlight.title}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-960 via-ink-960/50 to-transparent" />

                {/* Floating date badge */}
                <div className="absolute left-5 top-5 flex flex-col items-center rounded-2xl glass-strong px-4 py-3">
                  <span className="font-ui text-[10px] font-semibold uppercase tracking-wider text-gold-400">
                    {getWeekday(spotlight.eventDate)}
                  </span>
                  <span className="font-serif text-3xl font-light leading-none text-ink-50">
                    {new Date(spotlight.eventDate).getDate()}
                  </span>
                  <span className="font-ui text-[10px] uppercase tracking-wider text-ink-300">
                    {new Date(spotlight.eventDate).toLocaleDateString('en-US', { month: 'short' })}
                  </span>
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-gold-400" />
                    <span className="font-ui text-xs font-medium uppercase tracking-[0.2em] text-gold-400">
                      Spotlight
                    </span>
                  </div>
                  <h2 className="mt-3 text-2xl font-medium leading-tight text-ink-50 sm:text-3xl">
                    {spotlight.title}
                  </h2>
                  <p className="mt-2 max-w-md text-[15px] leading-[1.6] text-ink-200">
                    {spotlight.tagline}
                  </p>
                  <div className="font-ui mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-300">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-ink-400" />
                      {formatDateShort(spotlight.eventDate)}
                    </span>
                    <span>{spotlight.venue}, {spotlight.city}</span>
                    <span className="font-semibold text-gold-400">
                      {formatPrice(spotlight.price)}
                    </span>
                    <span className="ml-auto flex items-center gap-1 font-medium text-ink-100 transition-colors group-hover:text-gold-300">
                      View &amp; register
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </div>
            </button>
          )}

          {/* Stats column */}
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl glass-card p-6 transition-all duration-500 hover:border-gold-400/20"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-4xl font-light text-ink-50 sm:text-5xl">
                    {stat.value}
                  </span>
                  <div className="h-2 w-2 rounded-full bg-gold-400/40 transition-colors group-hover:bg-gold-400" />
                </div>
                <span className="font-ui mt-2 block text-xs uppercase tracking-wider text-ink-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="relative mt-16 overflow-hidden border-y border-white/5 py-5 mask-fade-edges">
        <div className="flex w-max animate-marquee items-center gap-8">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="font-serif text-2xl font-light italic text-ink-400">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
