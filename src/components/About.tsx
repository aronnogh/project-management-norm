import type { NormEvent } from '@/data';
import { values } from '@/data';
import { Reveal } from './Reveal';
import { Sparkles, Users2, ShieldCheck } from 'lucide-react';
import { getCategoryStyle } from '@/lib/format';

const iconMap: Record<string, typeof Sparkles> = {
  curated: Sparkles,
  room: Users2,
  spot: ShieldCheck,
};

type AboutProps = {
  events: NormEvent[];
  onSelect: (event: NormEvent) => void;
};

export function About({ events, onSelect }: AboutProps) {
  const previewEvents = events.slice(0, 3);

  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <div>
              <span className="eyebrow">About</span>
              <h2 className="mt-3 text-4xl font-light tracking-tight text-ink-50 sm:text-5xl lg:text-6xl">
                We run events like we
                <br />
                <span className="font-serif italic text-gold">
                  care about them
                </span>
              </h2>
              <p className="mt-6 max-w-md text-[17px] leading-[1.7] text-ink-300">
                norm started with a simple frustration: most event platforms
                feel like classified ads. We wanted something closer to a
                recommendation from a trusted friend — a place where every
                listing has a reason to exist, and every guest feels expected.
              </p>
              <p className="mt-4 max-w-md text-[17px] leading-[1.7] text-ink-400">
                Today we curate across seven categories and eight cities, with a
                small team that reads every submission and visits every venue
                before it goes live.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {values.map((v, i) => {
                const Icon = iconMap[v.icon] ?? Sparkles;
                return (
                  <Reveal key={v.title} delay={i * 100}>
                    <div className="group flex gap-4 rounded-2xl glass-card p-6 transition-all duration-500 hover:border-gold-400/20">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gold-400/10 ring-1 ring-gold-400/20 transition-all duration-500 group-hover:bg-gold-400/15">
                        <Icon className="h-5 w-5 text-gold-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-ink-50">
                          {v.title}
                        </h3>
                        <p className="mt-1.5 text-[15px] leading-[1.7] text-ink-300">
                          {v.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Image collage */}
        {previewEvents.length > 0 && (
          <Reveal delay={120} variant="scale">
            <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-4">
              {previewEvents.map((e, i) => (
                <button
                  key={e.id}
                  onClick={() => onSelect(e)}
                  className={`shine-on-hover group relative overflow-hidden rounded-2xl glass-card transition-all duration-700 hover:-translate-y-1.5 ${
                    i === 0 ? 'col-span-2 aspect-[16/10]' : 'aspect-square'
                  }`}
                >
                  <img
                    src={e.image}
                    alt={e.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-960/90 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span
                      className={`font-ui text-[10px] uppercase tracking-wider border rounded-full px-2 py-0.5 ${getCategoryStyle(
                        e.category
                      )}`}
                    >
                      {e.category}
                    </span>
                    <p className="mt-1.5 line-clamp-1 text-sm font-medium text-ink-50">
                      {e.title}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
