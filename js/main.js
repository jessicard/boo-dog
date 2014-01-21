function app ( jQuery ) {

  $(document).keydown(function(e) {
      var keyCode = e.which,
          arrow = {left: 37, up: 38, right: 39, down: 40};

      switch(keyCode) {
          case arrow.left:
            $(".boo").addClass("flipped walk")
            $(".boo").css({
              "left": "-=2",
            });
          break;

          case arrow.up: // up
            $(".boo").addClass("jump")
          break;

          case arrow.right: // right
            $(".boo").addClass("walk")
            $(".boo").removeClass("flipped")
            $(".boo").css({
              "left": "+=2",
            });
          break;

          case arrow.down: // down
          break;

          default: return; // exit this handler for other keys
      }
      e.preventDefault(); // prevent the default action (scroll / move caret)
  });

  $(document).on("keyup", function(e){
      $(".boo").removeClass("walk jump")
  });
}

$( document ).ready( app );
