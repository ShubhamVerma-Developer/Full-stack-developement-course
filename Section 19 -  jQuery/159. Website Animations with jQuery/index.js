

$("button").on("click", function() {
  // $("h1").hide();
  // $("h1").show();
  // $("h1").toggle();
  // $("h1").fadeOut();
  // $("h1").fadeIn();
  // $("h1").fadeToggle();
  // $("h1").slideUp();
  // $("h1").slideDown();
  // $("h1").slideToggle();
  // $("h1").animate({opacity: 0.5});
  // $("h1").animate({margin: "20%"});
  $("h1").slideUp().slideDown().animate({opacity: "0.5"});
});
