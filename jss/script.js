
document.addEventListener("DOMContentLoaded", () => {
  const config = window.siteConfig || {};

  // Update the browser tab title and page description.
  if (config.pageTitle) {
    document.title = config.pageTitle;
  }

  const descriptionTag = document.querySelector('meta[name="description"]');
  if (descriptionTag && config.description) {
    descriptionTag.setAttribute("content", config.description);
  }

  // Update organisation names displayed on the website.
  if (config.organizationName) {
    document.querySelectorAll(".brand-name").forEach((element) => {
      element.innerHTML = config.organizationName
        .replace(" ", " <strong>") + "</strong>";
    });
  }

  // Update contact email links.
  if (config.contactEmail) {
    document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
      link.href = `mailto:${config.contactEmail}`;
    });
  }

  // Set the current year in the footer.
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Mobile navigation.
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".primary-nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("is-open");

      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );
    });

    // Close the menu after selecting a navigation link.
    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
      });
    });

    // Close the menu when the Escape key is pressed.
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        navigation.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
      }
    });
  }
});
