const sampleListings = [
  // Category - Beach
  {
    title: "Beachfront Bungalow",
    description: "Experience island life in this traditional bungalow. Enjoy stunning ocean views, fresh seafood, and local culture.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/28256589/pexels-photo-28256589/free-photo-of-boats-in-the-side-of-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1200,
    location: "Boracay",
    country: "Philippines",
    category: "Beach"
  },
  {
    title: "Charming Beach Cottage",
    description: "Unwind in this cozy cottage with a private beach. Perfect for a romantic getaway or a family vacation.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1800,
    location: "Santorini",
    country: "Greece",
    category: "Beach"
  },
  {
    title: "Luxury Beachfront Resort",
    description: "Indulge in ultimate luxury at this beachfront resort. Enjoy world-class dining, spa treatments, and water sports.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/2598663/pexels-photo-2598663.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 4000,
    location: "Cancun",
    country: "Mexico",
    category: "Beach"
  },
  {
    title: "Secluded Beachfront Villa",
    description: "Experience ultimate luxury in this private villa with direct beach access. Enjoy panoramic ocean views and world-class amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 3000,
    location: "Maldives",
    country: "Maldives",
    category: "Beach"
  },
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",   
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/3404541/pexels-photo-3404541.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "Beach"
  },
  {
    title: "Modern Beachfront Apartment",
    description: "Stay in this stylish and modern apartment with breathtaking ocean views. Enjoy nearby restaurants, shops, and nightlife.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/3773651/pexels-photo-3773651.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2000,
    location: "Miami Beach",
    country: "United States",
    category: "Beach"
  },
  {
    title: "Tropical Beach House",
    description: "Relax in this tropical paradise with a private pool and lush gardens. Enjoy water sports, sunbathing, and island hopping.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/982673/pexels-photo-982673.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2500,
    location: "Bali",
    country: "Indonesia",
    category: "Beach"
  },
  {
    title: "Surf Shack",
    description: "Catch the perfect wave from this beachfront shack. Enjoy surfing, sunbathing, and bonfires on the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/6775244/pexels-photo-6775244.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1000,
    location: "Byron Bay",
    country: "Australia",
    category: "Beach"
  },
  {
    title: "Coastal Villa in Phuket",
    description: "Luxurious villa with private pool and stunning sea views. Perfect for families or groups.",
    
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/2867732/pexels-photo-2867732.jpeg?auto=compress&cs=tinysrgb&w=600"
    },price: 3500,
    location: "Phuket",
    country: "Thailand",
    category: "Beach"
  },
  {
    title: "Beachfront Apartment in Barcelona",
    description: "Modern apartment with balcony overlooking the Mediterranean Sea. Enjoy the vibrant city life and beautiful beaches.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/1874675/pexels-photo-1874675.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2200,
    location: "Barcelona",
    country: "Spain",
    category: "Beach"
  },
  {
    title: "Tropical Beach House in Fiji",
    description: "Relax in a secluded beachfront house with lush gardens and crystal-clear waters. Ideal for a romantic getaway.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/26087994/pexels-photo-26087994/free-photo-of-beautiful-beach-scenery-with-wedding-arch-located-in-fiji.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2800,
    location: "Fiji",
    country: "Fiji",
    category: "Beach"
  },
  {
    title: "Oceanfront Condo in Honolulu",
    description: "Spacious condo with stunning ocean views and access to resort amenities. Perfect for a fun-filled vacation.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/4319749/pexels-photo-4319749.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2500,
    location: "Honolulu",
    country: "United States",
    category: "Beach"
  },
  // Category - Mountain
  {
    title: "Charming Cottage in the Cotswolds",
    description: "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",   
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/29175909/pexels-photo-29175909/free-photo-of-scenic-train-journey-through-lush-green-forest.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "Mountain"
  },
  {
    title: "Rustic Chalet in the Swiss Alps",
    description: "Cozy chalet with stunning mountain views, perfect for skiing and hiking.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/3958976/pexels-photo-3958976.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2500,
    location: "Swiss Alps",
    country: "Switzerland",
    category: "Mountain"
  },
  {
    title: "Mountain Lodge in Colorado",
    description: "Spacious mountain lodge with breathtaking views of the Rocky Mountains.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/15077006/pexels-photo-15077006/free-photo-of-majestic-snowcapped-mountains.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1800,
    location: "Colorado Rockies",
    country: "United States",
    category: "Mountain"
  },
  {
    title: "Alpine Cabin in the French Alps",
    description: "Charming cabin with a fireplace and panoramic mountain views.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/2926525/pexels-photo-2926525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    price: 1500,
    location: "French Alps",
    country: "France",
    category: "Mountain"
  },
  {
    title: "Mountain Villa in Tuscany",
    description: "Luxurious villa with stunning views of the Tuscan hills.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/7265187/pexels-photo-7265187.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 3000,
    location: "Tuscany",
    country: "Italy",
    category: "Mountain"
  },
  {
    title: "Mountain Retreat in Norway",
    description: "Cozy cabin with a fireplace and stunning fjord views.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/29177407/pexels-photo-29177407/free-photo-of-scenic-mountain-landscape-in-napp-norway.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1800,
    location: "Norway",
    country: "Norway",
    category: "Mountain"
  },
  {
    title: "Mountain Lodge in Banff National Park",
    description: "Spacious lodge with stunning views of the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/1592461/pexels-photo-1592461.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2200,
    location: "Banff National Park",
    country: "Canada",
    category: "Mountain"
  },
  {
    title: "Mountain Cabin in the Austrian Alps",
    description: "Traditional alpine cabin with a cozy fireplace and breathtaking mountain views.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/753312/pexels-photo-753312.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1600,
    location: "Austrian Alps",
    country: "Austria",
    category: "Mountain"
  },
  {
    title: "Mountain Retreat in Japan",
    description: "Serene retreat with traditional Japanese architecture and stunning mountain views.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/3596102/pexels-photo-3596102.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2000,
    location: "Japanese Alps",
    country: "Japan",
    category: "Mountain"
  },
  {
    title: "Mountain Villa in Chile",
    description: "Luxurious villa with panoramic views of the Andes Mountains.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/23886059/pexels-photo-23886059/free-photo-of-clouds-covering-snowcapped-mountain-peaks-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2800,
    location: "Chilean Andes",
    country: "Chile",
    category: "Mountain"
  },
  {
    title: "Mountain Lodge in New Zealand",
    description: "Cozy lodge with stunning views of the Southern Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/4195487/pexels-photo-4195487.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1800,
    location: "New Zealand Alps",
    country: "New Zealand",
    category: "Mountain"
  },
  {
    title: "Mountain Retreat in Nepal",
    description: "Serene retreat with breathtaking views of the Himalayas.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/29150722/pexels-photo-29150722/free-photo-of-snow-capped-peaks-in-sissu-himachal-pradesh.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2500,
    location: "Himalayas",
    country: "Nepal",
    category: "Mountain"
  },

  // Category - Cultural
  {
    title: "Ancient Temples of Angkor Wat",
    description: "Explore the magnificent temples of Angkor Wat, a UNESCO World Heritage Site.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/2495575/pexels-photo-2495575.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1500,
    location: "Angkor Wat",
    country: "Cambodia",
    category: "Cultural"
  },
  {
    title: "Historic City of Kyoto",
    description: "Discover the traditional culture and stunning temples of Kyoto.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1800,
    location: "Kyoto",
    country: "Japan",
    category: "Cultural"
  },
  {
    title: "Roman Ruins of Rome",
    description: "Explore the ancient ruins of the Roman Empire, including the Colosseum and Roman Forum.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/4846238/pexels-photo-4846238.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2200,
    location: "Rome",
    country: "Italy",
    category: "Cultural"
  },
  {
    title: "Taj Mahal, India",
    description: "Admire the stunning beauty of the Taj Mahal, a symbol of love and one of the Seven Wonders of the World.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1800,
    location: "Taj Mahal",
    country: "India",
    category: "Cultural"
  },
  {
    title: "Great Wall of China",
    description: "Hike along the Great Wall of China, one of the world's most impressive engineering feats.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/3262994/pexels-photo-3262994.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2000,
    location: "Great Wall of China",
    country: "China",
    category: "Cultural"
  },
  {
    title: "Machu Picchu, Peru",
    description: "Explore the ancient Inca citadel of Machu Picchu, a UNESCO World Heritage Site.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/2929906/pexels-photo-2929906.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2500,
    location: "Machu Picchu",
    country: "Peru",
    category: "Cultural"
  },
  {
    title: "The Pyramids of Giza, Egypt",
    description: "Marvel at the ancient Pyramids of Giza, one of the Seven Wonders of the World.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/3958516/pexels-photo-3958516.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2000,
    location: "Giza",
    country: "Egypt",
    category: "Cultural"
  },
  {
    title: "The Forbidden City, China",
    description: "Explore the former imperial palace of the Ming and Qing dynasties.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/10210659/pexels-photo-10210659.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1800,
    location: "Forbidden City",
    country: "China",
    category: "Cultural"
  },
  {
    title: "The Acropolis, Greece",
    description: "Visit the ancient citadel of Athens, including the Parthenon and other historic sites.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/772689/pexels-photo-772689.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1500,
    location: "Acropolis",
    country: "Greece",
    category: "Cultural"
  },
  {
    title: "Chichen Itza, Mexico",
    description: "Explore the ancient Mayan city of Chichen Itza, one of the New Seven Wonders of the World.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/3591074/pexels-photo-3591074.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1800,
    location: "Chichen Itza",
    country: "Mexico",
    category: "Cultural"
  },
  {
    title: "Petra, Jordan",
    description: "Discover the ancient city of Petra, carved into the rock face.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/1631665/pexels-photo-1631665.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2200,
    location: "Petra",
    country: "Jordan",
    category: "Cultural"
  },
  {
    title: "The Colosseum, Rome",
    description: "Visit the iconic Colosseum, a symbol of ancient Roman power and engineering.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1800,
    location: "Rome",
    country: "Italy",
    category: "Cultural"
  },
  // Category - Desert
  {
    title: "Sahara Desert Adventure",
    description: "Embark on a thrilling desert safari, ride a camel, and camp under the stars.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/1703312/pexels-photo-1703312.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1500,
    location: "Sahara Desert",
    country: "Morocco",
    category: "Desert"
  },
  {
    title: "Wadi Rum Desert Experience",
    description: "Explore the stunning landscapes of Wadi Rum, a UNESCO World Heritage Site.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/29124832/pexels-photo-29124832/free-photo-of-natural-rock-arch-in-wadi-rum-desert-jordan.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1800,
    location: "Wadi Rum",
    country: "Jordan",
    category: "Desert"
  },
  {
    title: "Arabian Desert Safari",
    description: "Experience the thrill of dune bashing, camel riding, and Bedouin culture.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/26926254/pexels-photo-26926254/free-photo-of-desert-and-dubai-cityscape-with-burj-khalifa-behind.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2000,
    location: "Dubai Desert",
    country: "United Arab Emirates",
    category: "Desert"
  },
  {
    title: "Atacama Desert Stargazing",
    description: "Witness the breathtaking night sky in one of the world's clearest stargazing destinations.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/29176041/pexels-photo-29176041/free-photo-of-majestic-mountain-landscape-of-atacama-desert.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2500,
    location: "Atacama Desert",
    country: "Chile",
    category: "Desert"
  },
  {
    title: "Namib Desert Adventure",
    description: "Explore the otherworldly landscapes of the Namib Desert, including the Sossusvlei dunes.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/26926254/pexels-photo-26926254/free-photo-of-desert-and-dubai-cityscape-with-burj-khalifa-behind.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2200,
    location: "Namib Desert",
    country: "Namibia",
    category: "Desert"
  },
  {
    title: "Mojave Desert National Park",
    description: "Hike through stunning desert landscapes, spot wildlife, and visit historic sites.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/73820/joshua-tree-national-park-mojave-desert-rocks-landscape-73820.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1800,
    location: "Mojave Desert",
    country: "United States",
    category: "Desert"
  },
  {
    title: "Gobi Desert Exploration",
    description: "Discover the vast and ancient Gobi Desert, home to unique wildlife and cultural sites.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/5275365/pexels-photo-5275365.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2500,
    location: "Gobi Desert",
    country: "Mongolia",
    category: "Desert"
  },
  {
    title: "Great Victoria Desert Adventure",
    description: "Explore the vast and remote Great Victoria Desert, one of Australia's largest deserts.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/9487817/pexels-photo-9487817.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2000,
    location: "Great Victoria Desert",
    country: "Australia",
    category: "Desert"
  },
  {
    title: "Kalahari Desert Safari",
    description: "Experience the wildlife and culture of the Kalahari Desert, one of Africa's largest deserts.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/8345087/pexels-photo-8345087.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1800,
    location: "Kalahari Desert",
    country: "Botswana",
    category: "Desert"
  },
  {
    title: "Sonoran Desert Hiking",
    description: "Hike through the stunning landscapes of the Sonoran Desert, home to diverse wildlife and unique plant life.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/764998/pexels-photo-764998.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1500,
    location: "Sonoran Desert",
    country: "United States",
    category: "Desert"
  },
  {
    title: "Patagonia Desert Adventure",
    description: "Explore the rugged beauty of the Patagonian Desert, with its dramatic landscapes and unique wildlife.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/4596500/pexels-photo-4596500.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2200,
    location: "Patagonian Desert",
    country: "Argentina",
    category: "Desert"
  },
  {
    title: "Great Basin Desert Exploration",
    description: "Discover the unique ecosystems and geological formations of the Great Basin Desert.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/23886066/pexels-photo-23886066/free-photo-of-mountains-in-the-atacama-desert-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1800,
    location: "Great Basin Desert",
    country: "United States",
    category: "Desert"
  },
  // Category - Forest
  {
    title: "Amazon Rainforest Adventure",
    description: "Explore the world's largest rainforest, home to diverse wildlife and ancient cultures.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/325807/pexels-photo-325807.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2500,
    location: "Amazon Rainforest",
    country: "Brazil",
    category: "Forest"
  },
  {
    title: "Rainforest Canopy Walkway",
    description: "Experience the rainforest from above on a canopy walkway, offering stunning views of the jungle.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/19894981/pexels-photo-19894981/free-photo-of-monteverde-costa-rica.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1500,
    location: "Daintree Rainforest",
    country: "Australia",
    category: "Forest"
  },
  {
    title: "Boreal Forest Trekking",
    description: "Hike through the vast boreal forests of Canada, home to diverse wildlife and stunning landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/27244532/pexels-photo-27244532/free-photo-of-alaskan-kenai-river.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1800,
    location: "Boreal Forest",
    country: "Canada",
    category: "Forest"
  },
  {
    title: "Tropical Rainforest Eco-Tour",
    description: "Discover the biodiversity of a tropical rainforest, learning about its unique ecosystems and wildlife.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/19561037/pexels-photo-19561037/free-photo-of-frog-on-branch.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1200,
    location: "Costa Rica Rainforest",
    country: "Costa Rica",
    category: "Forest"
  },
  {
    title: "Redwood Forest Hiking",
    description: "Hike through the towering redwoods, the tallest trees on Earth, in California's Redwood National Park.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/14098450/pexels-photo-14098450.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1500,
    location: "Redwood National Park",
    country: "United States",
    category: "Forest"
  },
  {
    title: "Taiga Forest Adventure",
    description: "Explore the vast taiga forests of Siberia, home to diverse wildlife and stunning winter landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/4275482/pexels-photo-4275482.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2000,
    location: "Siberian Taiga",
    country: "Russia",
    category: "Forest"
  },
  {
    title: "Amazon River Cruise",
    description: "Cruise down the Amazon River, encountering diverse wildlife and indigenous cultures.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2500,
    location: "Amazon River",
    country: "Brazil",
    category: "Forest"
  },
  {
    title: "Rainforest Canopy Walkway",
    description: "Experience the rainforest from above on a canopy walkway, offering stunning views of the jungle.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/28518408/pexels-photo-28518408/free-photo-of-sloth-resting-in-heredia-costa-rica-habitat.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1500,
    location: "Daintree Rainforest",
    country: "Australia",
    category: "Forest"
  },
  {
    title: "Boreal Forest Trekking",
    description: "Hike through the vast boreal forests of Canada, home to diverse wildlife and stunning landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/28896654/pexels-photo-28896654/free-photo-of-sunlit-pine-forest-in-early-morning.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1800,
    location: "Boreal Forest",
    country: "Canada",
    category: "Forest"
  },
  {
    title: "Tropical Rainforest Eco-Tour",
    description: "Discover the biodiversity of a tropical rainforest, learning about its unique ecosystems and wildlife.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/19894975/pexels-photo-19894975/free-photo-of-hongos-de-repisa-monteverde.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1200,
    location: "Costa Rica Rainforest",
    country: "Costa Rica",
    category: "Forest"
  },
  {
    title: "Redwood Forest Hiking",
    description: "Hike through the towering redwoods, the tallest trees on Earth, in California's Redwood National Park.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/5614617/pexels-photo-5614617.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1500,
    location: "Redwood National Park",
    country: "United States",
    category: "Forest"
  },
  {
    title: "Taiga Forest Adventure",
    description: "Explore the vast taiga forests of Siberia, home to diverse wildlife and stunning winter landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/12400632/pexels-photo-12400632.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2000,
    location: "Siberian Taiga",
    country: "Russia",
    category: "Forest"
  },
  // Category - City
  {
    title: "New York City Experience",
    description: "Explore the vibrant city of New York, with its iconic landmarks and diverse culture.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2000,
    location: "New York City",
    country: "United States",
    category: "City"
  },
  {
    title: "Parisian Romance",
    description: "Indulge in the romance of Paris, with its iconic landmarks, art, and cuisine.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2200,
    location: "Paris",
    country: "France",
    category: "City"
  },
  {
    title: "Tokyo Adventure",
    description: "Experience the futuristic city of Tokyo, with its bustling streets, ancient temples, and cutting-edge technology.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/1510610/pexels-photo-1510610.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2500,
    location: "Tokyo",
    country: "Japan",
    category: "City"
  },
  {
    title: "London Cultural Experience",
    description: "Explore the historic city of London, with its iconic landmarks, museums, and vibrant culture.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/3621808/pexels-photo-3621808.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1800,
    location: "London",
    country: "United Kingdom",
    category: "City"
  },
  {
    title: "Roman Holiday",
    description: "Discover the ancient city of Rome, with its iconic landmarks, historical sites, and delicious cuisine.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2000,
    location: "Rome",
    country: "Italy",
    category: "City"
  },
  {
    title: "Dubai Luxury Experience",
    description: "Indulge in luxury in Dubai, with its stunning skyscrapers, world-class shopping, and vibrant nightlife.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/1534411/pexels-photo-1534411.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 3000,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "City"
  },
  {
    title: "Sydney Harbor Experience",
    description: "Explore the stunning harbor city of Sydney, with its iconic Opera House and Harbour Bridge.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2200,
    location: "Sydney",
    country: "Australia",
    category: "City"
  },
  {
    title: "Barcelona City Break",
    description: "Discover the vibrant city of Barcelona, with its stunning architecture, delicious cuisine, and beautiful beaches.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/6642494/pexels-photo-6642494.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1800,
    location: "Barcelona",
    country: "Spain",
    category: "City"
  },
  {
    title: "Singapore City Tour",
    description: "Explore the futuristic city of Singapore, with its stunning skyline, diverse culture, and delicious food.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2000,
    location: "Singapore",
    country: "Singapore",
    category: "City"
  },
  {
    title: "Hong Kong Adventure",
    description: "Experience the vibrant city of Hong Kong, with its stunning skyline, bustling markets, and delicious food.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/2300342/pexels-photo-2300342.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2200,
    location: "Hong Kong",
    country: "Hong Kong",
    category: "City"
  },
  {
    title: "Amsterdam Canal Cruise",
    description: "Explore the beautiful canals of Amsterdam, with its charming houses, art galleries, and museums.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/16461595/pexels-photo-16461595/free-photo-of-tour-boat-on-canal-in-amsterdam.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    category: "City"
  },
  {
    title: "Berlin City Tour",
    description: "Discover the historic city of Berlin, with its iconic landmarks, museums, and vibrant culture.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/1128424/pexels-photo-1128424.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1500,
    location: "Berlin",
    country: "Germany",
    category: "City"
  }
];

module.exports = { data: sampleListings };