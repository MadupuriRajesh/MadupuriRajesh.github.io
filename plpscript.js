// Product data
const products = {
    a1b1c: {
      title: "Esprit Ruffle Shirt",
      price: "$16.64",
      description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula.",
      image: "images/product-01.jpg",
      category: "women",
    },
    a2b2c: {
      title: "Herschel Supply",
      price: "$35.31",
      description: "Mauris consequat ornare feugiat.",
      image: "images/product-02.jpg",
      category: "women",
    },
    a3b3c: {
      title: "Only Check Trouser",
      price: "$25.50",
      description: "Elegant trousers with a modern check pattern.",
      image: "images/product-03.jpg",
      category: "men",
    },
    a4b4c: {
      title: "Classic Trench Coat",
      price: "$75.00",
      description: "Timeless and versatile, this trench coat is a wardrobe essential.",
      image: "images/product-04.jpg",
      category: "women",
    },
    a5b5c: {
      title: "Front Pocket Jumper",
      price: "$34.75",
      description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula.",
      image: "images/product-05.jpg",
      category: "women",
    },
    a6b6c: {
      title: "Vintage Inspired Classic",
      price: "$93.20",
      description: "Mauris consequat ornare feugiat.",
      image: "images/product-06.jpg",
      category: "watches",
    },
    a7b7c: {
      title: "Only Check Trouser",
      price: "$25.50",
      description: "Elegant trousers with a modern check pattern.",
      image: "images/product-07.jpg",
      category: "women",
    },
    a8b8c: {
      title: "Shirt in Stretch Column",
      price: "$52.66",
      description: "Timeless and versatile, this trench coat is a wardrobe essential.",
      image: "images/product-08.jpg",
      category: "women",
    },
    a9b9c: {
      title: "Converse All Star Hi Plimsolls",
      price: "$75.00",
      description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula.",
      image: "images/product-09.jpg",
      category: "shoes",
    },
    a10b10c: {
      title: "Femme T-Shirt in Stripo",
      price: "$25.85",
      description: "Mauris consequat ornare feugiat.",
      image: "images/product-10.jpg",
      category: "women",
    },
    a11b11c: {
      title: "Hershell supply men",
      price: "$63.16",
      description: "Elegant trousers with a modern check pattern.",
      image: "images/product-11.jpg",
      category: "men",
    },
    a12b12c: {
      title: "Hershell supply watch",
      price: "$63.15",
      description: "Timeless and versatile, this trench coat is a wardrobe essential.",
      image: "images/product-12.jpg",
      category: "watches",
    },
    a13b13c: {
      title: "T-shirt with Sleeve",
      price: "$18.49",
      description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula.",
      image: "images/product-13.jpg",
      category: "women",
    },
    a14b14c: {
      title: "Pretty Little Thing",
      price: "$54.79",
      description: "Mauris consequat ornare feugiat.",
      image: "images/product-14.jpg",
      category: "women",
    },
    a15b15c: {
      title: "Mini Silver Mesh Watch",
      price: "$86.85",
      description: "Elegant trousers with a modern check pattern.",
      image: "images/product-15.jpg",
      category: "watches",
    },
    a16b16c: {
      title: "Square Neck Back",
      price: "$29.64",
      description: "Timeless and versatile, this trench coat is a wardrobe essential.",
      image: "images/product-16.jpg",
      category: "women",
    },
  };

  

// DOM elements
const navLinks = document.querySelectorAll('.nav-links a');
const productGrid = document.querySelector('.product-grid');

// Function to render products
function renderProducts(category) {
  console.log(category);
  productGrid.innerHTML = ''; // Clear the grid
  
  // Loop through products and filter by category
  Object.entries(products).forEach(([id, product]) => {
    if (category === 'all' || product.category === category) {
      const productCard = `
        <div class="product-card">
          <a href="pdp.html?id=${id}">
            <img src="${product.image}" alt="${product.title}" class="product-image" />
            <div class="product-info">
              <div class="title-row">
                <span class="product-title">${product.title}</span>
                <span class="heart-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                  </svg>
                </span>
              </div>
              <span class="product-price">${product.price}</span>
            </div>
          </a>
        </div>
      `;
      productGrid.innerHTML += productCard;
    }
  });
}

// Function to update the URL
function updateURL(category) {
  const url = `plp.html?category=${category}`;
  history.pushState({ category }, '', url); // Update URL without reloading
}

// Function to handle navigation and rendering
function handleNavigation(category) {
  // Highlight the active category link
  navLinks.forEach(link => link.classList.remove('active'));
  document.querySelector(`[data-category="${category}"]`).classList.add('active');

  // Render products for the selected category
  renderProducts(category);

  // Update the browser URL
  updateURL(category);
}

// Event listener for category links
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    const category = link.getAttribute('data-category'); // Get category from data attribute
    handleNavigation(category);
  });
});

// Handle browser back/forward navigation
window.addEventListener('popstate', (e) => {
  const category = e.state?.category || 'all'; // Default to 'all' if no state
  handleNavigation(category);
});

// Initial rendering of all products
const params = new URLSearchParams(window.location.search);
const initialCategory = params.get('category') || 'all';
handleNavigation(initialCategory);