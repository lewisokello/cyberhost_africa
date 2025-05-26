// Custom scrollbar configuration
document.addEventListener("DOMContentLoaded", () => {
    // Function to check if device is mobile
    function isMobileDevice() {
      return window.innerWidth <= 768
    }
  
    // Get the SimpleBar instance
    const simpleBarInstance = document.querySelector("[data-simplebar]")?._simplebar
  
    if (simpleBarInstance) {
      // Configure SimpleBar based on device type
      if (isMobileDevice()) {
        // Disable SimpleBar on mobile
        simpleBarInstance.unMount()
        document.body.removeAttribute("data-simplebar")
      } else {
        // Ensure SimpleBar is visible on desktop
        const scrollbarEl = document.querySelector(".simplebar-scrollbar")
        if (scrollbarEl) {
          scrollbarEl.style.visibility = "visible"
          scrollbarEl.style.width = "10px"
  
          // Force the scrollbar to be visible with the correct color
          const scrollbarBefore = document.querySelector(".simplebar-scrollbar::before")
          if (scrollbarBefore) {
            scrollbarBefore.style.backgroundColor = "#ffa500"
            scrollbarBefore.style.opacity = "1"
          }
        }
      }
    }
  
    // Handle window resize
    window.addEventListener("resize", () => {
      const simpleBarInstance = document.querySelector("[data-simplebar]")?._simplebar
  
      if (isMobileDevice()) {
        // Disable SimpleBar on mobile
        if (simpleBarInstance) {
          simpleBarInstance.unMount()
          document.body.removeAttribute("data-simplebar")
        }
      } else {
        // Re-enable SimpleBar on desktop if it was disabled
        if (!document.body.hasAttribute("data-simplebar")) {
          document.body.setAttribute("data-simplebar", "")
          // Need to reload the page to reinitialize SimpleBar
          window.location.reload()
        }
      }
    })
  
    // Force minimum page height to ensure scrolling is possible
    document.body.style.minHeight = "120vh"
  })
  