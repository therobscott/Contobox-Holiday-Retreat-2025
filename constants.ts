import { CalendarEvent } from './types';

// Using the prompt description, this image acts as the background. 
// In a real deployment, this would be the local file path provided by the user.
// We are using the placeholder URL as requested for the generated code, 
// but styling it to accept the specific image.
export const BACKGROUND_IMAGE_URL = "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2070&auto=format&fit=crop"; 
// Note: In production, replace the above URL with the actual asset path of the provided vector house image.

export const EVENTS: CalendarEvent[] = [
  {
    id: 1,
    date: "9 December 2025",
    time: "4:00 PM",
    activity: "Check-in",
    description: "Go to your assigned Chalet. Find your room. Claim your bed. Test the bounce level of the mattress.",
    isOpen: false,
    showContent: false
  },
  {
    id: 2,
    date: "9 December 2025",
    time: "6:00 PM",
    activity: "Decorate Your Own Holiday Sweater Dinner",
    description: "Bring a holiday sweater or a regular sweater you don’t mind pinning things to. Decorations and safety pins will be provided.",
    isOpen: false,
    showContent: false
  },
  {
    id: 3,
    date: "9 December 2025",
    time: "8:00 PM",
    activity: "Anti-Trivia",
    description: "Forget everything you know about Trivia because Chris is bringing back the most eclectic game show ever.",
    isOpen: false,
    showContent: false
  },
  {
    id: 4,
    date: "10 December 2025",
    time: "9:00 AM",
    activity: "Breakfast",
    description: "There will be bagels. There will be spreads. Work on your Bagel Optimization Strategy.",
    isOpen: false,
    showContent: false
  },
  {
    id: 5,
    date: "10 December 2025",
    time: "10:00 AM",
    activity: "Vertical Brainstorming Session",
    description: "We’re brainstorming new features and formats for a couple of verticals.",
    isOpen: false,
    showContent: false
  },
  {
    id: 6,
    date: "10 December 2025",
    time: "11:00 AM",
    activity: "AI (Productivity & Vibe Coding)",
    description: "The robots are here to help. We are going to learn some AI productivity tricks and how to vibe code.",
    isOpen: false,
    showContent: false
  },
  {
    id: 7,
    date: "10 December 2025",
    time: "12:00 PM",
    activity: "Build Your Own AI App",
    description: "You’re going to build an app and get rich before 1pm.",
    isOpen: false,
    showContent: false
  },
  {
    id: 8,
    date: "10 December 2025",
    time: "1:00 PM",
    activity: "Lunch",
    description: "Delivered to Chalet #1",
    isOpen: false,
    showContent: false
  },
  {
    id: 9,
    date: "10 December 2025",
    time: "2:00 PM",
    activity: "Free Play",
    description: "Do whatever you want.",
    isOpen: false,
    showContent: false
  },
  {
    id: 10,
    date: "10 December 2025",
    time: "4:00 PM",
    activity: "Escape Room",
    description: "We’re locking you in a room.",
    isOpen: false,
    showContent: false
  },
  {
    id: 11,
    date: "10 December 2025",
    time: "5:00 PM",
    activity: "Free Play",
    description: "Recover from the trauma of the Escape Room.",
    isOpen: false,
    showContent: false
  },
  {
    id: 12,
    date: "10 December 2025",
    time: "6:00 PM",
    activity: "Quartier des Spectacles",
    description: "We’re taking a walk to see some lights.",
    isOpen: false,
    showContent: false
  },
  {
    id: 13,
    date: "10 December 2025",
    time: "7:00 PM",
    activity: "Dinner",
    description: "Warming up at a cozy pub.",
    isOpen: false,
    showContent: false
  },
  {
    id: 14,
    date: "10 December 2025",
    time: "9:00 PM",
    activity: "Trivia",
    description: "Scott has promised to make it easier than last year.",
    isOpen: false,
    showContent: false
  },
  {
    id: 15,
    date: "11 December 2025",
    time: "9:00 AM",
    activity: "Breakfast",
    description: "You will need coffee.",
    isOpen: false,
    showContent: false
  },
  {
    id: 16,
    date: "11 December 2025",
    time: "11:00 AM",
    activity: "Check-out",
    description: "Pack your bags. Go home and sleep for 14 hours.",
    isOpen: false,
    showContent: false
  },
];