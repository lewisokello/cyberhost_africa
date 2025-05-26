// Toggle mobile menu
function toggleMenu() {
  const nav = document.getElementById("main-nav")
  if (nav.classList.contains("show")) {
    nav.classList.remove("show")
  } else {
    nav.classList.add("show")
  }
}

// Close menu when clicking outside
document.addEventListener("click", (event) => {
  const nav = document.getElementById("main-nav")
  const hamburger = document.querySelector(".hamburger")

  // If the click is outside the nav and hamburger, close the menu
  if (
    nav &&
    hamburger &&
    nav.classList.contains("show") &&
    !nav.contains(event.target) &&
    !hamburger.contains(event.target)
  ) {
    nav.classList.remove("show")
  }
})

// Scroll to content function
function scrollToContent() {
  window.scrollTo({
    top: window.innerHeight * 0.8,
    behavior: "smooth",
  })
}

// Add active class to current page in navigation
document.addEventListener("DOMContentLoaded", () => {
  // Force minimum page height to ensure scrolling is possible
  document.body.style.minHeight = "120vh"

  const currentLocation = window.location.pathname
  const navLinks = document.querySelectorAll(".top-link")

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href")
    if (currentLocation.includes(linkPath) && linkPath !== "index.html") {
      link.classList.add("active")
    } else if (currentLocation.endsWith("/") && linkPath === "index.html") {
      link.classList.add("active")
    }
  })

  // FAQ toggle functionality
  const faqItems = document.querySelectorAll(".faq-item")

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")

    question.addEventListener("click", () => {
      // Close all other items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active")
        }
      })

      // Toggle current item
      item.classList.toggle("active")

      // Change icon
      const icon = item.querySelector(".faq-toggle i")
      if (item.classList.contains("active")) {
        icon.className = "fas fa-minus"
      } else {
        icon.className = "fas fa-plus"
      }
    })
  })

  // Form submission handling
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Here you would normally send the form data to your server
      // For now, we'll just show a success message

      const formData = new FormData(contactForm)
      const formValues = {}

      for (const [key, value] of formData.entries()) {
        formValues[key] = value
      }

      console.log("Form submitted with values:", formValues)

      // Show success message
      contactForm.innerHTML = `
          <div class="form-success">
            <i class="fas fa-check-circle" style="font-size: 3rem; color: #ffa500; margin-bottom: 20px;"></i>
            <h3>Message Sent Successfully!</h3>
            <p>Thank you for contacting us. We'll get back to you shortly.</p>
          </div>
        `
    })
  }

  // Smooth scroll to sections
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const headerOffset = 100
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })

        // Close mobile menu if open
        const nav = document.getElementById("main-nav")
        if (nav && nav.classList.contains("show")) {
          nav.classList.remove("show")
        }
      }
    })
  })
})

// Add scroll event listener to change header on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header-container")

  if (window.scrollY > 100) {
    header.style.padding = "10px 20px"
    header.style.background = "linear-gradient(to right, rgba(30, 30, 30, 0.98) 0%, rgba(255, 255, 255, 0.98) 50%)"
  } else {
    header.style.padding = "20px"
    header.style.background = "linear-gradient(to right, rgba(50, 50, 50, 0.95) 0%, rgba(255, 255, 255, 0.95) 50%)"
  }
})
