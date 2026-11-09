import { steps } from '@/data';
import { Reveal } from './Reveal';

export function HowItWorks() {
  return (
    <section id="how" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col gap-3">
            <span className="eyebrow">How it works</span>
            <h2 className="text-4xl font-light tracking-tight text-ink-50 sm:text-5xl lg:text-6xl">
              Three steps,{' '}
              <span className="font-serif italic text-gold">no friction</span>
            </h2>
            <p className="max-w-xl text-lg leading-[1.6] text-ink-300">
              From browsing to confirmed registration in under a minute. No
              account required, no waiting lists, no maybes.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 120} variant="scale">
              <div className="group relative h-full overflow-hidden rounded-3xl glass-card p-8 transition-all duration-500 hover:border-gold-400/20">
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gold-500/8 blur-[60px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="font-serif text-6xl font-light text-gold relative">
                  {step.number}
                </span>
                <h3 className="mt-5 text-xl font-medium text-ink-50 relative">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-ink-300 relative">
                  {step.body}
                </p>

                {/* Connector */}
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden h-px w-5 translate-x-full bg-gradient-to-r from-gold-500/30 to-transparent md:block" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
