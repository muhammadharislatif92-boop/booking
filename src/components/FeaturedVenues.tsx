import React from 'react';
import { MapPin, Star } from 'lucide-react';

const FeaturedVenues: React.FC = () => {
  const venues = [
    {
      id: 1,
      name: 'Madison Square Garden',
      location: 'New York, NY',
      image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: 4.8,
      upcomingEvents: 24,
    },
    {
      id: 2,
      name: 'Staples Center',
      location: 'Los Angeles, CA',
      image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: 4.7,
      upcomingEvents: 18,
    },
    {
      id: 3,
      name: 'United Center',
      location: 'Chicago, IL',
      image: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: 4.6,
      upcomingEvents: 16,
    },
    {
      id: 4,
      name: 'American Airlines Arena',
      location: 'Miami, FL',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: 4.5,
      upcomingEvents: 12,
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Venues
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the most popular venues and arenas across the country
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {venues.map((venue) => (
            <div
              key={venue.id}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-200"
            >
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white bg-opacity-90 px-2 py-1 rounded-lg flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-gray-800">
                      {venue.rating}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {venue.name}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{venue.location}</span>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">
                      {venue.upcomingEvents} upcoming events
                    </span>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors duration-200">
                      View Events
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVenues;