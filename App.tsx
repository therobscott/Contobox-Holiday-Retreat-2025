import React, { useState } from 'react';
import { EVENTS } from './constants';
import { CalendarEvent } from './types';
import AdventWindow from './components/AdventWindow';
import EventModal from './components/EventModal';

// Note: In a real implementation with the provided vector image, 
// we would likely use a specific aspect ratio container and absolute positioning 
// to align the grid perfectly with the facade of the house drawing.
//
// Here, we create a responsive container that centers the grid on the "House".

const App: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [events, setEvents] = useState<CalendarEvent[]>(EVENTS);

  const handleWindowClick = (event: CalendarEvent) => {
    // Mark as open locally for animation state if desired
    // Note: We do NOT set showContent here; that happens after the modal closes.
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
    <div className="min-h-screen bg-picton-blue/10 flex flex-col font-light">
      
      {/* Page Header */}
      <header className="bg-white py-12 px-4 shadow-sm z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-wisteria-purple mb-4 tracking-tight">
                The 2025 Contobox Holiday Retreat
            </h1>
            <p className="text-xl md:text-2xl text-scorpion-gray mb-6">
                We’re going to go on a retreat to boldly bond where no one has bonded before.
            </p>
            <div className="inline-block bg-amber-orange text-black font-bold px-6 py-2 rounded-full text-sm uppercase tracking-widest shadow-sm animate-bounce">
                Click a window to reveal an activity
            </div>
        </div>
      </header>

      {/* Main Content Area - The House */}
      <main className="flex-grow relative flex justify-center items-end pb-0 overflow-hidden bg-gradient-to-b from-sky-200 to-white">
        
        {/* Snow effect at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-white z-0 rounded-t-[50%] scale-x-150 translate-y-16"></div>

        {/* House Container */}
        {/* We use a max-width to simulate the house boundaries */}
        <div className="relative w-full max-w-2xl mx-auto z-10 px-4 mb-8">
            
            {/* The House Visual Representation */}
            {/* Since we can't load the user's specific image file directly in this environment, 
                we build a CSS representation that resembles the "Log Cabin" described, 
                overlaid with the grid.
                
                USER INSTRUCTION: To use your specific image:
                1. Remove the 'bg-amber-700' and pattern classes below.
                2. Add `style={{ backgroundImage: 'url(./path-to-your-image.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}`
            */}
            <div className="relative w-full aspect-[4/5] md:aspect-[3/4] flex flex-col items-center justify-end shadow-2xl rounded-t-3xl overflow-hidden bg-[#8B5A2B]">
                
                {/* Roof Visual (CSS approximation of the house provided) */}
                 <div className="absolute top-0 left-0 right-0 h-1/6 bg-white z-20 transform -translate-y-1/2 rounded-b-full shadow-lg border-b-8 border-[#5d3a1a]"></div>
                
                 {/* Siding Texture (Horizontal Lines) */}
                 <div className="absolute inset-0 opacity-20 pointer-events-none" 
                      style={{ backgroundImage: 'linear-gradient(to bottom, #3e2723 2px, transparent 2px)', backgroundSize: '100% 4%' }}>
                 </div>
                 
                 {/* Chimney */}
                 <div className="absolute top-12 left-8 w-16 h-24 bg-[#6d4c41] border-4 border-[#3e2723] z-0"></div>

                 {/* The Window Grid - Centered on the facade */}
                 <div className="relative z-30 w-full h-full p-8 pt-24 pb-12 flex flex-col justify-end">
                    <div className="grid grid-cols-4 gap-3 md:gap-6 h-[80%]">
                        {events.map((event) => (
                            <AdventWindow 
                                key={event.id} 
                                event={event} 
                                onClick={handleWindowClick} 
                            />
                        ))}
                    </div>
                 </div>

                 {/* Snow ground integration */}
                 <div className="absolute bottom-0 w-full h-4 bg-white/80 blur-md"></div>
            </div>
        </div>

      </main>

      <EventModal event={selectedEvent} onClose={handleCloseModal} />
      
    </div>
  );
};

export default App;