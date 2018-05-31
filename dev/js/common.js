$(document).ready(function(){
    $(function() {
        var selectedClass = "";
        $(".fil-cat").click(function() {
          selectedClass = $(this).attr("data-rel");
          $("#portfolio").fadeTo(100, 0.1);
          $("#portfolio div")
            .not("." + selectedClass)
            .fadeOut()
            .removeClass("scale-anm");
          setTimeout(function() {
            $("." + selectedClass)
              .fadeIn()
              .addClass("scale-anm");
            $("#portfolio").fadeTo(300, 1);
          }, 300);
        });
      });

      Macy({
        container: '.gallery2',
        trueOrder: false,
        waitForImages: false,
        margin: 24,
        columns: 3,
        breakAt: {
            1200: 3,
            940: 2,
            520: 2,
            400: 1
        }
    });
    var Body = $('body');
    Body.addClass('preloader-site');
});

$(window).load(function() {
    $('.preloader-wrapper').fadeOut();
    $('body').removeClass('preloader-site');
});
