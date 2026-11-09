import { MapPin, Clock, ArrowUpRight, Flame } from 'lucide-react';
import type { NormEvent } from '@/data';
import {
  formatDateShort,
  formatPrice,
  getDayParts,
  getWeekday,
  getCategoryStyle,
} from '@/lib/format';

type EventCardProps = {
  event: NormEvent;
  onSelect: (event: NormEvent) => void;
};

export function EventCard({ event, onSelect }: EventCardProps) {
  const dayParts = getDayParts(event.eventDate);
  const weekday = getWeekday(event.eventDate);
  const spotsLeft = event.capacity - event.registered;
  const fillPct = Math.min(100, Math.round((event.registered / event.capacity) * 100));
  const almostFull = fillPct >= 85;

  return (
    <article
      onClick={() => onSelect(event)}
      className="shine-on-hover group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl glass-card transition-all duration-700 hover:-translate-y-2 hover:border-gold-400/20"
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-960 via-ink-960/25 to-transparent" />

        {/* Date badge */}
        <div className="absolute left-4 top-4 flex flex-col items-center rounded-2xl glass-strong px-3 py-2.5">
          <span className="font-ui text-[9px] font-semibold uppercase tracking-wider text-gold-400">
            {weekday}
          </span>
          <span className="font-serif text-2xl font-light leading-none text-ink-50">
            {dayParts.day}
          </span>
          <span className="font-ui text-[9px] uppercase tracking-wider text-ink-300">
            {dayParts.month}
          </span>
        </div>

        {/* Category */}
        <span
          className={`font-ui absolute right-4 top-4 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-md ${getCategoryStyle(
            event.category
          )}`}
        >
          {event.category}
        </span>

        {/* Price */}
        <div className="absolute bottom-4 right-4">
          <span className="font-ui rounded-lg glass-strong px-2.5 py-1 text-sm font-semibold text-ink-50">
            {formatPrice(event.price)}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-medium leading-snug text-ink-50">
          {event.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-[15px] leading-[1.55] text-ink-300">
          {event.tagline}
        </p>

        {/* Meta */}
        <div className="font-ui mt-4 flex flex-col gap-1.5 text-xs text-ink-400">
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-ink-500" />
            <span className="text-ink-300">
              {event.venue}, {event.city}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-ink-500" />
            <span className="text-ink-300">
              {formatDateShort(event.eventDate)} · {event.timeLabel}
            </span>
          </div>
        </div>

        {/* Capacity */}
        <div className="font-ui mt-4">
          <div className="flex items-center justify-between text-[11px] text-ink-400">
            <span>{event.registered.toLocaleString()} registered</span>
            <span className={`flex items-center gap-1 ${almostFull ? 'text-gold-400' : ''}`}>
              {almostFull && <Flame className="h-3 w-3" />}
              {spotsLeft > 0 ? `${spotsLeft.toLocaleString()} left` : 'Full'}
            </span>
          </div>
          <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/8">
            <div
              className={`h-full rounded-full transition-all duration-700 ${
                almostFull
                  ? 'bg-gradient-to-r from-gold-400 to-gold-600'
                  : 'bg-gradient-to-r from-ink-300 to-ink-400'
              }`}
              style={{ width: `${fillPct}%` }}
            />
          </div>
        </div>

        {/* CTA */}
        <div className="font-ui mt-5 flex items-center justify-between border-t border-white/6 pt-4">
          <span className="text-sm font-medium text-ink-200">View details</span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full glass-subtle transition-all duration-400 group-hover:bg-gold-400/15 group-hover:text-gold-400">
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
