import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  artist: string;
  venue: string;
  location: string;
  date: string;
  time: string;
  price: string;
  priceRange: string;
  image: string;
  category: string;
  popularity: 'high' | 'medium' | 'low';
}

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const getPopularityBadge = () => {
    if (event.popularity === 'high') {
      return (
        <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
          High Demand
        </span>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          {getPopularityBadge()}
        </div>
        <div className="absolute top-3 right-3 bg-white bg-opacity-90 px-2 py-1 rounded text-sm font-semibold text-gray-800">
          {event.category}
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">
            {event.title}
          </h3>
          <p className="text-gray-600 font-medium">{event.artist}</p>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{event.date} • {event.time}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{event.venue}, {event.location}</span>
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div>
            <p className="text-sm text-gray-500">From</p>
            <p className="text-2xl font-bold text-green-600">{event.price}</p>
            <p className="text-xs text-gray-500">{event.priceRange}</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
            View Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;