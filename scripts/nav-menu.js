function myFunction() {
  var x = document.getElementById("nav-menu-id");
  if (x.className === "nav-menu") {
    x.className += " responsive";
  } else {
    x.className = "nav-menu";
  }
}
