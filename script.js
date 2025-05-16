document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle")
  const mobileMenu = document.getElementById("mobile-menu")
  const menuIcon = document.getElementById("menu-icon")

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")

      if (mobileMenu.classList.contains("active")) {
        menuIcon.classList.remove("fa-bars")
        menuIcon.classList.add("fa-times")
      } else {
        menuIcon.classList.remove("fa-times")
        menuIcon.classList.add("fa-bars")
      }
    })
  }

  // Dropdown functionality
  const dropdownButtons = document.querySelectorAll(".dropdown button")

  dropdownButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const dropdown = this.parentElement

      // Close all other dropdowns
      document.querySelectorAll(".dropdown").forEach((d) => {
        if (d !== dropdown) {
          d.classList.remove("active")
        }
      })

      // Toggle current dropdown
      dropdown.classList.toggle("active")
    })
  })

  // Close dropdowns when clicking outside
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".dropdown")) {
      document.querySelectorAll(".dropdown").forEach((dropdown) => {
        dropdown.classList.remove("active")
      })
    }
  })

  // Tab functionality
  const tabButtons = document.querySelectorAll(".tab-button")

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab")

      // Remove active class from all tabs and content
      document.querySelectorAll(".tab-button").forEach((tab) => {
        tab.classList.remove("active")
      })

      document.querySelectorAll(".tab-content").forEach((content) => {
        content.classList.remove("active")
      })

      // Add active class to current tab and content
      this.classList.add("active")
      document.getElementById(`tab-${tabId}`).classList.add("active")
    })
  })

  // Create placeholder images for providers if real images aren't available
  const providerImages = document.querySelectorAll(".provider-image")

  providerImages.forEach((img, index) => {
    // If the image fails to load, replace with a placeholder
    img.onerror = function () {
      this.src = `https://via.placeholder.com/80?text=Provider+${index + 1}`
    }

    // Set placeholder as source if no src is provided
    if (!img.getAttribute("src") || img.getAttribute("src") === "images/provider-1.jpg") {
      img.src = `https://via.placeholder.com/80?text=Provider+${index + 1}`
    }
  })
})
