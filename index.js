//navbar
window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    var navbarBrand = document.querySelector(".navbar-brand");
    var navbarImage = document.querySelector(".navbar-image");
    if (window.pageYOffset > 100) {
      navbar.classList.add("scrolled");
      navbarBrand.classList.add("scrolled");
      navbarImage.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
      navbarBrand.classList.remove("scrolled");
      navbarImage.classList.remove("scrolled");
    }
  });  
  