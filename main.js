function openMenu() {
  var menu = document.getElementById("mobileMenu");
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
  } else {
    menu.classList.add("show");
  }
}
  
function closeMenu() {
  var menu = document.getElementById("mobileMenu");
menu.classList.toggle("show"); }