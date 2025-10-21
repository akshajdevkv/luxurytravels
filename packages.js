// ===================================
// Travel Packages Data
// ===================================

const travelPackages = [
    {
        id: 1,
        name: "Parisian Luxury Escape",
        tagline: "Experience France in Style",
        duration: {
            days: 7,
            nights: 6,
            label: "1 Week"
        },
        price: {
            from: 150000,
            to: 200000,
            currency: "INR",
            display: "₹1.5 - ₹2 Lakhs"
        },
        destination: "paris",
        destinations: ["Paris", "Versailles"],
        hotel: "4★ - 5★ Hotels",
        image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=800&q=80",
        rating: 4.9,
        reviews: 127,
        badge: "POPULAR",
        highlights: [
            "Round-trip flights from India",
            "6 nights in luxury hotels",
            "Eiffel Tower VIP access",
            "Louvre Museum guided tour",
            "Seine River dinner cruise",
            "Versailles Palace day trip",
            "Daily breakfast included",
            "Airport transfers"
        ],
        included: [
            "✈️ Round-trip flights (India ↔ France)",
            "🏨 4★/5★ hotel accommodations",
            "🚗 Airport & local transfers",
            "🎫 Entry tickets to attractions",
            "👨‍🏫 English-speaking guides",
            "🍳 Daily breakfast",
            "📱 24/7 concierge support",
            "🛂 Visa assistance"
        ],
        excluded: [
            "Lunches and dinners (unless specified)",
            "Personal expenses & shopping",
            "Travel insurance",
            "Visa fees",
            "Tips and gratuities"
        ],
        itinerary: [
            { day: 1, title: "Arrival in Paris", description: "Airport pickup, hotel check-in, evening at leisure" },
            { day: 2, title: "Eiffel Tower & Seine Cruise", description: "VIP Eiffel Tower access, city tour, romantic dinner cruise" },
            { day: 3, title: "Louvre & Champs-Élysées", description: "Guided Louvre tour, shopping at Champs-Élysées" },
            { day: 4, title: "Versailles Palace", description: "Full day trip to Palace of Versailles and gardens" },
            { day: 5, title: "Montmartre & Sacré-Cœur", description: "Explore artistic Montmartre, visit Sacré-Cœur Basilica" },
            { day: 6, title: "Free Day & Shopping", description: "Leisure day for shopping or optional activities" },
            { day: 7, title: "Departure", description: "Hotel checkout, airport transfer" }
        ]
    },
    {
        id: 2,
        name: "Grand France Explorer",
        tagline: "Discover France Completely",
        duration: {
            days: 21,
            nights: 20,
            label: "3 Weeks"
        },
        price: {
            from: 350000,
            to: 420000,
            currency: "INR",
            display: "₹3.5 - ₹4.2 Lakhs"
        },
        destination: "multiple",
        destinations: ["Paris", "Nice", "Monaco", "Lyon", "Loire Valley", "Normandy"],
        hotel: "4★ Premium Hotels",
        image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80",
        rating: 4.8,
        reviews: 89,
        badge: "BEST VALUE",
        highlights: [
            "Round-trip flights included",
            "20 nights across France",
            "Multi-city tour package",
            "French Riviera experience",
            "Loire Valley châteaux tour",
            "Mont Saint-Michel visit",
            "High-speed train journeys",
            "All transfers included"
        ],
        included: [
            "✈️ Round-trip international flights",
            "🏨 20 nights in 4★ hotels",
            "🚄 Inter-city train tickets (TGV)",
            "🚗 All transfers & local transport",
            "🎫 Major attraction entries",
            "👨‍🏫 Local guides in each city",
            "🍳 Daily breakfast + 10 dinners",
            "📱 24/7 travel support",
            "🛂 Complete visa assistance"
        ],
        excluded: [
            "Lunches (except where specified)",
            "Optional activities and tours",
            "Personal expenses",
            "Travel insurance",
            "Visa application fees"
        ],
        itinerary: [
            { day: "1-6", title: "Paris", description: "Comprehensive Paris exploration including Eiffel Tower, Louvre, Versailles, Montmartre" },
            { day: "7-11", title: "French Riviera", description: "Nice, Monaco, Cannes - beaches, luxury, and Mediterranean charm" },
            { day: "12-14", title: "Lyon", description: "Culinary capital, old town, gastronomy experiences" },
            { day: "15-17", title: "Loire Valley", description: "Château tours, wine tasting, countryside beauty" },
            { day: "18-20", title: "Normandy", description: "Mont Saint-Michel, D-Day beaches, historic sites" },
            { day: 21, title: "Departure from Paris", description: "Final shopping, airport transfer" }
        ]
    },
    {
        id: 3,
        name: "Ultimate France Immersion",
        tagline: "Live the French Dream",
        duration: {
            days: 45,
            nights: 44,
            label: "45 Days"
        },
        price: {
            from: 800000,
            to: 1200000,
            currency: "INR",
            display: "₹8 - ₹12 Lakhs"
        },
        destination: "multiple",
        destinations: ["Paris", "French Riviera", "Provence", "Lyon", "Bordeaux", "Loire Valley", "Normandy", "Strasbourg"],
        hotel: "5★ Luxury Hotels",
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
        rating: 5.0,
        reviews: 45,
        badge: "LUXURY",
        highlights: [
            "Premium round-trip flights",
            "44 nights luxury stay",
            "Complete France coverage",
            "Private guided tours",
            "Michelin-star dining",
            "Wine tasting experiences",
            "Provence lavender fields",
            "Exclusive château stays"
        ],
        included: [
            "✈️ Premium economy/Business class flights",
            "🏨 44 nights in 5★ luxury hotels",
            "🚗 Private chauffeur services",
            "🚄 First-class train tickets",
            "🎫 VIP access to all attractions",
            "👨‍🏫 Private English-speaking guides",
            "🍽️ Daily breakfast + 20 gourmet dinners",
            "🍷 Wine tasting experiences",
            "📱 Dedicated travel concierge",
            "🛂 Premium visa assistance",
            "💼 Travel insurance included"
        ],
        excluded: [
            "Lunches (unless specified)",
            "Personal shopping and expenses",
            "Spa and wellness treatments",
            "Optional helicopter tours"
        ],
        itinerary: [
            { day: "1-10", title: "Paris Extended", description: "Deep dive into Parisian culture, hidden gems, luxury shopping, museums, Seine experiences" },
            { day: "11-18", title: "French Riviera Luxury", description: "Nice, Monaco, Cannes, Saint-Tropez - yacht experiences, beaches, coastal luxury" },
            { day: "19-25", title: "Provence & Lavender", description: "Aix-en-Provence, Avignon, lavender fields, wine regions, countryside charm" },
            { day: "26-30", title: "Lyon & Gastronomy", description: "Culinary capital, Michelin dining, market tours, cooking classes" },
            { day: "31-35", title: "Bordeaux Wine Region", description: "Château visits, wine tasting, vineyard tours, Saint-Émilion" },
            { day: "36-39", title: "Loire Valley Châteaux", description: "Castle hopping, royal history, gardens, Renaissance architecture" },
            { day: "40-43", title: "Normandy & Brittany", description: "Mont Saint-Michel, D-Day beaches, historic coastal towns" },
            { day: "44-45", title: "Return to Paris & Departure", description: "Final shopping, farewell dinner, luxury airport transfer" }
        ]
    }
];

