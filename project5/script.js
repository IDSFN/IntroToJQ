var color = "rgb(0, 0, 0)";
var ctx = $("canvas")[0].getContext("2d");
var draw = false;

$(".palette li").click(function() {
   $this = $(this);
   color = $this.css("background-color");

   $this.toggleClass("selected");
   $this.siblings().removeClass("selected");
});

$("canvas")
   .mousedown(function(e) {
      draw = true;
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.strokeStyle = color;
      ctx.moveTo(e.offsetX, e.offsetY);
   })
   .mousemove(function(e) {
      if (draw) {
         ctx.lineTo(e.offsetX, e.offsetY);
         ctx.stroke();
      }
   })
   .mouseup(function() {
      draw = false;
   })
   .mouseleave(function() {
      draw = false;
   });;
