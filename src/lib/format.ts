export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function formatDateShort(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export function formatDateRange(start: string, end: string): string {
  const s = new Date(start);
  const e = new Date(end);
  if (s.toDateString() === e.toDateString()) return formatDateShort(start);
  return `${formatDateShort(start)} — ${formatDateShort(end)}`;
}

export function formatPrice(price: number): string {
  if (price === 0) return 'Free';
  return `$${price}`;
}

export function getDayParts(iso: string): { day: string; month: string } {
  const d = new Date(iso);
  return {
    day: d.toLocaleDateString('en-US', { day: 'numeric' }),
    month: d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
  };
}

export function getWeekday(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
}

const CATEGORY_STYLES: Record<string, string> = {
  Technology: 'text-sky-300 border-sky-400/20 bg-sky-400/5',
  Music: 'text-rose-300 border-rose-400/20 bg-rose-400/5',
  Art: 'text-amber-300 border-amber-400/20 bg-amber-400/5',
  Business: 'text-emerald-300 border-emerald-400/20 bg-emerald-400/5',
  Sports: 'text-lime-300 border-lime-400/20 bg-lime-400/5',
  Food: 'text-orange-300 border-orange-400/20 bg-orange-400/5',
  Workshop: 'text-violet-300 border-violet-400/20 bg-violet-400/5',
};

export function getCategoryStyle(category: string): string {
  return (
    CATEGORY_STYLES[category] ??
    'text-ink-200 border-white/10 bg-white/5'
  );
}
