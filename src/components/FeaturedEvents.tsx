import { ArrowUpRight, Star } from 'lucide-react';
import type { NormEvent } from '@/data';
import { Reveal } from './Reveal';
import {
  formatDateShort,
  formatPrice,
  getWeekday,
  getCategoryStyle,
} from '@/lib/format';

type FeaturedEventsProps = {
  events: NormEvent[];
  onSelect: (event: NormEvent) => void;
};

export function FeaturedEvents({ events, onSelect }: FeaturedEventsProps) {
  if (events.length === 0) return null;
  const [primary, ...rest] = events;

  return (
    <section id="featured" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col gap-3">
            <span className="eyebrow flex items-center gap-2">
              <Star className="h-3.5 w-3.5" />
              Featured
            </span>
            <h2 className="text-4xl font-light tracking-tight text-ink-50 sm:text-5xl lg:text-6xl">
              Hand-picked,{' '}
              <span className="font-serif italic text-gold">this season</span>
            </h2>
            <p className="max-w-xl text-lg leading-[1.6] text-ink-300">
              A few events we are especially proud to host. Each one was chosen
              for the experience it delivers, not just the name on the poster.
            </p>
          </div>
        </Reveal>

        {/* Primary featured */}
        <Reveal delay={100} variant="scale">
          <article
            onClick={() => onSelect(primary)}
            className="shine-on-hover group mt-10 grid cursor-pointer grid-cols-1 overflow-hidden rounded-3xl glass-card transition-all duration-700 hover:-translate-y-1 hover:border-gold-400/20 lg:grid-cols-2"
          >
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-auto">
              <img
                src={primary.image}
                alt={primary.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-960/60 to-transparent lg:bg-gradient-to-r" />
              <div className="absolute left-5 top-5 flex flex-col items-center rounded-2xl glass-strong px-4 py-3">
                <span className="font-ui text-[10px] font-semibold uppercase tracking-wider text-gold-400">
                  {getWeekday(primary.eventDate)}
                </span>
                <span className="font-serif text-3xl font-light leading-none text-ink-50">
                  {new Date(primary.eventDate).getDate()}
                </span>
                <span className="font-ui text-[10px] uppercase tracking-wider text-ink-300">
                  {new Date(primary.eventDate).toLocaleDateString('en-US', { month: 'short' })}
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <span
                className={`font-ui inline-block w-fit rounded-full border px-3 py-1 text-xs font-medium ${getCategoryStyle(
                  primary.category
                )}`}
              >
                {primary.category}
              </span>
              <h3 className="mt-4 text-3xl font-medium leading-tight text-ink-50 sm:text-4xl">
                {primary.title}
              </h3>
              <p className="mt-4 text-[16px] leading-[1.65] text-ink-200">
                {primary.description}
              </p>
              <div className="font-ui mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-300">
                <span>{formatDateShort(primary.eventDate)} · {primary.timeLabel}</span>
                <span>{primary.venue}, {primary.city}</span>
                <span className="font-semibold text-gold-400">
                  {formatPrice(primary.price)}
                </span>
              </div>
              <div className="font-ui mt-8 flex items-center gap-2 text-sm font-medium text-gold-400">
                View event &amp; register
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </article>
        </Reveal>

        {/* Secondary row */}
        {rest.length > 0 && (
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {rest.map((event, i) => (
              <Reveal key={event.id} delay={i * 100}>
                <article
                  onClick={() => onSelect(event)}
                  className="shine-on-hover group flex cursor-pointer items-center gap-4 overflow-hidden rounded-3xl glass-card p-3 transition-all duration-500 hover:border-gold-400/20 hover:-translate-y-1 sm:p-4"
                >
                  <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-2xl sm:h-32 sm:w-32">
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col py-1 pr-1">
                    <span
                      className={`font-ui inline-block w-fit rounded-full border px-2 py-0.5 text-[10px] font-medium ${getCategoryStyle(
                        event.category
                      )}`}
                    >
                      {event.category}
                    </span>
                    <h3 className="mt-1.5 text-lg font-medium leading-snug text-ink-50">
                      {event.title}
                    </h3>
                    <p className="font-ui mt-1 line-clamp-1 text-xs text-ink-400">
                      {formatDateShort(event.eventDate)} · {event.venue}, {event.city}
                    </p>
                    <span className="font-ui mt-2 text-sm font-semibold text-gold-400">
                      {formatPrice(event.price)}
                    </span>
                  </div>
                  <ArrowUpRight className="hidden h-5 w-5 flex-shrink-0 text-ink-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold-400 sm:block" />
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
