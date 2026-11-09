import { useCallback, useMemo, useRef, useState } from 'react';
import { GlassBackground } from '@/components/GlassBackground';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { FeaturedEvents } from '@/components/FeaturedEvents';
import { EventBrowser } from '@/components/EventBrowser';
import { HowItWorks } from '@/components/HowItWorks';
import { Testimonials } from '@/components/Testimonials';
import { About } from '@/components/About';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { EventDetailModal } from '@/components/EventDetailModal';
import { events as allEvents, type NormEvent } from '@/data';

export default function App() {
  const [selected, setSelected] = useState<NormEvent | null>(null);
  const eventsSectionRef = useRef<HTMLDivElement>(null);

  const featured = useMemo(() => allEvents.filter((e) => e.featured), []);

  const scrollToEvents = useCallback(() => {
    eventsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="relative min-h-screen">
      <GlassBackground />
      <Navbar onBrowse={scrollToEvents} onLogoClick={scrollToTop} />

      <main>
        <Hero
          onBrowse={scrollToEvents}
          eventCount={allEvents.length}
          featured={featured}
          onSelect={setSelected}
        />

        <FeaturedEvents events={featured} onSelect={setSelected} />

        <div ref={eventsSectionRef}>
          <EventBrowser events={allEvents} onSelect={setSelected} />
        </div>

        <HowItWorks />

        <Testimonials />

        <About events={allEvents} onSelect={setSelected} />

        <CTA onBrowse={scrollToEvents} />
      </main>

      <Footer />

      <EventDetailModal event={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
