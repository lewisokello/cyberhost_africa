// Service Pages Enhanced JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Reveal elements on scroll
  const revealElements = document.querySelectorAll(".reveal-on-scroll")

  function checkReveal() {
    for (let i = 0; i < revealElements.length; i++) {
      const windowHeight = window.innerHeight
      const elementTop = revealElements[i].getBoundingClientRect().top
      const elementVisible = 150

      if (elementTop < windowHeight - elementVisible) {
        revealElements[i].classList.add("active")
      }
    }
  }

  window.addEventListener("scroll", checkReveal)
  checkReveal() // Check on load

  // Flip cards on click
  const cards = document.querySelectorAll(".specialized-card-enhanced")
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      this.classList.toggle("flipped")
    })
  })

  // Map region interaction
  const mapRegions = document.querySelectorAll(".map-region")
  mapRegions.forEach((region) => {
    region.addEventListener("click", function () {
      mapRegions.forEach((r) => r.classList.remove("active"))
      this.classList.add("active")
    })
  })

  // Animated counting for statistics
  const statValues = document.querySelectorAll(".stat-value, .stat-number")

  function animateValue(element, start, end, duration, suffix = "") {
    let startTimestamp = null
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const value = Math.floor(progress * (end - start) + start)

      // Check if the element contains a span (for percentage signs)
      const span = element.querySelector("span")
      if (span) {
        element.textContent = value + suffix
        element.appendChild(span)
      } else {
        element.textContent = value + suffix
      }

      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }

  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target
        const originalText = element.getAttribute("data-value") || element.textContent

        // Extract number and suffix from text like "31+" or "7" or "100%"
        const match = originalText.match(/(\d+)(.*)/)
        if (match) {
          const targetNumber = Number.parseInt(match[1], 10)
          const suffix = match[2] || ""

          // Start animation
          animateValue(element, 0, targetNumber, 2000, suffix)
          observer.unobserve(element)
        }
      }
    })
  }

  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5,
    rootMargin: "0px 0px -50px 0px",
  })

  statValues.forEach((statValue) => {
    // Store the original value as a data attribute
    const originalValue = statValue.textContent.trim()
    statValue.setAttribute("data-value", originalValue)

    // Extract number and suffix for initial setup
    const match = originalValue.match(/(\d+)(.*)/)
    if (match) {
      const suffix = match[2] || ""

      // Set initial value to 0 with suffix
      const span = statValue.querySelector("span")
      if (span) {
        const spanContent = span.textContent
        span.remove()
        statValue.textContent = "0" + suffix
        const newSpan = document.createElement("span")
        newSpan.textContent = spanContent
        statValue.appendChild(newSpan)
      } else {
        statValue.textContent = "0" + suffix
      }
    }

    observer.observe(statValue)
  })

  // Parallax effect for floating elements
  const floatingElements = document.querySelectorAll(".tech-element")

  window.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight

    floatingElements.forEach((element) => {
      const speed = 30
      const xOffset = (x - 0.5) * speed
      const yOffset = (y - 0.5) * speed

      element.style.transform = `translate(${xOffset}px, ${yOffset}px)`
    })
  })

  // Neural network animation
  function connectNodes() {
    const nodes = document.querySelectorAll(".neural-node")
    const neuralBg = document.querySelector(".neural-network-bg")

    if (!neuralBg || nodes.length === 0) return

    const canvas = document.createElement("canvas")
    neuralBg.appendChild(canvas)
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    canvas.style.position = "absolute"
    canvas.style.top = "0"
    canvas.style.left = "0"
    canvas.style.zIndex = "0"

    const ctx = canvas.getContext("2d")

    function drawConnections() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const node1 = nodes[i].getBoundingClientRect()
          const node2 = nodes[j].getBoundingClientRect()

          const x1 = node1.left + node1.width / 2
          const y1 = node1.top + node1.height / 2
          const x2 = node2.left + node2.width / 2
          const y2 = node2.top + node2.height / 2

          const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))

          if (distance < 300) {
            const opacity = 1 - distance / 300

            ctx.beginPath()
            ctx.moveTo(x1, y1)
            ctx.lineTo(x2, y2)
            ctx.strokeStyle = `rgba(255, 165, 0, ${opacity * 0.5})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(drawConnections)
    }

    drawConnections()

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    })
  }

  connectNodes()

  // Code animation
  function animateCodeLines() {
    const codeLines = document.querySelectorAll(".code-line")
    if (codeLines.length === 0) return

    codeLines.forEach((line) => {
      line.classList.add("animate")
    })

    setTimeout(() => {
      codeLines.forEach((line) => {
        line.classList.remove("animate")
      })
      setTimeout(animateCodeLines, 1000)
    }, 15000)
  }

  animateCodeLines()
})