export interface Route {
  id: string;
  name: string;
  from: string;
  to: string;
  distance: number; // nautical miles
  duration: number; // minutes
  price: number;
  frequency: 'hourly' | 'daily' | 'weekly';
  features: string[];
  popularity: 'low' | 'medium' | 'high';
  image: string;
}

export const routes: Route[] = [
  {
    id: 'route-001',
    name: 'Bay City Express',
    from: 'San Francisco',
    to: 'Oakland',
    distance: 8,
    duration: 25,
    price: 25,
    frequency: 'hourly',
    features: ['Scenic Views', 'WiFi', 'Refreshments'],
    popularity: 'high',
    image: '/images/bay-city-express.jpg'
  },
  {
    id: 'route-002',
    name: 'Coastal Explorer',
    from: 'Monterey',
    to: 'Santa Cruz',
    distance: 25,
    duration: 60,
    price: 45,
    frequency: 'daily',
    features: ['Wildlife Viewing', 'Lunch Service', 'Guided Tour'],
    popularity: 'medium',
    image: '/images/coastal-explorer.jpg'
  },
  {
    id: 'route-003',
    name: 'Island Hopper',
    from: 'Long Beach',
    to: 'Catalina Island',
    distance: 35,
    duration: 90,
    price: 75,
    frequency: 'daily',
    features: ['Island Access', 'Snorkeling Gear', 'Lunch Included'],
    popularity: 'high',
    image: '/images/island-hopper.jpg'
  },
  {
    id: 'route-004',
    name: 'Cargo Express',
    from: 'Los Angeles',
    to: 'San Diego',
    distance: 120,
    duration: 180,
    price: 150,
    frequency: 'weekly',
    features: ['Cargo Transport', 'Tracking System', 'Insurance Included'],
    popularity: 'medium',
    image: '/images/cargo-express.jpg'
  },
  {
    id: 'route-005',
    name: 'Sunset Cruise',
    from: 'Marina del Rey',
    to: 'Malibu',
    distance: 15,
    duration: 45,
    price: 35,
    frequency: 'daily',
    features: ['Sunset Views', 'Wine Tasting', 'Live Music'],
    popularity: 'high',
    image: '/images/sunset-cruise.jpg'
  }
];

export const getPopularRoutes = (): Route[] => {
  return routes.filter(route => route.popularity === 'high');
};

export const getRouteById = (id: string): Route | undefined => {
  return routes.find(route => route.id === id);
};

export const getRoutesByFrequency = (frequency: Route['frequency']): Route[] => {
  return routes.filter(route => route.frequency === frequency);
};

export const searchRoutes = (query: string): Route[] => {
  const lowercaseQuery = query.toLowerCase();
  return routes.filter(route => 
    route.name.toLowerCase().includes(lowercaseQuery) ||
    route.from.toLowerCase().includes(lowercaseQuery) ||
    route.to.toLowerCase().includes(lowercaseQuery)
  );
};
