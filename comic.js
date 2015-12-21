$(function() {
  var $blinds = $("[id^=blind"),
      SPEED = 250,
      DELAY = 1500;

  function comicAnimation() {
    $blinds.each(function(i) {
      var $blind = $blinds.eq(i);

      $blind.delay((i * DELAY) + SPEED).animate({
        top: "+=" + $blind.height(),
        height: 0
      }, SPEED);
    });
  }

  $("a").on("click", function(e) {
    e.preventDefault();

    $blinds.removeAttr("style");
    comicAnimation();
  });

  comicAnimation();
});