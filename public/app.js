$( document ).ready(function() {
  const body = document.body;
  const collapseButton = document.querySelector(".employee-menu .collapse-btn");
  const isCollapsed = "collapsed";
  const menuLinks = document.querySelectorAll(".employee-menu a");
  const toggleMobMenu = document.querySelector(".toggle-mob-menu");
  const articleBadges = document.getElementsByClassName("article-badge-button");

  collapseButton.addEventListener("click", function() {
    this.getAttribute("aria-expanded") == "true"
      ? (this.setAttribute("aria-expanded", "false"), console.log("menu collapsed"))
      : this.setAttribute("aria-expanded", "true");
    this.getAttribute("aria-label") == "collapse menu"
      ? this.setAttribute("aria-label", "expand menu")
      : (this.setAttribute("aria-label", "collapse menu"), console.log("menu opened"));
    body.classList.toggle(isCollapsed);
  });

  toggleMobMenu.addEventListener("click", function() {
    this.getAttribute("aria-expanded") == "true" 
        ? (this.setAttribute("aria-expanded", "false"), console.log("mob-menu collapsed"))
        : this.setAttribute("aria-expanded", "true");
    this.getAttribute("aria-label") == "open menu"
        ? this.setAttribute("aria-label", "close menu")
        : (this.setAttribute("aria-label", "open menu"), console.log("mob-menu opened"));
    body.classList.toggle("mob-menu-opened");
  });

  for (const link of menuLinks) {
    link.addEventListener("mouseenter", function() {
      body.classList.contains(isCollapsed) &&
      window.matchMedia("(min-width: 768px)").matches
        ? this.setAttribute("title", this.textContent)
        : this.removeAttribute("title");
    });
  }
 
  for (const badge of articleBadges) {
    console.log("badge");
    badge.addEventListener("click", function() {
      this.getAttribute("aria-label") == "badge button orange"
        ? (this.setAttribute("aria-label", "badge button blue"), $(this).find('svg').css("fill", "blue"))
        : (this.setAttribute("aria-label", "badge button orange"), $(this).find('svg').css("fill", "orange"));
    });
  }
});