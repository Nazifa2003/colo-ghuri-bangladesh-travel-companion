
const destinations = [
  {
    id: 1,
    name: "Cox's Bazar",
    location: "Chattogram",
    category: "Beach",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
    description: "Enjoy the sea, golden sand and beautiful coastal scenery.",
    nearby: [
      {
        name: "Himchari National Park",
        distance: "About 12–15 km",
        description: "Green hills, natural scenery and a waterfall."
      },
      {
        name: "Inani Beach",
        distance: "About 25–30 km",
        description: "A scenic beach known for rocky formations and sea views."
      }
    ]
  },
  {
    id: 2,
    name: "Sajek Valley",
    location: "Rangamati",
    category: "Mountain",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    description: "Discover misty hills, clouds and peaceful mountain views.",
    nearby: [
      {
        name: "Konglak Hill",
        distance: "About 2–4 km",
        description: "A popular viewpoint with beautiful hill scenery."
      },
      {
        name: "Ruilui Para",
        distance: "Within Sajek",
        description: "Explore local village life and the surrounding hills."
      }
    ]
  },
  {
    id: 3,
    name: "Jaflong",
    location: "Sylhet",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
    description: "Enjoy river views, green hills and the beauty of nature.",
    nearby: [
      {
        name: "Tamabil",
        distance: "About 5–10 km",
        description: "A scenic area near the Bangladesh–India border."
      },
      {
        name: "Lalakhal",
        distance: "About 20–30 km",
        description: "Known for its beautiful river and green surroundings."
      }
    ]
  },
  {
    id: 4,
    name: "Sundarbans",
    location: "Khulna",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
    description: "Explore mangrove forests and a remarkable natural ecosystem.",
    nearby: [
      {
        name: "Karamjal",
        distance: "Route-dependent",
        description: "A popular forest visit area with wildlife facilities."
      },
      {
        name: "Harbaria",
        distance: "Route-dependent",
        description: "Explore mangrove scenery along designated forest trails."
      }
    ]
  },
  {
    id: 5,
    name: "Bandarban",
    location: "Chattogram Division",
    category: "Mountain",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    description: "Experience green mountains, peaceful valleys and scenic viewpoints.",
    nearby: [
      {
        name: "Nilachal",
        distance: "About 5–7 km",
        description: "A well-known viewpoint overlooking the surrounding hills."
      },
      {
        name: "Meghla Tourist Complex",
        distance: "About 4–6 km",
        description: "A popular scenic area with hills and a lake."
      }
    ]
  },
  {
    id: 6,
    name: "Rangamati",
    location: "Chattogram Division",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    description: "Relax beside Kaptai Lake and enjoy the green landscape.",
    nearby: [
      {
        name: "Hanging Bridge",
        distance: "About 5–7 km",
        description: "A famous bridge surrounded by lake scenery."
      },
      {
        name: "Kaptai Lake",
        distance: "In the Rangamati area",
        description: "Enjoy the lake views and boat trips."
      }
    ]
  },
  {
    id: 7,
    name: "Saint Martin's Island",
    location: "Cox's Bazar District",
    category: "Beach",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80",
    description: "Discover island scenery, blue water and sandy beaches.",
    nearby: [
      {
        name: "Cheradwip",
        distance: "Several km; access varies",
        description: "A small island area known for coastal scenery."
      }
    ]
  },
  {
    id: 8,
    name: "Paharpur",
    location: "Naogaon",
    category: "Heritage",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80",
    description: "Discover an important archaeological site and ancient Buddhist heritage.",
    nearby: [
      {
        name: "Somapura Mahavihara",
        distance: "At Paharpur",
        description: "The famous ancient Buddhist monastery and UNESCO World Heritage Site."
      }
    ]
  }
];
// receive HTML elements
const destinationContainer =
  document.getElementById("destinationContainer");
const favouriteContainer =
  document.getElementById("favouriteContainer");
const categoryFilters =
  document.getElementById("categoryFilters");
const searchForm =
  document.getElementById("searchForm");
const searchInput =
  document.getElementById("searchInput");
// Store current states
let selectedCategory = "All";
let searchText = "";
let favourites = [];
// Create category buttons
function renderCategories() {
  const categories = [
    "All",
    "Beach",
    "Mountain",
    "Nature",
    "Heritage"
  ];
  categoryFilters.innerHTML = categories.map(category => `
    <button
      class="category-btn rounded-full px-5 py-2 border text-sm font-semibold
      ${selectedCategory === category
        ? "bg-[#176B55] text-white border-[#176B55]"
        : "bg-white text-[#35574C] border-gray-200"}"
      data-category="${category}">
      ${category}
    </button>
  `).join("");
}
// Create destination cards
function createCard(place) {
  const isFavourite = favourites.includes(place.id);
  return `
    <article class="bg-white rounded-2xl overflow-hidden border
      border-gray-100 shadow-sm hover:shadow-lg transition">
      <img
        src="${place.image}"
        alt="${place.name}"
        loading="lazy"
        class="w-full h-56 object-cover"
      >
      <div class="p-5">
        <p class="text-sm text-orange-600 mb-2">
          📍 ${place.location}
        </p>
        <div class="flex justify-between items-start gap-3">
          <h3 class="text-xl font-bold mb-3">
            ${place.name}
          </h3>
          <button
            class="favourite-btn text-2xl"
            data-favourite="${place.id}"
            aria-label="Toggle favourite for ${place.name}">
            ${isFavourite ? "❤️" : "♡"}
          </button>
        </div>
        <p class="text-sm text-gray-500 leading-6">
          ${place.description}
        </p>
        <div class="flex justify-between items-center mt-5 gap-3">
          <span class="text-xs bg-green-50 text-green-800
            rounded-full px-3 py-2">
            ${place.category}
          </span>
          <button
            data-details="${place.id}"
            class="bg-[#176B55] hover:bg-[#105440] text-white
              rounded-lg px-4 py-2 text-sm font-semibold">
            View Details →
          </button>
        </div>
      </div>
    </article>
  `;
}
// Search and filter destinations
function renderDestinations() {
  const filteredPlaces = destinations.filter(place => {
    const matchesCategory =
      selectedCategory === "All" ||
      place.category === selectedCategory;
    const textToSearch = (
      place.name + " " +
      place.location + " " +
      place.description + " " +
      place.category
    ).toLowerCase();
    const matchesSearch =
      textToSearch.includes(searchText.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  if (filteredPlaces.length === 0) {
    destinationContainer.innerHTML = `
      <p class="col-span-full text-center text-gray-500 py-10">
        No destinations found. Try another search!
      </p>
    `;
    return;
  }
  destinationContainer.innerHTML =
    filteredPlaces.map(createCard).join("");
}
// Show favourite places
function renderFavourites() {
  const favouritePlaces = destinations.filter(place =>
    favourites.includes(place.id)
  );
  if (favouritePlaces.length === 0) {
    favouriteContainer.innerHTML = `
      <p class="col-span-full text-center text-gray-500 py-8">
        No favourites yet. Tap ♡ on a destination to save it!
      </p>
    `;
    return;
  }
  favouriteContainer.innerHTML =
    favouritePlaces.map(createCard).join("");
}
// Add or remove a favourite
function toggleFavourite(id) {
  if (favourites.includes(id)) {
    favourites = favourites.filter(placeId => placeId !== id);
  } else {
    favourites.push(id);
  }
  renderDestinations();
  renderFavourites();
}
// Show destination details
function showDetails(id) {
  const place = destinations.find(item => item.id === id);
  if (!place) return;
  let modal = document.getElementById("detailsModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "detailsModal";
    document.body.appendChild(modal);
  }
  modal.className =
    "fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4";
  modal.innerHTML = `
    <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh]
      overflow-y-auto p-6 sm:p-8">
      <div class="flex justify-between items-start gap-4 mb-4">
        <div>
          <p class="text-orange-600 text-sm">
            📍 ${place.location}
          </p>
          <h2 class="text-3xl font-bold mt-2">
            ${place.name}
          </h2>
        </div>
        <button
          id="closeModal"
          class="text-3xl text-gray-500"
          aria-label="Close details">
          &times;
        </button>
      </div>
      <img
        src="${place.image}"
        alt="${place.name}"
        class="w-full h-64 object-cover rounded-xl mb-5"
      >
      <h3 class="text-xl font-bold mb-2">
        About this destination
      </h3>
      <p class="text-gray-600 leading-7">
        ${place.description}
      </p>
      <button
        id="nearbyButton"
        class="mt-6 bg-[#176B55] text-white rounded-xl px-5 py-3
          font-semibold hover:bg-[#105440]">
        Near Tourist Places →
      </button>
      <div id="nearbyContainer" class="mt-5 space-y-4"></div>
    </div>
  `;
  document.getElementById("closeModal").addEventListener("click", () => {
    modal.remove();
  });
  modal.addEventListener("click", event => {
    if (event.target === modal) {
      modal.remove();
    }
  });
  document.getElementById("nearbyButton").addEventListener("click", () => {
    const nearbyContainer =
      document.getElementById("nearbyContainer");
    nearbyContainer.innerHTML = place.nearby.map(nearby => `
      <article class="bg-[#FAF8F2] rounded-xl p-4">
        <h4 class="font-bold text-lg">
          ${nearby.name}
        </h4>
        <p class="text-sm text-orange-700 mt-1">
          📍 ${nearby.distance}
        </p>
        <p class="text-sm text-gray-600 mt-2 leading-6">
          ${nearby.description}
        </p>
      </article>
    `).join("");
  });
}
// Handle clicks on cards and category buttons
document.addEventListener("click", event => {
  const categoryButton =
    event.target.closest("[data-category]");
  const favouriteButton =
    event.target.closest("[data-favourite]");
  const detailsButton =
    event.target.closest("[data-details]");
  if (categoryButton) {
    selectedCategory = categoryButton.dataset.category;
    renderCategories();
    renderDestinations();
  }
  if (favouriteButton) {
    toggleFavourite(Number(favouriteButton.dataset.favourite));
  }
  if (detailsButton) {
    showDetails(Number(detailsButton.dataset.details));
  }
});
// Handle search form submission
searchForm.addEventListener("submit", event => {
  event.preventDefault();
  searchText = searchInput.value.trim();
  renderDestinations();
  document.getElementById("destinations").scrollIntoView({
    behavior: "smooth"
  });
});
// Update results while typing
searchInput.addEventListener("input", () => {
  searchText = searchInput.value.trim();
  renderDestinations();
});
// Initial display
renderCategories();
renderDestinations();
renderFavourites();
// Navbar active section
const navLinks = document.querySelectorAll("[data-nav]");
const sections = [
  document.getElementById("home"),
  document.getElementById("destinations"),
  document.getElementById("favourites")
];
function updateActiveNav() {
  let currentSection = "home";
  // Find the section currently near the top of the screen
  sections.forEach(section => {
    if (section && section.getBoundingClientRect().top <= 160) {
      currentSection = section.id;
    }
  });
  // Update navbar colours
  navLinks.forEach(link => {
    const isActive = link.dataset.nav === currentSection;
    link.classList.toggle("text-orange-600", isActive);
    link.classList.toggle("text-gray-600", !isActive);
    link.classList.toggle("font-bold", isActive);
  });
}
// Update when the user scrolls
window.addEventListener("scroll", updateActiveNav);
// Update when the page loads
window.addEventListener("load", updateActiveNav);
// Update when a navbar link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    // Wait for the browser to begin moving to the section
    setTimeout(updateActiveNav, 100);
  });
});
// Set the correct active link initially
updateActiveNav();


