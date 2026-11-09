export type NormEvent = {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  venue: string;
  city: string;
  eventDate: string;
  endDate: string;
  timeLabel: string;
  image: string;
  price: number;
  capacity: number;
  registered: number;
  featured: boolean;
  speakers?: { name: string; role: string; avatar: string }[];
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  event: string;
};

export const events: NormEvent[] = [
  {
    id: 'evt-001',
    title: 'Norm Tech Summit 2026',
    category: 'Technology',
    tagline: 'Three days at the frontier of building',
    description:
      'Norm Tech Summit returns for its third edition, bringing together two thousand engineers, founders, and product thinkers for three days of deep-dive talks, hands-on workshops, and unscripted conversations about what comes next.',
    highlights: [
      'Keynotes from leaders at Vercel, Linear, and Anthropic',
      'Twelve hands-on workshops across two tracks',
      'Open-source showcase with thirty live projects',
      'After-hours lounge with curated music and food',
    ],
    venue: 'Norm Auditorium',
    city: 'San Francisco',
    eventDate: '2026-11-15',
    endDate: '2026-11-17',
    timeLabel: '9:00 AM — 6:00 PM',
    image:
      'https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 120,
    capacity: 2000,
    registered: 1684,
    featured: true,
    speakers: [
      {
        name: 'Mara Chen',
        role: 'VP Engineering, Linear',
        avatar:
          'https://images.pexels.com/photos/6942776/pexels-photo-6942776.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
      },
      {
        name: 'Dev Patel',
        role: 'Founder, Forge Labs',
        avatar:
          'https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
      },
      {
        name: 'Lior Benzvi',
        role: 'Design Lead, Vercel',
        avatar:
          'https://images.pexels.com/photos/7562139/pexels-photo-7562139.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
      },
    ],
  },
  {
    id: 'evt-002',
    title: 'Resonance Music Festival',
    category: 'Music',
    tagline: 'Three stages. Forty artists. One open sky.',
    description:
      'Resonance is a one-night open-air festival curated for people who listen with intention. Across three stages, forty artists span ambient electronic, live jazz fusion, and indie folk, sequenced so you can drift from one world to another as the night deepens.',
    highlights: [
      'Three stages: Ambient, Fusion, and Folk',
      'Local food vendors and a vinyl listening bar',
      'Immersive light installations by Studio Halftone',
      'Doors at 5 PM, final set ends at 2 AM',
    ],
    venue: 'Harbor Greens Park',
    city: 'Los Angeles',
    eventDate: '2026-11-22',
    endDate: '2026-11-23',
    timeLabel: '5:00 PM — 2:00 AM',
    image:
      'https://images.pexels.com/photos/20993079/pexels-photo-20993079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 65,
    capacity: 5000,
    registered: 3120,
    featured: true,
  },
  {
    id: 'evt-003',
    title: 'Chroma Art Exhibition',
    category: 'Art',
    tagline: 'Color, memory, and movement across a month',
    description:
      'Chroma brings together twenty-six artists from across the globe for a multi-week exhibition exploring how color carries memory. Across painting, installation, and digital work, the show moves from quiet meditative rooms to bold, immersive environments.',
    highlights: [
      'Twenty-six international artists',
      'Curated walkthroughs every Saturday',
      'Painting, installation, and digital work',
      'All works available for acquisition',
    ],
    venue: 'Norm Gallery Hall',
    city: 'New York',
    eventDate: '2026-11-10',
    endDate: '2026-12-10',
    timeLabel: '10:00 AM — 7:00 PM',
    image:
      'https://images.pexels.com/photos/15988007/pexels-photo-15988007.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 0,
    capacity: 800,
    registered: 412,
    featured: true,
  },
  {
    id: 'evt-004',
    title: 'Founders Forum',
    category: 'Business',
    tagline: 'Playbooks, mistakes, and the unglamorous truth',
    description:
      'Founders Forum is an intimate, single-day gathering of three hundred early-stage founders and the operators who back them. No keynote theater — just roundtable working sessions, office hours with partners, and candid retrospectives from founders who have built and failed and built again.',
    highlights: [
      'Roundtable working sessions, not lectures',
      'Office hours with ten partner-level investors',
      'Candid retrospectives from exited founders',
      'Capped at three hundred attendees',
    ],
    venue: 'Norm Downtown Loft',
    city: 'Austin',
    eventDate: '2026-11-29',
    endDate: '2026-11-29',
    timeLabel: '8:30 AM — 5:00 PM',
    image:
      'https://images.pexels.com/photos/8761636/pexels-photo-8761636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 45,
    capacity: 300,
    registered: 287,
    featured: false,
    speakers: [
      {
        name: 'Theo Marlow',
        role: 'GP, Northwind Capital',
        avatar:
          'https://images.pexels.com/photos/31420959/pexels-photo-31420959.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
      },
      {
        name: 'Sasha Vey',
        role: 'Founder, Tessellate',
        avatar:
          'https://images.pexels.com/photos/37273005/pexels-photo-37273005.png?auto=compress&cs=tinysrgb&h=200&w=200',
      },
    ],
  },
  {
    id: 'evt-005',
    title: 'Midnight Marathon',
    category: 'Sports',
    tagline: 'A night race through the lit-up heart of the city',
    description:
      'The Midnight Marathon turns the city into a course. Choose from a 10K, half marathon, or full marathon, all starting at ten under streetlights and finishing in the riverfront plaza. Fully supported with aid stations, pacing teams, and a finish-line village with live music and late-night food.',
    highlights: [
      '10K, half, and full marathon distances',
      'Aid stations every two kilometers',
      'Pacing teams for every distance',
      'Reflective medal and race jacket for every finisher',
    ],
    venue: 'Riverfront Plaza',
    city: 'Chicago',
    eventDate: '2026-12-06',
    endDate: '2026-12-07',
    timeLabel: '10:00 PM — 4:00 AM',
    image:
      'https://images.pexels.com/photos/29840338/pexels-photo-29840338.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 35,
    capacity: 4000,
    registered: 2240,
    featured: false,
  },
  {
    id: 'evt-006',
    title: 'Taste of the Region',
    category: 'Food',
    tagline: 'Twenty chefs, one hundred wines, one slow evening',
    description:
      'Taste of the Region pairs twenty local chefs with one hundred wines from independent vineyards for an evening of slow, deliberate tasting. Each station features a single pairing — a dish and a glass — with the chef and sommelier present to walk you through it.',
    highlights: [
      'Twenty chef-and-sommelier pairing stations',
      'One hundred wines from independent vineyards',
      'A quiet jazz trio plays through the night',
      'Capped at four hundred to keep the room breathable',
    ],
    venue: 'Norm Atrium',
    city: 'Seattle',
    eventDate: '2026-11-18',
    endDate: '2026-11-18',
    timeLabel: '6:00 PM — 11:00 PM',
    image:
      'https://images.pexels.com/photos/8775400/pexels-photo-8775400.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 85,
    capacity: 400,
    registered: 351,
    featured: false,
  },
  {
    id: 'evt-007',
    title: 'Hands-On Product Design Lab',
    category: 'Workshop',
    tagline: 'Two days of shipping work that feels considered',
    description:
      'A small, hands-on lab for designers and front-end engineers who want their work to feel deliberate. Over two days we cover the full arc — reading a brief, establishing a visual system, prototyping interactions, and pressure-testing the result with real users.',
    highlights: [
      'Full arc: brief to system to prototype to test',
      'Bring a project you are stuck on',
      'Direct feedback on every participant\'s work',
      'Limited to forty seats',
    ],
    venue: 'Norm Studio',
    city: 'Portland',
    eventDate: '2026-11-13',
    endDate: '2026-11-14',
    timeLabel: '9:00 AM — 5:00 PM',
    image:
      'https://images.pexels.com/photos/8516214/pexels-photo-8516214.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 55,
    capacity: 40,
    registered: 38,
    featured: false,
    speakers: [
      {
        name: 'Lior Benzvi',
        role: 'Design Lead, Vercel',
        avatar:
          'https://images.pexels.com/photos/7562139/pexels-photo-7562139.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
      },
    ],
  },
  {
    id: 'evt-008',
    title: 'Build & Pitch Demo Night',
    category: 'Business',
    tagline: 'Ten teams, seven minutes each, honest feedback',
    description:
      'Demo Night is where ten teams building in public show what they have and ask for the feedback that actually helps. Each team gets seven minutes — four to demo, three for Q&A from a room of founders, investors, and early users. It is fast, honest, and useful.',
    highlights: [
      'Ten teams, seven minutes each',
      'Four-minute demo, three-minute Q&A',
      'Room of founders, investors, and early users',
      'Food and conversation from 6 PM',
    ],
    venue: 'Norm Commons',
    city: 'Denver',
    eventDate: '2026-11-25',
    endDate: '2026-11-25',
    timeLabel: '6:00 PM — 9:30 PM',
    image:
      'https://images.pexels.com/photos/7414216/pexels-photo-7414216.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 15,
    capacity: 250,
    registered: 198,
    featured: false,
  },
  {
    id: 'evt-009',
    title: 'Lattice Type & Lettering Fair',
    category: 'Art',
    tagline: 'A weekend for people who notice letterforms',
    description:
      'Lattice is a weekend fair for type designers, letterers, and the people who notice the shapes of words. Thirty independent type foundries show new releases, a live lettering wall runs all weekend, and six workshops cover everything from variable axes to brush technique.',
    highlights: [
      'Thirty independent type foundries',
      'Live lettering wall, open all weekend',
      'Six workshops on type and lettering craft',
      'Limited-edition fair poster for every attendee',
    ],
    venue: 'Norm Warehouse',
    city: 'Brooklyn',
    eventDate: '2026-12-12',
    endDate: '2026-12-13',
    timeLabel: '10:00 AM — 6:00 PM',
    image:
      'https://images.pexels.com/photos/1671016/pexels-photo-1671016.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 25,
    capacity: 600,
    registered: 204,
    featured: false,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'Norm Tech Summit was the first conference in years where I stayed for every session. The curation is obvious — every talk earned its slot.',
    name: 'Mara Chen',
    role: 'VP Engineering, Linear',
    avatar:
      'https://images.pexels.com/photos/6942776/pexels-photo-6942776.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    event: 'Norm Tech Summit 2025',
  },
  {
    id: 't2',
    quote:
      'I came to Founders Forum for the networking and left with three operating rituals we still use eighteen months later. Worth every minute.',
    name: 'Theo Marlow',
    role: 'GP, Northwind Capital',
    avatar:
      'https://images.pexels.com/photos/31420959/pexels-photo-31420959.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    event: 'Founders Forum',
  },
  {
    id: 't3',
    quote:
      'The Design Lab was the first workshop where I actually shipped something I am proud of. Forty seats, real feedback, no filler.',
    name: 'Sasha Vey',
    role: 'Founder, Tessellate',
    avatar:
      'https://images.pexels.com/photos/37273005/pexels-photo-37273005.png?auto=compress&cs=tinysrgb&h=200&w=200',
    event: 'Product Design Lab',
  },
];

export const categories = [
  'All',
  'Technology',
  'Music',
  'Art',
  'Business',
  'Sports',
  'Food',
  'Workshop',
];

export const stats = [
  { label: 'Live events', value: '9' },
  { label: 'Cities', value: '8' },
  { label: 'Registered guests', value: '8.4K+' },
  { label: 'Categories', value: '7' },
];

export const values = [
  {
    icon: 'curated',
    title: 'Chosen, not listed',
    body: 'Every event on norm is reviewed by a person. We turn down more than we accept, so what you see is worth your evening.',
  },
  {
    icon: 'room',
    title: 'Built for the room',
    body: 'Capacities are honest, venues are vetted, and registration is frictionless. The experience starts before you arrive.',
  },
  {
    icon: 'spot',
    title: 'Your spot is real',
    body: 'When you register, your seat is held immediately. No waiting lists, no maybes, no showing up to a full room.',
  },
];

export const steps = [
  {
    number: '01',
    title: 'Discover',
    body: 'Browse hand-picked events across seven categories. Search by name, city, or venue, or filter by what interests you.',
  },
  {
    number: '02',
    title: 'Choose',
    body: 'Open any event for the full picture — schedule, highlights, speakers, and honest capacity. No marketing fluff.',
  },
  {
    number: '03',
    title: 'Register',
    body: 'A simple form with real validation. Your spot is confirmed on the spot, and a summary lands in your inbox.',
  },
];

export const marqueeItems = [
  'Conferences',
  'Festivals',
  'Exhibitions',
  'Workshops',
  'Summits',
  'Demo Nights',
  'Marathons',
  'Tastings',
  'Showcases',
  'Launches',
];
