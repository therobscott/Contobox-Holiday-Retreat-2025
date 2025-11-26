import React from 'react';
import { CalendarEvent } from '../types';

interface EventModalProps {
  event: CalendarEvent | null;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden border-t-8 border-wisteria-purple animate-pop-in"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside content
      >
        <div className="p-8">
            {/* Header: Date and Time using Brand Colors */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
                <span className="inline-block px-3 py-1 bg-french-lilac/20 text-wisteria-purple font-bold uppercase tracking-wider text-sm rounded-full">
                    {event.date}
                </span>
                <span className="inline-block px-3 py-1 bg-de-york-green/20 text-data-green font-bold uppercase tracking-wider text-sm rounded-full">
                    {event.time}
                </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl font-bold text-black mb-4 font-sans leading-tight">
                {event.activity}
            </h2>

            {/* Description */}
            <p className="text-xl font-light text-scorpion-gray leading-relaxed">
                {event.description}
            </p>
        </div>

        {/* Footer Actions */}
        <div className="bg-gallery-gray px-8 py-4 flex justify-end">
            <button 
                onClick={onClose}
                className="bg-amber-orange hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg transition-colors duration-200 uppercase tracking-wide text-sm"
            >
                Close
            </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;