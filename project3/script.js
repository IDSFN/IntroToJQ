// Append a select to the header
"use strict";
var $select = $("<select></select>");
$("header").append($select);

// Get the desired infs from anchors inside the header nav
$("header nav a").each(function() {
   $a = $(this);
   $select.append(
      '<option value="' + $a.attr("href") + '" ' + 
      ($a.parent().hasClass("selected") ? 'selected':'') + '>' + $a.text() + 
      '</option>'
      );
});

$select.change(function() {
   window.location = $select.val();
});
