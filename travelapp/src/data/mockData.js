export const currentTrip = {
  id: '1',
  title: 'Tokyo Adventure',
  location: 'Tokyo, Japan',
  dates: 'Dec 15 - Dec 22',
  participants: 2,
  budget: {
    spent: 1250,
    total: 3000,
    percentage: 41.7
  },
  status: 'upcoming',
  image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop'
};

export const pastTrips = [
  {
    id: '2',
    title: 'Paris Romance',
    location: 'Paris, France',
    dates: 'Sep 10 - Sep 17',
    participants: 2,
    budget: {
      spent: 2350,
      total: 2500,
      percentage: 94
    },
    status: 'completed',
    image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=300&fit=crop'
  }
];

export const recentActivity = [
  {
    id: '1',
    type: 'info',
    message: 'Tokyo Trip planned for next month',
    color: '#3b82f6'
  },
  {
    id: '2',
    type: 'success',
    message: '5 photos added to Paris adventure',
    color: '#10b981'
  },
  {
    id: '3',
    type: 'expense',
    message: '$125 spent on dining in Rome',
    color: '#f59e0b'
  }
];

export const budgetData = {
  total: 3000,
  spent: 1570,
  remaining: 1430,
  percentage: 52.3,
  categories: [
    { name: 'Transportation', amount: 650, color: '#3b82f6' },
    { name: 'Accommodation', amount: 800, color: '#8b5cf6' },
    { name: 'Food', amount: 120, color: '#f59e0b' }
  ]
};

export const recentExpenses = [
  {
    id: '1',
    title: 'Dinner at Le Comptoir',
    amount: 120,
    category: 'Food',
    date: '9/12/2024',
    description: 'Amazing French cuisine',
    color: '#f59e0b'
  },
  {
    id: '2',
    title: 'Hotel Le Marais',
    amount: 800,
    category: 'Accommodation',
    date: '9/10/2024',
    description: '3 nights stay',
    color: '#8b5cf6'
  }
];

export const itineraryData = [
  {
    date: 'Tuesday, Sep 10',
    events: [
      {
        id: '1',
        title: 'Arrival at CDG Airport',
        time: '14:30',
        location: 'Charles de Gaulle Airport',
        type: 'flight',
        description: 'Flight AF 1234 from NYC',
        completed: true,
        color: '#1f2937'
      },
      {
        id: '2',
        title: 'Check in at Hotel',
        time: '16:00',
        location: 'Hotel Le Marais',
        type: 'accommodation',
        description: '3 nights stay',
        completed: true,
        color: '#10b981'
      }
    ]
  },
  {
    date: 'Wednesday, Sep 11',
    events: [
      {
        id: '3',
        title: 'Visit Eiffel Tower',
        time: '10:00',
        location: 'Champ de Mars',
        type: 'activity',
        description: 'Take the elevator to the top',
        completed: true,
        color: '#1f2937'
      },
      {
        id: '4',
        title: 'Lunch at Café de Flore',
        time: '13:00',
        location: 'Saint-Germain-des-Prés',
        type: 'meal',
        description: 'Traditional French cuisine',
        completed: true,
        color: '#1f2937'
      }
    ]
  }
];

export const travelStats = {
  totalTrips: 2,
  totalSpent: 3600
};
