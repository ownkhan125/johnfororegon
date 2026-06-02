export const EVENTS = [
  {
    slug: "bend-town-hall",
    date: "MAY 24",
    day: "Fri",
    fullDate: "Friday, May 24, 2026",
    time: "6:30 PM",
    endTime: "8:30 PM",
    title: "Bend Town Hall",
    venue: "The Tower Theatre",
    address: "835 NW Wall St, Bend, OR 97703",
    city: "Bend, OR",
    type: "Town Hall",
    capacity: 460,
    img: "https://picsum.photos/seed/bend-tower-theatre/1600/1000",
    summary:
      "Open seating, free coffee. John takes questions for two hours — no script, no staff filter.",
    description:
      "An evening with John Hartwell at Bend's historic Tower Theatre. Doors open at 6:00 PM and the conversation runs two hours flat. Bring your questions on housing, wildfire policy, rural healthcare — anything that's on your mind. Light refreshments served in the lobby before the program.",
    schedule: [
      { time: "6:00 PM", label: "Doors open · coffee in the lobby" },
      { time: "6:30 PM", label: "Welcome from Deschutes County coordinator" },
      { time: "6:45 PM", label: "John's opening remarks · 15 min" },
      { time: "7:00 PM", label: "Open Q&A · audience-led" },
      { time: "8:15 PM", label: "Closing & next steps" },
      { time: "8:30 PM", label: "Sign-out · staff available for follow-ups" },
    ],
    tags: ["Q&A welcome", "Free", "ADA accessible", "Family-friendly"],
  },
  {
    slug: "riverwalk-canvass",
    date: "JUN 02",
    day: "Sun",
    fullDate: "Sunday, June 2, 2026",
    time: "11:00 AM",
    endTime: "2:00 PM",
    title: "Riverwalk Canvass",
    venue: "Tom McCall Waterfront Park",
    address: "Naito Pkwy & SW Salmon St, Portland, OR 97204",
    city: "Portland, OR",
    type: "Canvass",
    capacity: 120,
    img: "https://picsum.photos/seed/portland-canvass-event/1600/1000",
    summary:
      "Bring a friend. We'll walk you through the script and pair you with an experienced volunteer.",
    description:
      "Our biggest summer canvass — a 3-hour Sunday morning shift across SE Portland. New volunteers welcome; we'll train you on the porch script and partner you with a captain. Closed-toe shoes, water bottle, and a willingness to knock 30 doors are all you need.",
    schedule: [
      { time: "11:00 AM", label: "Check-in at the rose garden gazebo" },
      { time: "11:15 AM", label: "Quick training for first-time canvassers" },
      { time: "11:45 AM", label: "Pairs deploy across walk lists" },
      { time: "1:30 PM", label: "Return to base · check-in" },
      { time: "1:45 PM", label: "Debrief & lunch on the campaign" },
      { time: "2:00 PM", label: "Wrap" },
    ],
    tags: ["All experience levels", "Free lunch", "Outdoor"],
  },
  {
    slug: "coast-fish-fry",
    date: "JUN 14",
    day: "Fri",
    fullDate: "Friday, June 14, 2026",
    time: "5:00 PM",
    endTime: "9:00 PM",
    title: "Coast Fish Fry",
    venue: "Cannery Pier Hotel",
    address: "10 Basin St, Astoria, OR 97103",
    city: "Astoria, OR",
    type: "Fundraiser",
    capacity: 220,
    img: "https://picsum.photos/seed/astoria-coast-cannery/1600/1000",
    summary:
      "Family-friendly fundraiser on the river. Suggested donation $25, no one turned away.",
    description:
      "An evening on the Columbia. Fresh-caught halibut, a short program from John, and music from Astoria's own River City Stringband. Suggested donation $25/person — every dollar funds our coastal field program. No one turned away for lack of funds.",
    schedule: [
      { time: "5:00 PM", label: "Doors · welcome on the deck" },
      { time: "5:45 PM", label: "Dinner served" },
      { time: "6:45 PM", label: "John's remarks · 15 min" },
      { time: "7:00 PM", label: "Live music · River City Stringband" },
      { time: "8:30 PM", label: "Closing toast" },
    ],
    tags: ["Fundraiser", "Family-friendly", "Live music"],
  },
  {
    slug: "rural-healthcare-roundtable",
    date: "JUN 22",
    day: "Sat",
    fullDate: "Saturday, June 22, 2026",
    time: "10:00 AM",
    endTime: "12:30 PM",
    title: "Rural Healthcare Roundtable",
    venue: "Eastern Oregon University · Loso Hall 110",
    address: "1 University Blvd, La Grande, OR 97850",
    city: "La Grande, OR",
    type: "Roundtable",
    capacity: 80,
    img: "https://picsum.photos/seed/la-grande-healthcare-roundtable/1600/1000",
    summary:
      "Rural ER doctors, nurses, and patients trade what's working — and what isn't.",
    description:
      "A working roundtable on the future of rural healthcare in Oregon. ER docs from Grande Ronde and Wallowa, nurses from the Indian Health Service clinic in Pendleton, and patients who've felt the gaps will share what's broken and what we can fix in the next session.",
    schedule: [
      { time: "10:00 AM", label: "Coffee & introductions" },
      { time: "10:20 AM", label: "Panel · five voices, fifteen minutes each" },
      { time: "11:30 AM", label: "Open discussion with the room" },
      { time: "12:15 PM", label: "John's wrap & policy commitments" },
      { time: "12:30 PM", label: "Adjourn" },
    ],
    tags: ["Policy", "Press welcome", "Open to public"],
  },
  {
    slug: "independence-day-parade",
    date: "JUL 04",
    day: "Thu",
    fullDate: "Thursday, July 4, 2026",
    time: "12:00 PM",
    endTime: "2:00 PM",
    title: "Independence Day Parade",
    venue: "Main Street, downtown Salem",
    address: "Center St & Liberty St NE, Salem, OR 97301",
    city: "Salem, OR",
    type: "Community",
    capacity: 250,
    img: "https://picsum.photos/seed/salem-fourth-parade/1600/1000",
    summary:
      "Walk with the campaign. We'll meet at the courthouse steps at 11:30 sharp.",
    description:
      "Join the Hartwell for Oregon contingent in Salem's annual Independence Day parade. We'll hand out yard signs and small flags along the route. Wear red, white, or campaign blue — and walking shoes.",
    schedule: [
      { time: "11:30 AM", label: "Meet at the courthouse steps" },
      { time: "12:00 PM", label: "Parade kicks off" },
      { time: "1:30 PM", label: "Reach the riverfront finish" },
      { time: "2:00 PM", label: "Group photo & wrap" },
    ],
    tags: ["Family-friendly", "Free", "Wear red/white"],
  },
  {
    slug: "wallowa-listening-tour",
    date: "JUL 13",
    day: "Sat",
    fullDate: "Saturday, July 13, 2026",
    time: "3:00 PM",
    endTime: "5:00 PM",
    title: "Wallowa County Listening Tour",
    venue: "Joseph Community Center",
    address: "102 E 1st St, Joseph, OR 97846",
    city: "Joseph, OR",
    type: "Listening",
    capacity: 140,
    img: "https://picsum.photos/seed/wallowa-joseph-listening/1600/1000",
    summary:
      "The 24th county on the tour. Locals share what's broken; John takes notes.",
    description:
      "The 24th stop on the all-36-county listening tour. The format is simple: locals talk, John listens, our team takes notes that turn into policy. Anyone is welcome to speak.",
    schedule: [
      { time: "3:00 PM", label: "Open · pie & coffee" },
      { time: "3:15 PM", label: "Welcome from Wallowa County captain" },
      { time: "3:30 PM", label: "Round-robin · open mic" },
      { time: "4:30 PM", label: "John's response · next steps" },
      { time: "5:00 PM", label: "Adjourn" },
    ],
    tags: ["Listening tour", "Open mic", "Pie"],
  },
];

export function findEventBySlug(slug) {
  return EVENTS.find((e) => e.slug === slug);
}

export function getRelatedEvents(slug, count = 3) {
  const idx = EVENTS.findIndex((e) => e.slug === slug);
  if (idx === -1) return EVENTS.slice(0, count);
  const tail = EVENTS.slice(idx + 1);
  const head = EVENTS.slice(0, idx);
  return [...tail, ...head].slice(0, count);
}
