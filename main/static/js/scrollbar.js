// Force scrollbar visibility on desktop
document.addEventListener("DOMContentLoaded", () => {
    // Function to check if device is mobile
    function isMobileDevice() {
      return window.innerWidth <= 768
    }
  
    function setScrollbarVisibility() {
      if (!isMobileDevice()) {
        // Force scrollbar on desktop
        document.documentElement.style.overflowY = "scroll"
        document.body.style.overflowY = "visible"
  
        // Add a class to the body for additional CSS targeting
        document.body.classList.add("desktop-scrollbar")
      } else {
        // Hide scrollbar on mobile
        document.documentElement.style.overflowY = "auto"
        document.body.style.overflowY = "auto"
        document.body.classList.remove("desktop-scrollbar")
      }
    }
  
    // Set initial scrollbar visibility
    setScrollbarVisibility()
  
    // Update on window resize
    window.addEventListener("resize", setScrollbarVisibility)
  })
  