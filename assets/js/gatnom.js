$(document).ready(function(){
  $("#hamburger-menu").on("click", function(){
    $("#nav-menu-container").toggleClass("disappeared");
    $(".hamburgermenu").toggleClass("disappeared");
    return false;
  });
});
