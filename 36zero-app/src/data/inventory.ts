export interface Vessel {
  id: string;
  name: string;
  type: 'passenger' | 'cargo' | 'hybrid';
  capacity: number;
  range: number; // nautical miles
  speed: number; // knots
  status: 'available' | 'in-service' | 'maintenance';
  image: string;
  features: string[];
  pricePerHour: number;
}

export const vessels: Vessel[] = [
  {
    id: 'vessel-001',
    name: 'Ocean Explorer',
    type: 'passenger',
    capacity: 50,
    range: 200,
    speed: 25,
    status: 'available',
    image: '/images/ocean-explorer.jpg',
    features: ['Solar Panels', 'Battery Backup', 'WiFi', 'Climate Control'],
    pricePerHour: 150
  },
  {
    id: 'vessel-002',
    name: 'Cargo Master',
    type: 'cargo',
    capacity: 100,
    range: 300,
    speed: 20,
    status: 'available',
    image: '/images/cargo-master.jpg',
    features: ['Heavy Duty', 'Cargo Crane', 'GPS Navigation', 'Weather Monitoring'],
    pricePerHour: 200
  },
  {
    id: 'vessel-003',
    name: 'Eco Cruiser',
    type: 'passenger',
    capacity: 30,
    range: 150,
    speed: 30,
    status: 'in-service',
    image: '/images/eco-cruiser.jpg',
    features: ['Luxury Interior', 'Solar Charging', 'Entertainment System', 'Bar Service'],
    pricePerHour: 250
  },
  {
    id: 'vessel-004',
    name: 'Hybrid Hauler',
    type: 'hybrid',
    capacity: 75,
    range: 400,
    speed: 22,
    status: 'maintenance',
    image: '/images/hybrid-hauler.jpg',
    features: ['Dual Power', 'Extended Range', 'Cargo Space', 'Eco Mode'],
    pricePerHour: 180
  }
];

export const getAvailableVessels = (): Vessel[] => {
  return vessels.filter(vessel => vessel.status === 'available');
};

export const getVesselById = (id: string): Vessel | undefined => {
  return vessels.find(vessel => vessel.id === id);
};

export const filterVesselsByType = (type: Vessel['type']): Vessel[] => {
  return vessels.filter(vessel => vessel.type === type);
};
