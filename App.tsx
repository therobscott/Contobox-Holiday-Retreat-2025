import React, { useState } from 'react';
import { EVENTS, BACKGROUND_IMAGE_URL, FLOOR_IMAGE_URL } from './constants';
import { CalendarEvent } from './types';
import AdventWindow from './components/AdventWindow';
import EventModal from './components/EventModal';

const App: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [events, setEvents] = useState<CalendarEvent[]>(EVENTS);

  const handleWindowClick = (event: CalendarEvent) => {
    // Mark as open locally for animation state
    const updatedEvents = events.map(e => 
        e.id === event.id ? { ...e, isOpen: true } : e
    );
    setEvents(updatedEvents);
    
    // Delay opening the modal to allow the CSS animation (700ms) to complete
    setTimeout(() => {
      setSelectedEvent(event);
    }, 800);
  };

  const handleCloseModal = () => {
    if (selectedEvent) {
      // Reveal the content inside the window only after closing the modal
      setEvents(prevEvents => prevEvents.map(e => 
        e.id === selectedEvent.id ? { ...e, showContent: true } : e
      ));
    }
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 to-white flex flex-col font-light overflow-x-hidden">
      
      {/* Page Header - Seamlessly integrated into the sky background */}
      <header className="pt-4 pb-0 md:pt-12 md:pb-4 px-4 z-20 relative">
        <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-wisteria-purple mb-4 tracking-tight drop-shadow-sm">
                The 2025 Contobox Holiday Retreat
            </h1>
            <p className="text-xl md:text-2xl text-scorpion-gray mb-6 drop-shadow-sm font-medium">
                We’re going to go on a retreat to boldly bond where no one has bonded before.
            </p>
            <div className="inline-block bg-amber-orange text-black font-bold px-6 py-2 rounded-full text-sm uppercase tracking-widest shadow-md animate-bounce">
                Click a window to reveal an activity
            </div>
        </div>
      </header>

      {/* Main Content Area - The House */}
      <main className="flex-grow relative flex justify-center items-start md:items-end pb-0 w-full">
        
        {/* House Container */}
        {/* Mobile: 135% width, centered via flexbox self-center, no padding. Desktop: Normal width, centered auto, 4px padding. */}
        <div className="relative w-[135%] min-w-[135%] self-center shrink-0 md:w-full md:min-w-0 md:mx-auto max-w-none md:max-w-6xl z-10 px-0 md:px-4 -mb-1 mt-4 md:mt-0 md:mb-0">
            <div className="relative w-full flex flex-col items-center">
                
                {/* House Wrapper - Keeps grid positioned relative to house image ONLY */}
                <div className="relative w-full z-10">
                    {/* The House Image */}
                    <img 
                        src={BACKGROUND_IMAGE_URL} 
                        alt="Holiday Retreat House" 
                        className="w-full h-auto drop-shadow-2xl relative z-10"
                    />

                    {/* The Window Grid - Absolutely positioned over the House Image */}
                    {/* 
                        Positioning Logic for house.png:
                        top-[31.5%]: Adjusted to sit halfway between the previous two states.
                        bottom-[10.5%]: Adjusted to sit halfway between the previous two states.
                        left-[17%] / right-[17%]: Centers the grid on the walls.
                    */}
                    <div className="absolute top-[31.5%] bottom-[10.5%] left-[17%] right-[17%] z-20">
                        <div className="grid grid-cols-4 gap-2 md:gap-4 h-full w-full">
                            {events.map((event) => (
                                <AdventWindow 
                                    key={event.id} 
                                    event={event} 
                                    onClick={handleWindowClick} 
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* The Floor Image - Sits directly below the house */}
                <img 
                    src={FLOOR_IMAGE_URL} 
                    alt="floor" 
                    className="w-full h-auto relative z-0 -mt-[5%] md:-mt-[4%]" 
                />

            </div>
        </div>

      </main>

      <EventModal event={selectedEvent} onClose={handleCloseModal} />
      
    </div>
  );
};

export default App;