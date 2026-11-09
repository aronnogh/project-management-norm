import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal, X, CalendarX } from 'lucide-react';
import type { NormEvent } from '@/data';
import { categories } from '@/data';
import { EventCard } from './EventCard';
import { Reveal } from './Reveal';

type EventBrowserProps = {
  events: NormEvent[];
  onSelect: (event: NormEvent) => void;
};

export function EventBrowser({ events, onSelect }: EventBrowserProps) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return events
      .filter((e) => category === 'All' || e.category === category)
      .filter(
        (e) =>
          !q ||
          e.title.toLowerCase().includes(q) ||
          e.tagline.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q) ||
          e.city.toLowerCase().includes(q) ||
          e.venue.toLowerCase().includes(q) ||
          e.category.toLowerCase().includes(q)
      )
      .sort(
        (a, b) =>
          new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime()
      );
  }, [events, query, category]);

  return (
    <section id="events" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col gap-3">
            <span className="eyebrow">Browse</span>
            <h2 className="text-4xl font-light tracking-tight text-ink-50 sm:text-5xl lg:text-6xl">
              Find your{' '}
              <span className="font-serif italic text-gold">next event</span>
            </h2>
            <p className="max-w-xl text-lg leading-[1.6] text-ink-300">
              Search by name or city, or filter by category. Every event is open
              for registration.
            </p>
          </div>
        </Reveal>

        {/* Controls */}
        <Reveal delay={100}>
          <div className="mt-8 flex flex-col gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search events, cities, or venues..."
                className="font-ui glass-input w-full rounded-2xl py-4 pl-12 pr-12 text-[15px] text-ink-50 placeholder:text-ink-500"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-ink-400 transition-colors hover:text-ink-50"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Category filter */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              <div className="font-ui flex flex-shrink-0 items-center gap-1.5 text-ink-400">
                <SlidersHorizontal className="h-4 w-4" />
                <span className="text-xs font-medium uppercase tracking-wider">
                  Filter
                </span>
              </div>
              <div className="h-5 w-px flex-shrink-0 bg-white/10" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`font-ui flex-shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
                    category === cat
                      ? 'btn-gold'
                      : 'glass-subtle text-ink-200 hover:text-ink-50 hover:bg-white/8'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Results count */}
        <div className="font-ui mt-6 flex items-center justify-between">
          <p className="text-sm text-ink-400">
            <span className="font-semibold text-ink-100">{filtered.length}</span>{' '}
            {filtered.length === 1 ? 'event' : 'events'}
            {category !== 'All' && ` in ${category}`}
            {query && ` matching "${query}"`}
          </p>
          {(category !== 'All' || query) && (
            <button
              onClick={() => {
                setCategory('All');
                setQuery('');
              }}
              className="text-sm text-ink-400 transition-colors hover:text-gold-400"
            >
              Clear all
            </button>
          )}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((event, i) => (
              <Reveal key={event.id} delay={Math.min(i * 80, 400)}>
                <EventCard event={event} onSelect={onSelect} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-12 flex flex-col items-center justify-center rounded-3xl glass-subtle px-6 py-20 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl glass-card">
              <CalendarX className="h-7 w-7 text-ink-500" />
            </div>
            <p className="mt-5 text-xl font-medium text-ink-50">
              No events found
            </p>
            <p className="mt-1 text-sm text-ink-400">
              Try a different search or category.
            </p>
            <button
              onClick={() => {
                setCategory('All');
                setQuery('');
              }}
              className="font-ui mt-6 rounded-xl btn-ghost px-5 py-2.5 text-sm font-medium"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
