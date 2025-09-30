import React, { useState } from 'react';
import EventCard from './EventCard';
import EventFilters from './EventFilters';

const EventGrid: React.FC = () => {
  const [sortBy, setSortBy] = useState('date');

  const mockEvents = [
    {
      id: 1,
      title: 'Taylor Swift | The Eras Tour',
      artist: 'Taylor Swift',
      venue: 'MetLife Stadium',
      location: 'East Rutherford, NJ',
      date: 'Sat, May 26',
      time: '7:00 PM',
      price: '$89',
      priceRange: '$89 - $599',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Concerts',
      popularity: 'high' as const,
    },
    {
      id: 2,
      title: 'New York Yankees vs Boston Red Sox',
      artist: 'MLB Regular Season',
      venue: 'Yankee Stadium',
      location: 'Bronx, NY',
      date: 'Sun, May 27',
      time: '1:35 PM',
      price: '$25',
      priceRange: '$25 - $350',
      image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Sports',
      popularity: 'high' as const,
    },
    {
      id: 3,
      title: 'The Lion King',
      artist: 'Broadway Musical',
      venue: 'Minskoff Theatre',
      location: 'New York, NY',
      date: 'Wed, May 30',
      time: '8:00 PM',
      price: '$75',
      priceRange: '$75 - $285',
      image: 'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Theater',
      popularity: 'medium' as const,
    },
    {
      id: 4,
      title: 'Coldplay: Music of the Spheres World Tour',
      artist: 'Coldplay',
      venue: 'Madison Square Garden',
      location: 'New York, NY',
      date: 'Fri, Jun 02',
      time: '8:00 PM',
      price: '$125',
      priceRange: '$125 - $450',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Concerts',
      popularity: 'high' as const,
    },
    {
      id: 5,
      title: 'Kevin Hart: Acting My Age',
      artist: 'Kevin Hart',
      venue: 'Barclays Center',
      location: 'Brooklyn, NY',
      date: 'Sat, Jun 03',
      time: '8:00 PM',
      price: '$55',
      priceRange: '$55 - $199',
      image: 'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Comedy',
      popularity: 'medium' as const,
    },
    {
      id: 6,
      title: 'Brooklyn Nets vs Miami Heat',
      artist: 'NBA Regular Season',
      venue: 'Barclays Center',
      location: 'Brooklyn, NY',
      date: 'Mon, Jun 05',
      time: '7:30 PM',
      price: '$45',
      priceRange: '$45 - $275',
      image: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Sports',
      popularity: 'medium' as const,
    }
  ];

  const [filteredEvents, setFilteredEvents] = useState(mockEvents);

  const handleFilterChange = (filters: any) => {
    let filtered = mockEvents;

    if (filters.category && filters.category !== 'all') {
      filtered = filtered.filter(event => 
        event.category.toLowerCase() === filters.category
      );
    }

    setFilteredEvents(filtered);
  };

  const sortOptions = [
    { value: 'date', label: 'Date' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'popularity', label: 'Popularity' },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular Events</h2>
          
          {/* Filters */}
          <EventFilters onFilterChange={handleFilterChange} />

          {/* Sort and Results Count */}
          <div className="flex justify-between items-center mt-6 mb-6">
            <p className="text-gray-600">
              Showing {filteredEvents.length} events
            </p>
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium text-gray-700">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Load More Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventGrid;