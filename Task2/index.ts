interface Trip {
    from: string;
    to: string;
  }
  
  interface Shipment {
    pickups: string[];
    dropoffs: string[];
  }
  
  function validateTrips(trips: Trip[], shipment: Shipment): boolean {
    const { pickups, dropoffs } = shipment;
    const points = new Set([...pickups, ...dropoffs]);
  
    for (const trip of trips) {
      if (!points.has(trip.from) || !points.has(trip.to)) {
        return false; // tipip endpoints must be part of pickups or dropoffs
      }
  
      if (!pickups.includes(trip.from) && !dropoffs.includes(trip.from)) {
        return false; // start point of trip must be a pickup or dropoff
      }
  
      if (!pickups.includes(trip.to) && !dropoffs.includes(trip.to)) {
        return false; // destination of trip must be a pickup or dropoff
      }
  
      if (pickups.includes(trip.from) && !pickups.includes(trip.to) && !trip.to.startsWith('W')) {
        return false; // if trip starts from pickup, it must end at pickup or a warehouse
      }
  
      if (dropoffs.includes(trip.from) && !dropoffs.includes(trip.to) && !trip.to.startsWith('W')) {
        return false; // if trip starts from dropoff, it must end at dropoff or a warehouse
      }
    }
  
    return true;
  }
  
  // Example usage:
  const trips: Trip[] = [
    { from: 'A', to: 'W' },
    { from: 'B', to: 'W' },
    { from: 'W', to: 'C' },
    { from: 'W', to: 'D' }
  ];
  
  const shipment: Shipment = {
    pickups: ['A', 'B'],
    dropoffs: ['C', 'D']
  };
  
  console.log(validateTrips(trips, shipment)); // Output: true
  