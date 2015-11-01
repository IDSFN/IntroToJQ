/* Create Spoiler effect */
$("p span").hide();
$("p").append("<button>Click Me</button>");
$("button").click(function() {
   $(this).prev().show();
   $(this).remove();
});
