function myFunction() {
  var x = document.getElementById("nav-menu-id");
  if (x.className === "nav-menu") {
    x.className += " responsive";
  } else {
    x.className = "nav-menu";
  }
}

function openDropdown() {
  if (window.innerWidth > 767) {
    document.getElementById("dropdown").style.visibility = "visible";
    document.getElementById("menu-projects").style.opacity = "100%";
  }
}

function closeDropdown() {
  if (window.innerWidth > 767) {
    document.getElementById("dropdown").style.visibility = "hidden";
    document.getElementById("menu-projects").style.opacity = "60%";
  }
}
