$( document ).ready(function() {
  const body = document.body;
  const collapseButton = document.querySelector(".employee-menu .collapse-btn");
  const isCollapsed = "collapsed";
  const menuLinks = document.querySelectorAll(".employee-menu a");
  const toggleMobMenu = document.querySelector(".toggle-mob-menu");
  const articleBadges = document.getElementsByClassName("article-badge-button");
  const gridArticles = document.querySelectorAll(".content-grid article");
  
  var contentList = [ /* pretend these are retrieved from somewhere else for now */
    {title:"Working From Home", subtitle:"Comfort is Key", img_path:"assets/man_on_laptop.jpg", link:"#0"},
    {title:"Teamwork", subtitle:"There's no I here", img_path:"assets/hands-over-wooden-table.jpg", link:"#0"},
    {title:"The Numbers", subtitle:"What could they mean?", img_path:"assets/stock-exchange-board.jpg", link:"#0"},
    {title:"Data Protection", subtitle:"Dont Get Phished", img_path:"assets/caution-cone-on-enter-key.jpg", link:"#0"},
    {title:"Reminder: Upcoming potluck lunch!", subtitle:"Please let HR know what you will be bringing", img_path:"assets/potluck-lunch.jpg", link:"#0"},
    {title:"Data Visualization with Paper", subtitle:"Making 2D Cool Again", img_path:"assets/working_with_data_sheets.jpg", link:"#0"}
  ];
 
  var articleContent = {
    content: []
  };

  contentList.map(function(item) {
    articleContent.content.push({
      "title" : item.title,
      "subtitle" : item.subtitle,
      "img_path" : item.img_path,
      "link" : item.link
    });
  })

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

  /* populate the content-grid with the spoofed json objects */
  var i = 0;
  for (const article of gridArticles) {
    var ac = articleContent.content;
    var markup = '\
    <a href="' + ac[i].link + '"> \n\
    <img class="article-photo-header" src="' + ac[i].img_path + '" alt="Potluck lunch" width=700px> \n\
    </a> \n\
  <div class="text-overlay"> \n\
    <h4>' + ac[i].title + '</h4> \n\
    <h5>' + ac[i].subtitle + '</h5> \n\
  </div>';
    article.innerHTML = markup + article.innerHTML; /* We need to prepend not append */

    console.log(i);
    console.log(markup);
    console.log(article.innerHTML);
    i++;
  }
});