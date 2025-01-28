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
