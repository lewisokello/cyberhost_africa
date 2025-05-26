document.addEventListener("DOMContentLoaded", () => {
    // Function to find text in elements and apply styling
    function findAndStyleContent() {
      // Get all elements that might contain our target text
      const allElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, div")
  
      // Create a map to track if we've found and styled each section
      const sectionsFound = {
        howItWorks: false,
        successStory: false,
        relatedServices: false,
        developmentProcess: false,
        technologiesWeUse: false,
        learningManagementSystem: false,
        featuredCourses: false,
        successStories: false,
        ourVision: false,
        impactGoals: false,
      }
  
      // Loop through all elements to find our target sections
      allElements.forEach((element) => {
        const text = element.textContent.trim()
  
        // How It Works section
        if (text === "How It Works" && !sectionsFound.howItWorks) {
          const section = findParentSection(element)
          if (section) {
            section.classList.add("styled-section", "how-it-works-section")
            element.classList.add("styled-heading")
            styleHowItWorks(section)
            sectionsFound.howItWorks = true
          }
        }
  
        // Success Story section
        else if (text.includes("Success Story") && !sectionsFound.successStory) {
          const section = findParentSection(element)
          if (section) {
            section.classList.add("styled-section", "success-story-section")
            element.classList.add("styled-heading")
            styleSuccessStory(section)
            sectionsFound.successStory = true
          }
        }
  
        // Related Services section
        else if (text === "Related Services" && !sectionsFound.relatedServices) {
          const section = findParentSection(element)
          if (section) {
            section.classList.add("styled-section", "related-services-section")
            element.classList.add("styled-heading")
            styleRelatedServices(section)
            sectionsFound.relatedServices = true
          }
        }
  
        // Development Process section
        else if (text === "Our Development Process" && !sectionsFound.developmentProcess) {
          const section = findParentSection(element)
          if (section) {
            section.classList.add("styled-section", "development-process-section")
            element.classList.add("styled-heading")
            styleDevelopmentProcess(section)
            sectionsFound.developmentProcess = true
          }
        }
  
        // Technologies We Use section
        else if (text === "Technologies We Use" && !sectionsFound.technologiesWeUse) {
          const section = findParentSection(element)
          if (section) {
            section.classList.add("styled-section", "technologies-section")
            element.classList.add("styled-heading")
            styleTechnologies(section)
            sectionsFound.technologiesWeUse = true
          }
        }
  
        // Learning Management System section
        else if (text.includes("Our Learning Management System") && !sectionsFound.learningManagementSystem) {
          const section = findParentSection(element)
          if (section) {
            section.classList.add("styled-section", "lms-section")
            element.classList.add("styled-heading")
            styleLMS(section)
            sectionsFound.learningManagementSystem = true
          }
        }
  
        // Featured Courses section
        else if (text === "Featured Courses" && !sectionsFound.featuredCourses) {
          const section = findParentSection(element)
          if (section) {
            section.classList.add("styled-section", "courses-section")
            element.classList.add("styled-heading")
            styleCourses(section)
            sectionsFound.featuredCourses = true
          }
        }
  
        // Success Stories section
        else if (text === "Success Stories" && !sectionsFound.successStories) {
          const section = findParentSection(element)
          if (section) {
            section.classList.add("styled-section", "stories-section")
            element.classList.add("styled-heading")
            styleStories(section)
            sectionsFound.successStories = true
          }
        }
  
        // Our Vision section
        else if (text === "Our Vision" && !sectionsFound.ourVision) {
          const section = findParentSection(element)
          if (section) {
            section.classList.add("styled-section", "vision-section")
            element.classList.add("styled-heading")
            styleVision(section)
            sectionsFound.ourVision = true
          }
        }
  
        // Our Impact Goals section
        else if ((text === "Our Impact Goals" || text.includes("Impact Goals for")) && !sectionsFound.impactGoals) {
          const section = findParentSection(element)
          if (section) {
            section.classList.add("styled-section", "impact-goals-section")
            element.classList.add("styled-heading")
            styleImpactGoals(section)
            sectionsFound.impactGoals = true
          }
        }
      })
    }
  
    // Find the parent section of an element
    function findParentSection(element) {
      let current = element
      // Try to find a parent section or div that could be a section container
      while (current && current !== document.body) {
        if (
          current.tagName === "SECTION" ||
          (current.tagName === "DIV" &&
            (current.classList.contains("container") || current.classList.contains("section")))
        ) {
          return current
        }
        current = current.parentElement
      }
      // If no proper section found, return the element's parent as fallback
      return element.parentElement
    }
  
    // Style How It Works section
    function styleHowItWorks(section) {
      // Find all timeline items
      const items = section.querySelectorAll("p")
      let index = 0
  
      items.forEach((item) => {
        const text = item.textContent.trim()
  
        if (
          text.includes("Initial Assessment") ||
          text.includes("Equipment Installation") ||
          text.includes("Network Setup") ||
          text.includes("Ongoing Support")
        ) {
          // Create a styled container for this item
          const container = document.createElement("div")
          container.classList.add("timeline-item-styled")
  
          // Create number element
          const number = document.createElement("div")
          number.classList.add("timeline-number")
          number.textContent = index + 1
  
          // Style the title
          item.classList.add("timeline-title")
  
          // Find the description (next paragraph)
          const description = item.nextElementSibling
          if (description && description.tagName === "P") {
            description.classList.add("timeline-description")
  
            // Insert elements in the right order
            container.appendChild(number)
            container.appendChild(item.cloneNode(true))
            container.appendChild(description.cloneNode(true))
  
            // Replace the original elements with our styled container
            item.parentNode.insertBefore(container, item)
            item.parentNode.removeChild(item)
            description.parentNode.removeChild(description)
          }
  
          index++
        }
      })
    }
  
    // Style Success Story section
    function styleSuccessStory(section) {
      // Find the title and content
      const paragraphs = section.querySelectorAll("p")
  
      paragraphs.forEach((p) => {
        const text = p.textContent.trim()
  
        if (text.includes("Connecting Kitui County School")) {
          p.classList.add("story-title")
        } else if (text.includes("We installed Starlink")) {
          p.classList.add("story-content")
        }
      })
  
      // Style the testimonial
      const blockquote = section.querySelector("blockquote")
      if (blockquote) {
        const testimonialContainer = document.createElement("div")
        testimonialContainer.classList.add("testimonial-container")
  
        const quoteIcon = document.createElement("div")
        quoteIcon.classList.add("quote-icon")
        quoteIcon.innerHTML = '<i class="fas fa-quote-left"></i>'
  
        testimonialContainer.appendChild(quoteIcon)
        testimonialContainer.appendChild(blockquote.cloneNode(true))
  
        // Find the author if it exists
        const authorText = blockquote.nextElementSibling
        if (authorText && authorText.textContent.includes("School Principal")) {
          authorText.classList.add("testimonial-author")
          testimonialContainer.appendChild(authorText.cloneNode(true))
          authorText.parentNode.removeChild(authorText)
        }
  
        blockquote.parentNode.insertBefore(testimonialContainer, blockquote)
        blockquote.parentNode.removeChild(blockquote)
      }
    }
  
    // Style Related Services section
    function styleRelatedServices(section) {
      // Find service items
      const paragraphs = section.querySelectorAll("p")
      const serviceItems = []
  
      // Group paragraphs into service items
      for (let i = 0; i < paragraphs.length; i++) {
        const titleP = paragraphs[i]
        const titleText = titleP.textContent.trim()
  
        if (titleText === "IT Support" || titleText === "AI Training LMS") {
          const descP = paragraphs[i + 1]
          const linkA = section.querySelector(`a[href*="${titleText.toLowerCase().replace(" ", "_")}"]`)
  
          if (descP && linkA) {
            serviceItems.push({
              title: titleP,
              description: descP,
              link: linkA,
            })
  
            // Skip the description paragraph in the next iteration
            i++
          }
        }
      }
  
      // Create styled service cards
      serviceItems.forEach((item) => {
        const card = document.createElement("div")
        card.classList.add("service-card")
  
        const icon = document.createElement("div")
        icon.classList.add("service-icon")
        icon.innerHTML = item.title.textContent.includes("IT Support")
          ? '<i class="fas fa-laptop-code"></i>'
          : '<i class="fas fa-graduation-cap"></i>'
  
        const content = document.createElement("div")
        content.classList.add("service-content")
  
        item.title.classList.add("service-title")
        item.description.classList.add("service-description")
        item.link.classList.add("service-link")
  
        content.appendChild(item.title.cloneNode(true))
        content.appendChild(item.description.cloneNode(true))
        content.appendChild(item.link.cloneNode(true))
  
        card.appendChild(icon)
        card.appendChild(content)
  
        // Replace original elements with our card
        const container = document.createElement("div")
        container.classList.add("service-cards-container")
        container.appendChild(card)
  
        item.title.parentNode.insertBefore(container, item.title)
        item.title.parentNode.removeChild(item.title)
        item.description.parentNode.removeChild(item.description)
        item.link.parentNode.removeChild(item.link)
      })
    }
  
    // Style Development Process section
    function styleDevelopmentProcess(section) {
      // Find all process steps
      const paragraphs = section.querySelectorAll("p")
      const steps = []
  
      // Group paragraphs into steps
      for (let i = 0; i < paragraphs.length; i++) {
        const p = paragraphs[i]
        const text = p.textContent.trim()
  
        if (
          (text.startsWith("0") && text.includes("Discovery & Planning")) ||
          (text.startsWith("0") && text.includes("Design & Prototyping")) ||
          (text.startsWith("0") && text.includes("Development")) ||
          (text.startsWith("0") && text.includes("Testing & Quality Assurance")) ||
          (text.startsWith("0") && text.includes("Deployment & Support"))
        ) {
          const number = text.substring(0, 2)
          const title = text.substring(2).trim()
          const description = paragraphs[i + 1] ? paragraphs[i + 1].textContent.trim() : ""
  
          steps.push({
            number: number,
            title: title,
            description: description,
            element: p,
            descElement: paragraphs[i + 1],
          })
  
          // Skip the description paragraph in the next iteration
          i++
        }
      }
  
      // Create a container for the process steps
      const processContainer = document.createElement("div")
      processContainer.classList.add("process-steps-container")
  
      // Create styled step elements
      steps.forEach((step) => {
        const stepElement = document.createElement("div")
        stepElement.classList.add("process-step")
  
        const numberElement = document.createElement("div")
        numberElement.classList.add("step-number")
        numberElement.textContent = step.number
  
        const contentElement = document.createElement("div")
        contentElement.classList.add("step-content")
  
        const titleElement = document.createElement("h3")
        titleElement.classList.add("step-title")
        titleElement.textContent = step.title
  
        const descElement = document.createElement("p")
        descElement.classList.add("step-description")
        descElement.textContent = step.description
  
        contentElement.appendChild(titleElement)
        contentElement.appendChild(descElement)
  
        stepElement.appendChild(numberElement)
        stepElement.appendChild(contentElement)
  
        processContainer.appendChild(stepElement)
  
        // Remove original elements
        if (step.element.parentNode) {
          step.element.parentNode.removeChild(step.element)
        }
        if (step.descElement && step.descElement.parentNode) {
          step.descElement.parentNode.removeChild(step.descElement)
        }
      })
  
      // Add the process container to the section
      if (steps.length > 0 && steps[0].element.parentNode) {
        steps[0].element.parentNode.appendChild(processContainer)
      } else {
        section.appendChild(processContainer)
      }
    }
  
    // Style Technologies section
    function styleTechnologies(section) {
      // Find the intro paragraph
      const paragraphs = section.querySelectorAll("p")
      let introParagraph = null
  
      for (const p of paragraphs) {
        if (p.textContent.includes("We leverage modern technologies")) {
          introParagraph = p
          p.classList.add("tech-intro")
          break
        }
      }
  
      // Find technology categories
      const categories = []
  
      for (let i = 0; i < paragraphs.length; i++) {
        const p = paragraphs[i]
        const text = p.textContent.trim()
  
        if (text === "Frontend" || text === "Backend" || text === "Mobile" || text === "Database & Cloud") {
          // Find the list items that follow this category
          const items = []
          let nextP = p.nextElementSibling
  
          while (
            nextP &&
            nextP.tagName === "P" &&
            !["Frontend", "Backend", "Mobile", "Database & Cloud"].includes(nextP.textContent.trim())
          ) {
            items.push(nextP)
            nextP = nextP.nextElementSibling
          }
  
          categories.push({
            title: p,
            items: items,
          })
        }
      }
  
      // Create styled technology grid
      const techGrid = document.createElement("div")
      techGrid.classList.add("tech-grid")
  
      categories.forEach((category) => {
        const categoryElement = document.createElement("div")
        categoryElement.classList.add("tech-category")
  
        const titleElement = document.createElement("h3")
        titleElement.classList.add("category-title")
        titleElement.textContent = category.title.textContent
  
        const listElement = document.createElement("ul")
        listElement.classList.add("tech-list")
  
        category.items.forEach((item) => {
          const listItem = document.createElement("li")
          listItem.textContent = item.textContent.trim()
          listElement.appendChild(listItem)
        })
  
        categoryElement.appendChild(titleElement)
        categoryElement.appendChild(listElement)
        techGrid.appendChild(categoryElement)
  
        // Remove original elements
        category.title.parentNode.removeChild(category.title)
        category.items.forEach((item) => {
          if (item.parentNode) {
            item.parentNode.removeChild(item)
          }
        })
      })
  
      // Add the tech grid to the section
      if (introParagraph) {
        introParagraph.parentNode.insertBefore(techGrid, introParagraph.nextSibling)
      } else {
        section.appendChild(techGrid)
      }
    }
  
    // Style Learning Management System section
    function styleLMS(section) {
      // Find the intro paragraph
      const paragraphs = section.querySelectorAll("p")
      let introParagraph = null
  
      for (const p of paragraphs) {
        if (p.textContent.includes("Our innovative Learning Management System")) {
          introParagraph = p
          p.classList.add("lms-intro")
          break
        }
      }
  
      // Find LMS features
      const features = []
  
      for (let i = 0; i < paragraphs.length; i++) {
        const p = paragraphs[i]
        const text = p.textContent.trim()
  
        if (
          text === "Offline Capabilities" ||
          text === "Low-Bandwidth Optimization" ||
          text === "Multilingual Support" ||
          text === "Community Learning" ||
          text === "Mobile-First Design" ||
          text === "Progress Tracking"
        ) {
          const description = paragraphs[i + 1] ? paragraphs[i + 1].textContent.trim() : ""
  
          features.push({
            title: p,
            description: paragraphs[i + 1],
          })
  
          // Skip the description paragraph in the next iteration
          i++
        }
      }
  
      // Create styled features grid
      const featuresGrid = document.createElement("div")
      featuresGrid.classList.add("lms-features-grid")
  
      features.forEach((feature) => {
        const featureElement = document.createElement("div")
        featureElement.classList.add("lms-feature")
  
        const iconElement = document.createElement("div")
        iconElement.classList.add("feature-icon")
  
        // Choose icon based on feature title
        let iconClass = "fa-star"
        if (feature.title.textContent.includes("Offline")) {
          iconClass = "fa-wifi-slash"
        } else if (feature.title.textContent.includes("Bandwidth")) {
          iconClass = "fa-tachometer-alt"
        } else if (feature.title.textContent.includes("Multilingual")) {
          iconClass = "fa-language"
        } else if (feature.title.textContent.includes("Community")) {
          iconClass = "fa-users"
        } else if (feature.title.textContent.includes("Mobile")) {
          iconClass = "fa-mobile-alt"
        } else if (feature.title.textContent.includes("Progress")) {
          iconClass = "fa-chart-line"
        }
  
        iconElement.innerHTML = `<i class="fas ${iconClass}"></i>`
  
        const contentElement = document.createElement("div")
        contentElement.classList.add("feature-content")
  
        const titleElement = document.createElement("h4")
        titleElement.classList.add("feature-title")
        titleElement.textContent = feature.title.textContent
  
        const descElement = document.createElement("p")
        descElement.classList.add("feature-description")
        descElement.textContent = feature.description.textContent
  
        contentElement.appendChild(titleElement)
        contentElement.appendChild(descElement)
  
        featureElement.appendChild(iconElement)
        featureElement.appendChild(contentElement)
  
        featuresGrid.appendChild(featureElement)
  
        // Remove original elements
        feature.title.parentNode.removeChild(feature.title)
        feature.description.parentNode.removeChild(feature.description)
      })
  
      // Add the features grid to the section
      if (introParagraph) {
        introParagraph.parentNode.insertBefore(featuresGrid, introParagraph.nextSibling)
      } else {
        section.appendChild(featuresGrid)
      }
    }
  
    // Style Courses section
    function styleCourses(section) {
      // Find the intro paragraph
      const paragraphs = section.querySelectorAll("p")
      let introParagraph = null
  
      for (const p of paragraphs) {
        if (p.textContent.includes("Our curriculum is designed")) {
          introParagraph = p
          p.classList.add("courses-intro")
          break
        }
      }
  
      // Find course cards
      const courses = []
      let currentCourse = null
  
      for (let i = 0; i < paragraphs.length; i++) {
        const p = paragraphs[i]
        const text = p.textContent.trim()
  
        if (
          text === "Introduction to Programming" ||
          text === "AI Fundamentals" ||
          text === "Web Development" ||
          text === "Mobile App Development"
        ) {
          // Start a new course
          currentCourse = {
            title: p,
            description: null,
            details: [],
            stats: [],
            enrollLink: null,
            elements: [p],
          }
  
          courses.push(currentCourse)
        } else if (currentCourse) {
          // Add elements to the current course
          currentCourse.elements.push(p)
  
          // Check what type of element this is
          if (
            !currentCourse.description &&
            !text.includes("weeks") &&
            !text.includes("Beginner") &&
            !text.includes("Intermediate") &&
            !text.includes("Certificate") &&
            !text.includes("Graduates") &&
            !text.includes("Employment Rate") &&
            !text.includes("Enroll Now")
          ) {
            currentCourse.description = p
          } else if (
            text.includes("weeks") ||
            text.includes("Beginner") ||
            text.includes("Intermediate") ||
            text.includes("Certificate")
          ) {
            currentCourse.details.push(p)
          } else if (text.includes("Graduates") || text.includes("Employment Rate")) {
            currentCourse.stats.push(p)
          } else if (text.includes("Enroll Now")) {
            currentCourse.enrollLink = p
  
            // End of this course
            currentCourse = null
          }
        }
      }
  
      // Create styled course cards
      const coursesGrid = document.createElement("div")
      coursesGrid.classList.add("courses-grid")
  
      courses.forEach((course) => {
        const courseCard = document.createElement("div")
        courseCard.classList.add("course-card")
  
        // Add "Most Popular" badge for AI Fundamentals
        if (course.title.textContent === "AI Fundamentals") {
          const badge = document.createElement("div")
          badge.classList.add("course-badge")
          badge.textContent = "Most Popular"
          courseCard.appendChild(badge)
        }
  
        const headerElement = document.createElement("div")
        headerElement.classList.add("course-header")
  
        const iconElement = document.createElement("div")
        iconElement.classList.add("course-icon")
  
        // Choose icon based on course title
        let iconClass = "fa-graduation-cap"
        if (course.title.textContent.includes("Programming")) {
          iconClass = "fa-code"
        } else if (course.title.textContent.includes("AI")) {
          iconClass = "fa-robot"
        } else if (course.title.textContent.includes("Web")) {
          iconClass = "fa-globe"
        } else if (course.title.textContent.includes("Mobile")) {
          iconClass = "fa-mobile-alt"
        }
  
        iconElement.innerHTML = `<i class="fas ${iconClass}"></i>`
  
        const titleElement = document.createElement("h3")
        titleElement.classList.add("course-title")
        titleElement.textContent = course.title.textContent
  
        headerElement.appendChild(iconElement)
        headerElement.appendChild(titleElement)
  
        const contentElement = document.createElement("div")
        contentElement.classList.add("course-content")
  
        if (course.description) {
          const descElement = document.createElement("p")
          descElement.classList.add("course-description")
          descElement.textContent = course.description.textContent
          contentElement.appendChild(descElement)
        }
  
        if (course.details.length > 0) {
          const detailsElement = document.createElement("div")
          detailsElement.classList.add("course-details")
  
          course.details.forEach((detail) => {
            const detailItem = document.createElement("div")
            detailItem.classList.add("course-detail")
  
            let iconClass = "fa-info-circle"
            if (detail.textContent.includes("weeks")) {
              iconClass = "fa-clock"
            } else if (detail.textContent.includes("Beginner") || detail.textContent.includes("Intermediate")) {
              iconClass = "fa-signal"
            } else if (detail.textContent.includes("Certificate")) {
              iconClass = "fa-certificate"
            }
  
            detailItem.innerHTML = `<i class="fas ${iconClass}"></i><span>${detail.textContent}</span>`
            detailsElement.appendChild(detailItem)
          })
  
          contentElement.appendChild(detailsElement)
        }
  
        if (course.stats.length > 0) {
          const statsElement = document.createElement("div")
          statsElement.classList.add("course-stats")
  
          course.stats.forEach((stat) => {
            const statItem = document.createElement("div")
            statItem.classList.add("course-stat")
  
            const text = stat.textContent
            const match = text.match(/(\d+)([+%])?/)
  
            if (match) {
              const statNumber = document.createElement("div")
              statNumber.classList.add("stat-number")
              statNumber.textContent = match[1]
  
              if (match[2]) {
                const span = document.createElement("span")
                span.textContent = match[2]
                statNumber.appendChild(span)
              }
  
              const statLabel = document.createElement("div")
              statLabel.classList.add("stat-label")
              statLabel.textContent = text.includes("Graduates") ? "Graduates" : "Employment Rate"
  
              statItem.appendChild(statNumber)
              statItem.appendChild(statLabel)
              statsElement.appendChild(statItem)
            }
          })
  
          contentElement.appendChild(statsElement)
        }
  
        courseCard.appendChild(headerElement)
        courseCard.appendChild(contentElement)
  
        if (course.enrollLink) {
          const footerElement = document.createElement("div")
          footerElement.classList.add("course-footer")
  
          const enrollButton = document.createElement("a")
          enrollButton.classList.add("course-button")
          enrollButton.textContent = "Enroll Now"
          enrollButton.href = "#"
  
          footerElement.appendChild(enrollButton)
          courseCard.appendChild(footerElement)
        }
  
        coursesGrid.appendChild(courseCard)
  
        // Remove original elements
        course.elements.forEach((element) => {
          if (element.parentNode) {
            element.parentNode.removeChild(element)
          }
        })
      })
  
      // Add the courses grid to the section
      if (introParagraph) {
        introParagraph.parentNode.insertBefore(coursesGrid, introParagraph.nextSibling)
      } else {
        section.appendChild(coursesGrid)
      }
  
      // Add "Explore All Courses" button
      const exploreLink = section.querySelector('a:contains("Explore All Courses")')
      if (exploreLink) {
        const ctaElement = document.createElement("div")
        ctaElement.classList.add("courses-cta")
  
        const ctaButton = document.createElement("a")
        ctaButton.classList.add("cta-button")
        ctaButton.textContent = "Explore All Courses"
        ctaButton.href = exploreLink.href
  
        ctaElement.appendChild(ctaButton)
        coursesGrid.parentNode.insertBefore(ctaElement, coursesGrid.nextSibling)
  
        exploreLink.parentNode.removeChild(exploreLink)
      }
    }
  
    // Style Success Stories section
    function styleStories(section) {
      // Find the intro paragraph
      const paragraphs = section.querySelectorAll("p")
      let introParagraph = null
  
      for (const p of paragraphs) {
        if (p.textContent.includes("Meet some of our graduates")) {
          introParagraph = p
          p.classList.add("stories-intro")
          break
        }
      }
  
      // Find stories
      const stories = []
      let currentStory = null
  
      for (let i = 0; i < paragraphs.length; i++) {
        const p = paragraphs[i]
        const text = p.textContent.trim()
  
        if (text === "James Ochieng" || text === "Grace Muthoni") {
          // Start a new story
          currentStory = {
            name: p,
            title: null,
            quote: null,
            role: null,
            elements: [p],
          }
  
          stories.push(currentStory)
        } else if (currentStory) {
          // Add elements to the current story
          currentStory.elements.push(p)
  
          // Check what type of element this is
          if (!currentStory.title && (text.includes("Graduate") || text.includes("Developer"))) {
            currentStory.title = p
          } else if (!currentStory.quote && text.startsWith('"') && text.endsWith('"')) {
            currentStory.quote = p
          } else if (!currentStory.role && text.includes("Current Role:")) {
            currentStory.role = p
  
            // End of this story
            currentStory = null
          }
        }
      }
  
      // Create styled stories slider
      const storiesSlider = document.createElement("div")
      storiesSlider.classList.add("stories-slider")
  
      stories.forEach((story) => {
        const storyCard = document.createElement("div")
        storyCard.classList.add("story-card")
  
        const imageElement = document.createElement("div")
        imageElement.classList.add("story-image")
  
        const imagePlaceholder = document.createElement("div")
        imagePlaceholder.classList.add("image-placeholder")
        imagePlaceholder.innerHTML = '<i class="fas fa-user-graduate"></i>'
        imageElement.appendChild(imagePlaceholder)
  
        const contentElement = document.createElement("div")
        contentElement.classList.add("story-content")
  
        const nameElement = document.createElement("h3")
        nameElement.classList.add("story-name")
        nameElement.textContent = story.name.textContent
  
        contentElement.appendChild(nameElement)
  
        if (story.title) {
          const titleElement = document.createElement("p")
          titleElement.classList.add("story-title")
          titleElement.textContent = story.title.textContent
          contentElement.appendChild(titleElement)
        }
  
        if (story.quote) {
          const quoteElement = document.createElement("p")
          quoteElement.classList.add("story-text")
          quoteElement.textContent = story.quote.textContent
          contentElement.appendChild(quoteElement)
        }
  
        if (story.role) {
          const roleElement = document.createElement("div")
          roleElement.classList.add("story-outcome")
  
          const roleText = story.role.textContent
          const parts = roleText.split(":")
  
          if (parts.length === 2) {
            const labelSpan = document.createElement("span")
            labelSpan.classList.add("outcome-label")
            labelSpan.textContent = parts[0] + ":"
  
            const valueSpan = document.createElement("span")
            valueSpan.classList.add("outcome-value")
            valueSpan.textContent = parts[1].trim()
  
            roleElement.appendChild(labelSpan)
            roleElement.appendChild(valueSpan)
          } else {
            roleElement.textContent = roleText
          }
  
          contentElement.appendChild(roleElement)
        }
  
        storyCard.appendChild(imageElement)
        storyCard.appendChild(contentElement)
  
        storiesSlider.appendChild(storyCard)
  
        // Remove original elements
        story.elements.forEach((element) => {
          if (element.parentNode) {
            element.parentNode.removeChild(element)
          }
        })
      })
  
      // Add the stories slider to the section
      if (introParagraph) {
        introParagraph.parentNode.insertBefore(storiesSlider, introParagraph.nextSibling)
      } else {
        section.appendChild(storiesSlider)
      }
    }
  
    // Style Vision section
    function styleVision(section) {
      // Find the vision content
      const visionContent = section.querySelector(".vision-content")
      if (visionContent) {
        visionContent.classList.add("styled-vision-content")
  
        // Style paragraphs
        const paragraphs = visionContent.querySelectorAll("p")
        if (paragraphs.length > 0) {
          paragraphs[0].classList.add("vision-main-text")
  
          for (let i = 1; i < paragraphs.length; i++) {
            paragraphs[i].classList.add("vision-detail-text")
          }
        }
      }
  
      // Find the vision image
      const visionImage = section.querySelector(".vision-image")
      if (visionImage) {
        visionImage.classList.add("styled-vision-image")
  
        // Style the image placeholder
        const imagePlaceholder = visionImage.querySelector(".image-placeholder")
        if (imagePlaceholder) {
          imagePlaceholder.classList.add("styled-image-placeholder")
        }
      }
    }
  
    // Style Impact Goals section
    function styleImpactGoals(section) {
      // Find the impact cards
      const impactCards = section.querySelectorAll(".impact-card")
  
      if (impactCards.length > 0) {
        // Style each impact card
        impactCards.forEach((card) => {
          card.classList.add("styled-impact-card")
  
          // Style the icon
          const icon = card.querySelector(".impact-icon")
          if (icon) {
            icon.classList.add("styled-impact-icon")
          }
  
          // Style the heading
          const heading = card.querySelector("h3")
          if (heading) {
            heading.classList.add("styled-impact-heading")
          }
  
          // Style the paragraphs
          const paragraphs = card.querySelectorAll("p")
          paragraphs.forEach((p) => {
            if (p.classList.contains("impact-progress")) {
              p.classList.add("styled-impact-progress")
            } else {
              p.classList.add("styled-impact-text")
            }
          })
        })
      } else {
        // If no impact cards are found, try to find and style paragraphs directly
        const headings = section.querySelectorAll("h3, h4, strong")
        const impactItems = []
  
        headings.forEach((heading) => {
          const text = heading.textContent.trim()
  
          if (text.includes("Connect") || text.includes("Train") || text.includes("Support") || text.includes("Create")) {
            // Create a styled impact card
            const card = document.createElement("div")
            card.classList.add("styled-impact-card")
  
            // Create icon based on the heading text
            const icon = document.createElement("div")
            icon.classList.add("styled-impact-icon")
  
            let iconClass = "fa-star"
            if (text.includes("Connect")) {
              iconClass = "fa-wifi"
            } else if (text.includes("Train")) {
              iconClass = "fa-graduation-cap"
            } else if (text.includes("Support")) {
              iconClass = "fa-building"
            } else if (text.includes("Create")) {
              iconClass = "fa-hands-helping"
            }
  
            icon.innerHTML = `<i class="fas ${iconClass}"></i>`
  
            // Create heading element
            const headingElement = document.createElement("h3")
            headingElement.classList.add("styled-impact-heading")
            headingElement.textContent = text
  
            // Find the description (next paragraph)
            const description = heading.nextElementSibling
            let descriptionElement = null
  
            if (description && description.tagName === "P") {
              descriptionElement = document.createElement("p")
              descriptionElement.classList.add("styled-impact-text")
              descriptionElement.textContent = description.textContent
  
              // Remove the original description
              description.parentNode.removeChild(description)
            }
  
            // Add elements to the card
            card.appendChild(icon)
            card.appendChild(headingElement)
            if (descriptionElement) {
              card.appendChild(descriptionElement)
            }
  
            impactItems.push({
              card: card,
              originalElement: heading,
            })
          }
        })
  
        if (impactItems.length > 0) {
          // Create a container for the impact cards
          const container = document.createElement("div")
          container.classList.add("impact-grid")
  
          // Add all cards to the container
          impactItems.forEach((item) => {
            container.appendChild(item.card)
  
            // Remove the original element
            if (item.originalElement.parentNode) {
              item.originalElement.parentNode.removeChild(item.originalElement)
            }
          })
  
          // Add the container to the section
          section.appendChild(container)
        }
      }
    }
  
    // Run the styling function
    findAndStyleContent()
  })
  