import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

type CTAProps = {
  onBrowse: () => void;
};

export function CTA({ onBrowse }: CTAProps) {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-[2rem] glass-card px-6 py-20 text-center sm:px-12 sm:py-24">
            {/* Glow accents */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold-500/12 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gold-600/10 blur-[100px]" />

            <div className="relative">
              <h2 className="text-4xl font-light leading-tight tracking-tight text-ink-50 sm:text-5xl lg:text-6xl">
                Your next evening{' '}
                <span className="font-serif italic text-gold">is here</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-[1.6] text-ink-300">
                Nine events across eight cities. Find one worth showing up for
                and hold your spot in under a minute.
              </p>
              <button
                onClick={onBrowse}
                className="font-ui group mt-8 inline-flex items-center gap-2 rounded-xl btn-gold px-8 py-4 text-base"
              >
                Browse all events
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
