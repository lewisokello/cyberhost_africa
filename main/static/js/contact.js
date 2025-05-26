// Premium World-Class Contact Page JavaScript

document.addEventListener("DOMContentLoaded", () => {
    // Create animated background particles
    createParticles()
  
    // Initialize premium accordion
    initAccordion()
  
    // Initialize form validation and submission
    initForm()
  
    // Initialize scroll reveal animations
    initScrollReveal()
  
    // Initialize 3D tilt effect on cards
    initTiltEffect()
  
    // Initialize cursor effects
    initCursorEffects()
  })
  
  // Create animated background particles
  function createParticles() {
    const animatedBg = document.createElement("div")
    animatedBg.className = "animated-bg"
    document.body.appendChild(animatedBg)
  
    // Create particles
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement("div")
      particle.className = "particle"
  
      // Random size
      const size = Math.random() * 200 + 50
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
  
      // Random position
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
  
      // Random animation delay
      particle.style.animationDelay = `${Math.random() * 15}s`
  
      // Random opacity
      particle.style.opacity = `${Math.random() * 0.3}`
  
      animatedBg.appendChild(particle)
    }
  
    // Create location pins for map
    const locationPins = document.createElement("div")
    locationPins.className = "location-pins"
  
    const mapPlaceholder = document.querySelector(".premium-map")
    if (mapPlaceholder) {
      // Create pins
      for (let i = 0; i < 2; i++) {
        const pin = document.createElement("div")
        pin.className = "location-pin"
        locationPins.appendChild(pin)
      }
  
      mapPlaceholder.appendChild(locationPins)
    }
  }
  
  // Initialize premium accordion
  function initAccordion() {
    const accordionItems = document.querySelectorAll(".accordion-item")
  
    accordionItems.forEach((item) => {
      const header = item.querySelector(".accordion-header")
  
      header.addEventListener("click", () => {
        // Close all other items
        accordionItems.forEach((otherItem) => {
          if (otherItem !== item && otherItem.classList.contains("active")) {
            otherItem.classList.remove("active")
          }
        })
  
        // Toggle current item
        item.classList.toggle("active")
      })
    })
  
    // Open first accordion item by default
    if (accordionItems.length > 0) {
      accordionItems[0].classList.add("active")
    }
  }
  
  // Initialize form validation and submission
  function initForm() {
    const form = document.getElementById("contactForm")
    if (!form) return
  
    const inputs = form.querySelectorAll("input, select, textarea")
    const submitBtn = form.querySelector(".submit-btn")
  
    // Add input focus effects
    inputs.forEach((input) => {
      if (input.type !== "checkbox") {
        input.addEventListener("focus", () => {
          input.parentElement.classList.add("focused")
        })
  
        input.addEventListener("blur", () => {
          input.parentElement.classList.remove("focused")
        })
      }
    })
  
    // Form submission
    form.addEventListener("submit", (e) => {
      e.preventDefault()
  
      // Validate form
      let isValid = true
  
      inputs.forEach((input) => {
        if (input.hasAttribute("required") && !input.value.trim()) {
          isValid = false
          input.classList.add("error")
        } else {
          input.classList.remove("error")
        }
      })
  
      if (!isValid) return
  
      // Show loading state
      submitBtn.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>'
      submitBtn.disabled = true
  
      // Simulate form submission (replace with actual AJAX call)
      setTimeout(() => {
        // Hide form and show success message
        const formContent = form.parentElement
        formContent.innerHTML = `
          <div class="success-message" style="display: block;">
            <i class="fas fa-check-circle success-icon"></i>
            <h3 class="success-title">Message Sent Successfully!</h3>
            <p class="success-text">Thank you for reaching out to us. We've received your message and will get back to you within 24 hours.</p>
            <button class="success-btn" onclick="window.location.reload()">Send Another Message</button>
          </div>
        `
      }, 2000)
    })
  }
  
  // Initialize scroll reveal animations
  function initScrollReveal() {
    const revealElements = document.querySelectorAll(
      ".map-section, .faq-section, .cta-section, .form-content, .form-image",
    )
  
    revealElements.forEach((element) => {
      element.classList.add("reveal")
    })
  
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight
  
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
  
        if (elementTop < windowHeight - 100) {
          element.classList.add("active")
        }
      })
    }
  
    window.addEventListener("scroll", revealOnScroll)
  
    // Trigger once on load
    revealOnScroll()
  }
  
  // Initialize 3D tilt effect on cards
  function initTiltEffect() {
    const cards = document.querySelectorAll(".premium-card")
  
    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const cardRect = card.getBoundingClientRect()
        const cardCenterX = cardRect.left + cardRect.width / 2
        const cardCenterY = cardRect.top + cardRect.height / 2
  
        const mouseX = e.clientX - cardCenterX
        const mouseY = e.clientY - cardCenterY
  
        // Calculate rotation based on mouse position
        const rotateY = mouseX / 10
        const rotateX = -mouseY / 10
  
        // Apply transform
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`
      })
  
      card.addEventListener("mouseleave", () => {
        // Reset transform
        card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)"
      })
    })
  }
  
  // Initialize cursor effects
  function initCursorEffects() {
    const buttons = document.querySelectorAll(".submit-btn, .cta-btn, .social-link")
  
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        document.body.style.cursor = "pointer"
      })
  
      button.addEventListener("mouseleave", () => {
        document.body.style.cursor = "default"
      })
    })
  }
  