import { useEffect, useState } from 'react';
import {
  X,
  MapPin,
  Clock,
  CalendarDays,
  Users,
  Tag,
  CheckCircle2,
  Loader2,
  AlertCircle,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import type { NormEvent } from '@/data';
import {
  formatDateRange,
  formatPrice,
  getCategoryStyle,
} from '@/lib/format';

type EventDetailModalProps = {
  event: NormEvent | null;
  onClose: () => void;
};

type FormErrors = {
  fullName?: string;
  email?: string;
  phone?: string;
};

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

export function EventDetailModal({ event, onClose }: EventDetailModalProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  useEffect(() => {
    if (event) {
      document.body.style.overflow = 'hidden';
      setFullName('');
      setEmail('');
      setPhone('');
      setErrors({});
      setTouched({});
      setSubmitState('idle');
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [event]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && event) onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [event, onClose]);

  if (!event) return null;

  const validateField = (field: string, value: string): string | undefined => {
    const v = value.trim();
    if (field === 'fullName') {
      if (!v) return 'Please enter your full name.';
      if (v.length < 2) return 'Name must be at least 2 characters.';
      if (!/^[\p{L}\p{M}'’\- ]+$/u.test(v))
        return 'Name can only contain letters, spaces, and hyphens.';
    }
    if (field === 'email') {
      if (!v) return 'Please enter your email address.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v))
        return 'Please enter a valid email address.';
    }
    if (field === 'phone') {
      if (!v) return 'Please enter your phone number.';
      const digits = v.replace(/[^\d]/g, '');
      if (digits.length < 7) return 'Phone number is too short.';
      if (digits.length > 15) return 'Phone number is too long.';
      if (!/^[\d+()\s\-]+$/.test(v)) return 'Use digits, spaces, +, -, and ().';
    }
    return undefined;
  };

  const validateAll = (): boolean => {
    const next: FormErrors = {
      fullName: validateField('fullName', fullName),
      email: validateField('email', email),
      phone: validateField('phone', phone),
    };
    setErrors(next);
    setTouched({ fullName: true, email: true, phone: true });
    return !next.fullName && !next.email && !next.phone;
  };

  const handleBlur = (field: keyof FormErrors) => {
    setTouched((t) => ({ ...t, [field]: true }));
    const val = field === 'fullName' ? fullName : field === 'email' ? email : phone;
    setErrors((e) => ({ ...e, [field]: validateField(field, val) }));
  };

  const handleChange = (
    field: keyof FormErrors,
    value: string,
    setter: (v: string) => void
  ) => {
    setter(value);
    if (touched[field]) {
      setErrors((e) => ({ ...e, [field]: validateField(field, value) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAll()) return;
    setSubmitState('submitting');
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitState('success');
  };

  const handleClose = () => {
    if (submitState === 'submitting') return;
    onClose();
  };

  const spotsLeft = event.capacity - event.registered;
  const fillPct = Math.min(100, Math.round((event.registered / event.capacity) * 100));

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center">
      <div
        className="absolute inset-0 bg-ink-960/80 backdrop-blur-md"
        onClick={handleClose}
      />

      <div className="relative z-10 flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl glass-strong shadow-2xl shadow-black/60 animate-scale-in sm:rounded-3xl">
        <button
          onClick={handleClose}
          disabled={submitState === 'submitting'}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full glass-subtle transition-all duration-300 hover:bg-gold-400/15 disabled:opacity-40"
          aria-label="Close"
        >
          <X className="h-5 w-5 text-ink-50" />
        </button>

        <div className="no-scrollbar overflow-y-auto">
          {/* Hero image */}
          <div className="relative h-56 sm:h-72">
            <img
              src={event.image}
              alt={event.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-960 via-ink-960/40 to-transparent" />
            <div className="absolute bottom-5 left-6 right-6">
              <span
                className={`font-ui inline-block rounded-full border px-3 py-1 text-xs font-medium ${getCategoryStyle(
                  event.category
                )}`}
              >
                {event.category}
              </span>
              <h2 className="mt-3 text-2xl font-medium leading-tight text-ink-50 sm:text-3xl">
                {event.title}
              </h2>
              <p className="mt-1 text-[15px] text-ink-300">{event.tagline}</p>
            </div>
          </div>

          {/* Body */}
          <div className="px-6 pb-7 pt-6 sm:px-8">
            {/* Meta grid */}
            <div className="font-ui grid grid-cols-2 gap-3 sm:grid-cols-4">
              <MetaTile icon={<CalendarDays className="h-4 w-4" />} label="Date" value={formatDateRange(event.eventDate, event.endDate)} />
              <MetaTile icon={<Clock className="h-4 w-4" />} label="Time" value={event.timeLabel} />
              <MetaTile icon={<MapPin className="h-4 w-4" />} label="Venue" value={`${event.venue}, ${event.city}`} />
              <MetaTile icon={<Users className="h-4 w-4" />} label="Capacity" value={`${event.capacity.toLocaleString()} seats`} />
            </div>

            {/* Description */}
            <p className="mt-6 text-[16px] leading-[1.75] text-ink-100">
              {event.description}
            </p>

            {/* Highlights */}
            {event.highlights.length > 0 && (
              <div className="mt-6">
                <h3 className="font-ui flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-ink-400">
                  <Sparkles className="h-3.5 w-3.5 text-gold-400" />
                  Highlights
                </h3>
                <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {event.highlights.map((h, i) => (
                    <li key={i} className="font-ui flex items-start gap-2 text-sm text-ink-200">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-400" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Speakers */}
            {event.speakers && event.speakers.length > 0 && (
              <div className="mt-6">
                <h3 className="font-ui text-xs font-medium uppercase tracking-wider text-ink-400">
                  Featured speakers
                </h3>
                <div className="mt-3 flex flex-wrap gap-3">
                  {event.speakers.map((s) => (
                    <div key={s.name} className="flex items-center gap-3 rounded-2xl glass-subtle px-3 py-2">
                      <img src={s.avatar} alt={s.name} className="h-10 w-10 rounded-full object-cover ring-1 ring-gold-400/20" />
                      <div>
                        <p className="font-ui text-sm font-semibold text-ink-50">{s.name}</p>
                        <p className="font-ui text-xs text-ink-400">{s.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Price + capacity */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl glass-subtle px-4 py-3">
                <Tag className="h-5 w-5 text-gold-400" />
                <div>
                  <p className="font-ui text-xs text-ink-400">Entry</p>
                  <p className="text-lg font-medium text-ink-50">{formatPrice(event.price)}</p>
                </div>
              </div>
              <div className="rounded-2xl glass-subtle px-4 py-3">
                <div className="font-ui flex items-center justify-between text-xs text-ink-400">
                  <span>{event.registered.toLocaleString()} registered</span>
                  <span>{spotsLeft.toLocaleString()} spots left</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/8">
                  <div className="h-full rounded-full bg-gradient-to-r from-gold-400 to-gold-600" style={{ width: `${fillPct}%` }} />
                </div>
              </div>
            </div>

            {/* Registration */}
            {submitState === 'success' ? (
              <SuccessPanel eventName={event.title} onClose={handleClose} />
            ) : (
              <form onSubmit={handleSubmit} className="mt-7" noValidate>
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-px flex-1 bg-white/8" />
                  <span className="font-ui text-xs uppercase tracking-wider text-ink-400">
                    Register for this event
                  </span>
                  <div className="h-px flex-1 bg-white/8" />
                </div>

                <div className="flex flex-col gap-4">
                  <Field label="Full name" id="fullName" value={fullName} error={touched.fullName ? errors.fullName : undefined} onChange={(v) => handleChange('fullName', v, setFullName)} onBlur={() => handleBlur('fullName')} placeholder="Alex Morgan" disabled={submitState === 'submitting'} autoComplete="name" />
                  <Field label="Email address" id="email" type="email" value={email} error={touched.email ? errors.email : undefined} onChange={(v) => handleChange('email', v, setEmail)} onBlur={() => handleBlur('email')} placeholder="alex@example.com" disabled={submitState === 'submitting'} autoComplete="email" />
                  <Field label="Phone number" id="phone" type="tel" value={phone} error={touched.phone ? errors.phone : undefined} onChange={(v) => handleChange('phone', v, setPhone)} onBlur={() => handleBlur('phone')} placeholder="+1 555 123 4567" disabled={submitState === 'submitting'} autoComplete="tel" />
                </div>

                <button type="submit" disabled={submitState === 'submitting'} className="font-ui group mt-6 flex w-full items-center justify-center gap-2 rounded-xl btn-gold px-6 py-4 text-base disabled:cursor-not-allowed disabled:opacity-70">
                  {submitState === 'submitting' ? (
                    <><Loader2 className="h-5 w-5 animate-spin" />Registering...</>
                  ) : (
                    <>Confirm registration <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></>
                  )}
                </button>

                <p className="font-ui mt-3 text-center text-xs text-ink-500">
                  By registering, you agree to receive event details by email.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function MetaTile({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl glass-subtle px-3 py-2.5">
      <div className="font-ui flex items-center gap-1.5 text-ink-400">
        {icon}
        <span className="text-[11px] uppercase tracking-wider">{label}</span>
      </div>
      <p className="font-ui mt-1 text-sm font-medium text-ink-50">{value}</p>
    </div>
  );
}

function Field({ label, id, value, error, onChange, onBlur, placeholder, type = 'text', disabled, autoComplete }: {
  label: string; id: string; value: string; error?: string; onChange: (v: string) => void; onBlur: () => void; placeholder?: string; type?: string; disabled?: boolean; autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="font-ui mb-1.5 block text-xs font-medium text-ink-300">{label}</label>
      <input id={id} type={type} value={value} onChange={(e) => onChange(e.target.value)} onBlur={onBlur} placeholder={placeholder} disabled={disabled} autoComplete={autoComplete}
        className={`font-ui glass-input w-full rounded-xl px-4 py-3 text-[15px] text-ink-50 placeholder:text-ink-500 ${error ? 'error' : ''}`} />
      {error && (
        <p className="font-ui mt-1.5 flex items-center gap-1.5 text-xs text-red-300">
          <AlertCircle className="h-3.5 w-3.5" />{error}
        </p>
      )}
    </div>
  );
}

function SuccessPanel({ eventName, onClose }: { eventName: string; onClose: () => void }) {
  return (
    <div className="mt-7 flex flex-col items-center rounded-2xl glass-subtle px-6 py-10 text-center animate-fade-up">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-400/15 ring-1 ring-gold-400/30">
        <CheckCircle2 className="h-8 w-8 text-gold-400" />
      </div>
      <h3 className="mt-5 text-xl font-medium text-ink-50">You&apos;re registered</h3>
      <p className="mt-2 max-w-sm text-[15px] leading-[1.7] text-ink-300">
        We saved your spot for <span className="text-ink-50">{eventName}</span>. A confirmation has been sent to your email with everything you need.
      </p>
      <button onClick={onClose} className="font-ui mt-6 rounded-xl btn-ghost px-6 py-3 text-sm font-medium">
        Back to events
      </button>
    </div>
  );
}
