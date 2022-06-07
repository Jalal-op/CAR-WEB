$('#blogCarousel').carousel({
    interval: 5000
});
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});
$(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );