$( document ).ready(function() {
  const body = document.body;
  const collapseButton = document.querySelector(".employee-menu .collapse-btn");
  const isCollapsed = "collapsed";
  const menuLinks = document.querySelectorAll(".employee-menu a");
  const toggleMobMenu = document.querySelector(".toggle-mob-menu");
  const articleBadges = document.getElementsByClassName("article-badge-button");
  const gridArticles = document.querySelectorAll(".content-grid article");
  const images = document.getElementsByTagName("img");
  const logos = document.getElementsByClassName("logo");


  var contentList = [ /* pretend these are retrieved from somewhere else for now */
    {title:"Working From Home", subtitle:"Comfort is Key", img_path:"assets/man_on_laptop.jpg", link:"#0"},
    {title:"Teamwork", subtitle:"There's no I here", img_path:"assets/hands-over-wooden-table.jpg", link:"#0"},
    {title:"The Numbers", subtitle:"What could they mean?", img_path:"assets/stock-exchange-board.jpg", link:"#0"},
    {title:"2 New HR Positions", subtitle:"Applications due September 1", img_path:"assets/people_shaking_hands.jpg", link:"#0"},
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
      ? this.setAttribute("aria-expanded", "false")
      : this.setAttribute("aria-expanded", "true");
    this.getAttribute("aria-label") == "collapse menu"
      ? this.setAttribute("aria-label", "expand menu")
      : this.setAttribute("aria-label", "collapse menu");
    body.classList.toggle(isCollapsed);
  });

  toggleMobMenu.addEventListener("click", function() {
    this.getAttribute("aria-expanded") == "true" 
        ? this.setAttribute("aria-expanded", "false")
        : this.setAttribute("aria-expanded", "true");
    this.getAttribute("aria-label") == "open menu"
        ? this.setAttribute("aria-label", "close menu")
        : this.setAttribute("aria-label", "open menu");
    body.classList.toggle("mob-menu-opened");
  });

  for (const link of menuLinks) {
    link.addEventListener("mouseenter", function() {
      this.setAttribute("title", this.textContent)
    });
  }

  for (const image of images) {
    image.addEventListener("mouseenter", function() {
      this.setAttribute("title", this.textContent)
    });
  }

  for (const logo of logos) {
    logo.addEventListener("mouseenter", function() {
      this.textContent = "Landfall Logo";
    });
  }

  /* populate the content-grid with the spoofed json objects */
  /* this needs to occur before events are attached to the buttons nested in articles */
  var i = 0;
  for (const article of gridArticles) {
    var ac = articleContent.content;
    var markup = '\
    <a href="' + ac[i].link + '"> \n\
    <img class="article-photo-header" loading="lazy" src="' + ac[i].img_path + '" title="' + ac[i].title +'"> \n\
    <div class="text-overlay"> \n\
    <h4>' + ac[i].title + '</h4> \n\
    <h5>' + ac[i].subtitle + '</h5> \n\
    </div> \n\
    </a>';
    
    article.innerHTML = markup + article.innerHTML; 
    i++;
  }
  
  for (const badge of articleBadges) {
    badge.addEventListener("click", function() {
      this.getAttribute("aria-label") == "badge button orange"
        ? (this.setAttribute("aria-label", "badge button blue"), $(this).find('svg').css("fill", "blue"))
        : (this.setAttribute("aria-label", "badge button orange"), $(this).find('svg').css("fill", "orange"));
    });
  }


});