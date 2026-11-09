/*
# Create events and registrations tables (single-tenant, no auth)

1. New Tables
- `events`
  - id (uuid, primary key)
  - title (text, not null)
  - category (text, not null) — e.g. Technology, Music, Art, Business, Sports, Food, Workshop
  - description (text, not null)
  - long_description (text, not null)
  - venue (text, not null)
  - city (text, not null)
  - event_date (timestamptz, not null)
  - end_date (timestamptz, not null)
  - image_url (text, not null)
  - price (numeric, default 0) — 0 means free
  - capacity (integer, not null)
  - featured (boolean, default false)
  - created_at (timestamptz, default now())
- `registrations`
  - id (uuid, primary key)
  - event_id (uuid, references events on delete cascade)
  - full_name (text, not null)
  - email (text, not null)
  - phone (text, not null)
  - created_at (timestamptz, default now())

2. Security
- Enable RLS on both tables.
- Events: grant SELECT to anon + authenticated; public read (no sign-in app).
- Registrations: grant SELECT, INSERT to anon + authenticated.
  Anyone may register (public form) and view registrations (for demo purposes,
  this is a public event platform with no accounts).

3. Seed Data
- Inserts 8 sample events across categories with real image URLs.
*/

CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  category text NOT NULL,
  description text NOT NULL,
  long_description text NOT NULL,
  venue text NOT NULL,
  city text NOT NULL,
  event_date timestamptz NOT NULL,
  end_date timestamptz NOT NULL,
  image_url text NOT NULL,
  price numeric(10,2) NOT NULL DEFAULT 0,
  capacity integer NOT NULL,
  featured boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;

GRANT SELECT ON events TO anon, authenticated;

DROP POLICY IF EXISTS "public_read_events" ON events;
CREATE POLICY "public_read_events"
ON events FOR SELECT
TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id uuid NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT ON registrations TO anon, authenticated;

DROP POLICY IF EXISTS "public_read_registrations" ON registrations;
CREATE POLICY "public_read_registrations"
ON registrations FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "public_insert_registrations" ON registrations;
CREATE POLICY "public_insert_registrations"
ON registrations FOR INSERT
TO anon, authenticated WITH CHECK (true);

-- Index for sorting events by date
CREATE INDEX IF NOT EXISTS idx_events_event_date ON events(event_date);
CREATE INDEX IF NOT EXISTS idx_events_category ON events(category);
CREATE INDEX IF NOT EXISTS idx_registrations_event_id ON registrations(event_id);

-- Seed events
INSERT INTO events (title, category, description, long_description, venue, city, event_date, end_date, image_url, price, capacity, featured) VALUES
(
  'Norm Tech Summit 2026',
  'Technology',
  'The flagship gathering for engineers, founders, and product thinkers shaping what comes next.',
  'Norm Tech Summit returns for its third edition, bringing together 2,000 builders for two days of deep-dive talks, hands-on workshops, and unscripted conversations. Expect frontier perspectives on applied AI, distributed systems, developer tooling, and the craft of shipping products people love. Keynotes from industry leaders, an open-source showcase, and a curated after-hours lounge make this the can''t-miss event of the season.',
  'Norm Auditorium',
  'San Francisco',
  '2026-11-15 09:00:00+00',
  '2026-11-16 18:00:00+00',
  'https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  120.00,
  2000,
  true
),
(
  'Resonance Music Festival',
  'Music',
  'Three stages. Forty artists. One unforgettable night under the open sky.',
  'Resonance is a one-night open-air festival curated for people who listen with intention. Across three stages, forty artists span ambient electronic, live jazz fusion, and indie folk — sequenced so you can drift from one world to another. Local food vendors, a vinyl listening bar, and immersive light installations round out the experience. Doors open at 5pm; the final set ends at 2am.',
  'Harbor Greens Park',
  'Los Angeles',
  '2026-11-22 17:00:00+00',
  '2026-11-23 02:00:00+00',
  'https://images.pexels.com/photos/20993079/pexels-photo-20993079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  65.00,
  5000,
  true
),
(
  'Chroma Art Exhibition',
  'Art',
  'A month-long showcase of contemporary works exploring color, memory, and movement.',
  'Chroma brings together twenty-six artists from across the globe for a multi-week exhibition exploring how color carries memory. Across painting, installation, and digital work, the show moves from quiet meditative rooms to bold, immersive environments. Curated walkthroughs run every Saturday with the artists in attendance. All works are available for acquisition.',
  'Norm Gallery Hall',
  'New York',
  '2026-11-10 10:00:00+00',
  '2026-12-10 19:00:00+00',
  'https://images.pexels.com/photos/15988007/pexels-photo-15988007.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  0.00,
  800,
  true
),
(
  'Founders Forum',
  'Business',
  'Where early-stage founders trade playbooks, mistakes, and the unglamorous truth.',
  'Founders Forum is an intimate, single-day gathering of 300 early-stage founders and the operators who back them. No keynote theater — just roundtable working sessions, office hours with partners, and candid retrospectives from founders who have built and failed and built again. Topics include go-to-market, hiring through the hard years, fundraising without losing the plot, and the operating rituals that compound.',
  'Norm Downtown Loft',
  'Austin',
  '2026-11-29 08:30:00+00',
  '2026-11-29 17:00:00+00',
  'https://images.pexels.com/photos/8761636/pexels-photo-8761636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  45.00,
  300,
  false
),
(
  'Midnight Marathon',
  'Sports',
  'A night race through the lit-up heart of the city. 10K, half, and full distances.',
  'The Midnight Marathon turns the city into a course. Choose from a 10K, half marathon, or full marathon, all starting at 10pm under streetlights and finishing in the riverfront plaza. Fully supported with aid stations, pacing teams, and a finish-line village with live music and late-night food. Every finisher receives a reflective medal and a limited-edition race jacket.',
  'Riverfront Plaza',
  'Chicago',
  '2026-12-06 22:00:00+00',
  '2026-12-07 04:00:00+00',
  'https://images.pexels.com/photos/29840338/pexels-photo-29840338.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  35.00,
  4000,
  false
),
(
  'Taste of the Region',
  'Food',
  'An evening with twenty chefs, one hundred wines, and the story behind each glass.',
  'Taste of the Region pairs twenty local chefs with one hundred wines from independent vineyards for an evening of slow, deliberate tasting. Each station features a single pairing — a dish and a glass — with the chef and sommelier present to walk you through it. A quiet jazz trio plays through the night. Attendance is capped at 400 to keep the room breathable.',
  'Norm Atrium',
  'Seattle',
  '2026-11-18 18:00:00+00',
  '2026-11-18 23:00:00+00',
  'https://images.pexels.com/photos/8775400/pexels-photo-8775400.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  85.00,
  400,
  false
),
(
  'Hands-On Product Design Lab',
  'Workshop',
  'A two-day intensive on shipping interface work that feels considered, not assembled.',
  'A small, hands-on lab for designers and front-end engineers who want their work to feel deliberate. Over two days we cover the full arc — reading a brief, establishing a visual system, prototyping interactions, and pressure-testing the result with real users. Bring a laptop and a project you are stuck on. Limited to 40 seats so everyone gets direct feedback.',
  'Norm Studio',
  'Portland',
  '2026-11-13 09:00:00+00',
  '2026-11-14 17:00:00+00',
  'https://images.pexels.com/photos/8516214/pexels-photo-8516214.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  55.00,
  40,
  false
),
(
  'Build & Pitch Demo Night',
  'Business',
  'Ten teams. Seven minutes each. A room full of operators ready to push back.',
  'Demo Night is where ten teams building in public show what they have and ask for the feedback that actually helps. Each team gets seven minutes — four to demo, three for Q&A from a room of founders, investors, and early users. It is fast, honest, and useful. Doors open at 6pm for food and conversation; pitches start at 7pm sharp.',
  'Norm Commons',
  'Denver',
  '2026-11-25 18:00:00+00',
  '2026-11-25 21:30:00+00',
  'https://images.pexels.com/photos/7414216/pexels-photo-7414216.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  15.00,
  250,
  false
)
ON CONFLICT DO NOTHING;
