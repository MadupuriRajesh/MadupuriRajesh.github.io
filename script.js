window.dataLayer = { 
  pageName: "Rajesh Website", 
  userType: "Guest",
  userID:"8C2811a503C7c5a",
};

console.log(window.dataLayer);


//color trasition to the header

document.addEventListener("scroll", function () {
  const header = document.querySelector(".header1");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// description
function showTab(tabId) {
  document
    .querySelectorAll(".tab")
    .forEach((tab) => tab.classList.remove("active"));
  document
    .querySelectorAll(".tab-content")
    .forEach((content) => content.classList.remove("active"));

  document
    .querySelector(`[onclick="showTab('${tabId}')"]`)
    .classList.add("active");
  document.getElementById(tabId).classList.add("active");
}

//Email validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("newsletter-form");
  const emailInput = document.getElementById("email-input");
  const popupMessage = document.getElementById("popup-message");
  function showPopup(message, isError = false) {
    popupMessage.textContent = message;
    popupMessage.classList.remove("hidden");
    popupMessage.style.opacity = "1";
    popupMessage.style.transform = "translateX(-50%) translateY(0)";
    popupMessage.classList.toggle("error", isError);

    setTimeout(() => {
      popupMessage.style.opacity = "0";
      popupMessage.style.transform = "translateX(-50%) translateY(-20px)";
      setTimeout(() => {
        popupMessage.classList.add("hidden");
      }, 500);
    }, 3000);
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (validateEmail(email)) {
      showPopup("Subscription successful!", false);
      form.reset();
    } else {
      showPopup("Invalid email address. Please try again.", true);
    }
  });
});

// transition of slides
document.addEventListener("DOMContentLoaded", () => {
  const slides = [
    'url("images/slide-02.jpg")',
    'url("images/slide-03.jpg")',
    'url("images/slide-04.jpg")',
    'url("images/slide-06.jpg")',
    'url("images/slide-05.jpg")',
  ];
  let currentIndex = 0;

  function changeBack() {
    document.querySelector(".banner-img").style.backgroundImage =
      slides[currentIndex];
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    changeBack();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    changeBack();
  }

  // // Set up the interval for automatic transition
  // setInterval(nextSlide, 4000);

  document.querySelector(".next-arrow").addEventListener("click", nextSlide);
  document.querySelector(".prev-arrow").addEventListener("click", prevSlide);
});


//toggle bar
function toggleNavbar() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}




// Product data
const products = {
  1: {
    title: "Esprit Ruffle Shirt",
    price: "$16.64",
    description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula.",
    image: "images/product-01.jpg",
    category: "women",
  },
  2: {
    title: "Herschel Supply",
    price: "$35.31",
    description: "Mauris consequat ornare feugiat.",
    image: "images/product-02.jpg",
    category: "women",
  },
  3: {
    title: "Only Check Trouser",
    price: "$25.50",
    description: "Elegant trousers with a modern check pattern.",
    image: "images/product-03.jpg",
    category: "men",
  },
  4: {
    title: "Classic Trench Coat",
    price: "$75.00",
    description: "Timeless and versatile, this trench coat is a wardrobe essential.",
    image: "images/product-04.jpg",
    category: "women",
  },
  5: {
    title: "Front Pocket Jumper",
    price: "$34.75",
    description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula.",
    image: "images/product-05.jpg",
    category: "women",
  },
  6: {
    title: "Vintage Inspired Classic",
    price: "$93.20",
    description: "Mauris consequat ornare feugiat.",
    image: "images/product-06.jpg",
    category: "watches",
  },
  7: {
    title: "Only Check Trouser",
    price: "$25.50",
    description: "Elegant trousers with a modern check pattern.",
    image: "images/product-07.jpg",
    category: "women",
  },
  8: {
    title: "Shirt in Stretch Column",
    price: "$52.66",
    description: "Timeless and versatile, this trench coat is a wardrobe essential.",
    image: "images/product-08.jpg",
    category: "women",
  },
  9: {
    title: "Converse All Star Hi Plimsolls",
    price: "$75.00",
    description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula.",
    image: "images/product-09.jpg",
    category: "shoes",
  },
  10: {
    title: "Femme T-Shirt in Stripo",
    price: "$25.85",
    description: "Mauris consequat ornare feugiat.",
    image: "images/product-10.jpg",
    category: "women",
  },
  11: {
    title: "Hershell supply men",
    price: "$63.16",
    description: "Elegant trousers with a modern check pattern.",
    image: "images/product-11.jpg",
    category: "men",
  },
  12: {
    title: "Hershell supply watch",
    price: "$63.15",
    description: "Timeless and versatile, this trench coat is a wardrobe essential.",
    image: "images/product-12.jpg",
    category: "watches",
  },
  13: {
    title: "T-shirt with Sleeve",
    price: "$18.49",
    description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula.",
    image: "images/product-13.jpg",
    category: "women",
  },
  14: {
    title: "Pretty Little Thing",
    price: "$54.79",
    description: "Mauris consequat ornare feugiat.",
    image: "images/product-14.jpg",
    category: "women",
  },
  15: {
    title: "Mini Silver Mesh Watch",
    price: "$86.85",
    description: "Elegant trousers with a modern check pattern.",
    image: "images/product-15.jpg",
    category: "watches",
  },
  16: {
    title: "Square Neck Back",
    price: "$29.64",
    description: "Timeless and versatile, this trench coat is a wardrobe essential.",
    image: "images/product-16.jpg",
    category: "women",
  },
};


document.addEventListener("DOMContentLoaded", () => {
  // Get the product ID from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  console.log("Product ID from URL:", productId);

  let quantity = 1;

  if (productId && products[productId]) {
    const product = products[productId];

    // Populate PDP with product data
    document.querySelector(".product-title").textContent = product.title;
    document.querySelector(".price").textContent = product.price;
    document.querySelector(".description").textContent = product.description;
    document.querySelector(".product-image").src = product.image;
    document.querySelector(".product-image").alt = product.title;

    const quantityInput = document.querySelector("input[type='number']");
    const incrementButton = document.querySelector(".quantity-group button:nth-child(3)");
    const decrementButton = document.querySelector(".quantity-group button:nth-child(1)");

    // Initialize quantity input
    quantityInput.value = quantity;

    // Increment quantity
    incrementButton.addEventListener("click", () => {
      quantity++;
      quantityInput.value = quantity;
    });

    // Decrement quantity
    decrementButton.addEventListener("click", () => {
      if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity;
      }
    });

    // Listen to manual quantity input changes
    quantityInput.addEventListener("change", (e) => {
      const value = parseInt(e.target.value, 10);
      if (isNaN(value) || value < 1) {
        quantity = 1; // Reset to default
      } else {
        quantity = value;
      }
      quantityInput.value = quantity;
    });

    // Add to Cart Button Functionality
    document.querySelector(".add-to-cart").addEventListener("click", (e) => {
      e.preventDefault();

      // Retrieve cart or initialize it
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      // Find product in cart
      const existingProductIndex = cart.findIndex((item) => item.id === productId);

      if (existingProductIndex !== -1) {
        // Update quantity if product exists
        cart[existingProductIndex].quantity += quantity;
      } else {
        // Add product to cart
        cart.push({
          id: productId,
          title: product.title,
          price: parseFloat(product.price.replace("$", "")),
          image: product.image,
          quantity: quantity,
        });
      }

      // Save updated cart
      localStorage.setItem("cart", JSON.stringify(cart));

      // Calculate total price
      const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      alert(`Added ${quantity} item(s) to cart! Total Price: $${totalPrice.toFixed(2)}`);

      // Reset quantity
      quantity = 1;
      quantityInput.value = quantity;
    });
  } else {
    document.querySelector(".product-details").innerHTML =
      "<p>Product not found. Please go back to the product listing page.</p>";
  }

  // Populate related products
  const productGrid = document.querySelector(".product-grid");
  if (productGrid) {
    productGrid.innerHTML = ""; // Clear existing content

    // Get related products
    const relatedProducts = getRelatedProducts(productId);

    relatedProducts.forEach((relatedProduct) => {
      const productCard = createProductCard(relatedProduct);

      // Add event listener to navigate to PDP
      productCard.addEventListener("click", () => {
        window.location.href = `pdp.html?id=${relatedProduct.id}`;
      });

      productGrid.appendChild(productCard);
    });
  }
});

/**
 * Get related products by category, excluding the current product
 * @param {string} currentProductId
 * @returns {Array} Related products
 */
function getRelatedProducts(currentProductId) {
  const currentProduct = products[currentProductId];
  const category = currentProduct ? currentProduct.category : null;

  const filteredProducts = Object.keys(products)
    .filter((id) => id !== currentProductId && products[id].category === category)
    .map((id) => ({ id, ...products[id] }));

  return filteredProducts.slice(0, 4);
}

/**
 * Create a product card element
 * @param {Object} product
 * @returns {HTMLElement} Product card element
 */
function createProductCard(product) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  productCard.innerHTML = `
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
  `;

  return productCard;
}