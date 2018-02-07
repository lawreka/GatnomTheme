$(document).ready(function(){

 // menu functionality
  $("#hamburger-menu").on("click", function(){
    $("#menu-container").toggleClass("hidden");
    $("#homepageposts").toggleClass("hidden");
    $(".pagination").toggleClass("hidden");
    $("#footer").toggleClass("hidden");
    return false;
  });

});
