$( document ).ready(function() {
  const body = document.body;
  const collapseButton = document.querySelector(".employee-menu .collapse-btn");
  const isCollapsed = "collapsed";
  const menuLinks = document.querySelectorAll(".employee-menu a");
  const toggleMobMenu = document.querySelector(".toggle-mob-menu");


  collapseButton.addEventListener("click", function() {
      this.getAttribute("aria-expanded") == "true"
        ? this.setAttribute("aria-expanded", "false")
        : this.setAttribute("aria-expanded", "true");
      this.getAttribute("aria-label") == "collapse menu"
        ? this.setAttribute("aria-label", "expand menu")
        : this.setAttribute("aria-label", "collapse menu");
      body.classList.toggle(isCollapsed);
  });

  toggleMobMenu.addEventListener("click", function() {
      this.getAttribute("aria-expanded") == true 
          ? this.setAttribute("aria-expanded", "false")
          : this.setAttribute("aria-expanded", "true");
      this.getAttribute("aria-label") == "open menu"
          ? this.setAttribute("aria-label", "close menu")
          : this.setAttribute("aria-label", "open menu")
  });


  for (const link of menuLinks) {
      link.addEventListener("mouseenter", function() {
        body.classList.contains(isCollapsed) &&
        window.matchMedia("(min-width: 768px)").matches
          ? this.setAttribute("title", this.textContent)
          : this.removeAttribute("title");
      });
  }
});