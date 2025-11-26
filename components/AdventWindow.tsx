import React from 'react';
import { CalendarEvent } from '../types';

interface AdventWindowProps {
  event: CalendarEvent;
  onClick: (event: CalendarEvent) => void;
}

const AdventWindow: React.FC<AdventWindowProps> = ({ event, onClick }) => {
  // Helper to shorten date string for the small tile (e.g., "9 December 2025" -> "9 December")
  const shortDate = event.date.replace(/ 20\d{2}/, '');

  return (
    <div 
      className="relative w-full aspect-square cursor-pointer group"
      onClick={() => onClick(event)}
    >
        {/* The Frame/Container */}
        <div className="w-full h-full relative">
            
            {/* The "Inside" of the window (What you see when it opens) */}
            <div className="absolute inset-0 bg-picton-blue border-2 md:border-4 border-white flex items-center justify-center shadow-inner rounded-lg overflow-hidden p-1">
                {/* Content Container - Animated. Opacity 0 until showContent is true (which happens after modal close) */}
                <div className={`flex flex-col items-center justify-center text-center h-full w-full space-y-0.5 transition-opacity duration-1000 ease-out ${event.showContent ? 'opacity-100' : 'opacity-0'}`}>
                     {/* Date */}
                     <span className="text-[0.55rem] md:text-xs text-white/80 font-semibold uppercase tracking-tight leading-none">
                        {shortDate}
                     </span>
                     
                     {/* Time */}
                     <span className="text-[0.6rem] md:text-xs text-amber-orange font-bold uppercase tracking-wide leading-none mb-0.5">
                        {event.time}
                     </span>
                     
                     {/* Activity */}
                     <span className="text-[0.6rem] md:text-sm text-white font-bold leading-tight line-clamp-3 md:line-clamp-4 break-words w-full">
                        {event.activity}
                     </span>
                </div>
            </div>

            {/* The "Peel" (The front face that animates away) */}
            <div className={`
                absolute inset-0 bg-wisteria-purple border-2 md:border-4 border-white rounded-lg
                flex items-center justify-center 
                shadow-lg transition-all duration-700 ease-in-out origin-top-left
                group-hover:bg-amethyst
                ${event.isOpen 
                    ? 'opacity-0 -translate-y-full -rotate-45 scale-75 pointer-events-none' 
                    : 'z-10 group-hover:scale-[1.02]'}
            `}>
                {/* Window Number */}
                <span className="text-2xl md:text-4xl font-bold text-white drop-shadow-md">
                    {event.id}
                </span>

                {/* Decorative border inside */}
                <div className="absolute inset-2 border md:border-2 border-white/30 rounded"></div>
            </div>
        </div>
    </div>
  );
};

export default AdventWindow;