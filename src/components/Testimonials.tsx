import { Quote } from 'lucide-react';
import { testimonials } from '@/data';
import { Reveal } from './Reveal';

export function Testimonials() {
  return (
    <section id="voices" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col gap-3">
            <span className="eyebrow">Voices</span>
            <h2 className="text-4xl font-light tracking-tight text-ink-50 sm:text-5xl lg:text-6xl">
              What guests{' '}
              <span className="font-serif italic text-gold">tell us</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 120} variant="scale">
              <figure className="group flex h-full flex-col rounded-3xl glass-card p-7 transition-all duration-500 hover:border-gold-400/20 hover:-translate-y-1">
                <Quote className="h-9 w-9 flex-shrink-0 text-gold-400/40 transition-transform duration-500 group-hover:scale-110" />
                <blockquote className="mt-5 flex-1 text-[17px] leading-[1.7] text-ink-100">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/6 pt-5">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    className="h-12 w-12 flex-shrink-0 rounded-full object-cover ring-1 ring-gold-400/20"
                  />
                  <div>
                    <p className="font-ui text-sm font-semibold text-ink-50">
                      {t.name}
                    </p>
                    <p className="font-ui text-xs text-ink-400">{t.role}</p>
                    <p className="font-ui mt-0.5 text-xs text-gold-400">
                      {t.event}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
