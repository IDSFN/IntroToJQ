// Validate username
function userNameValidation() {
   var input = $(this);
   if (input.val().length <= 0)
      input.next().next().css("display", "block")
                         .children("span").text("the field is empty.");
   else if (input.val().toLowerCase() === "fuck")
      input.next().next().css("display", "block")
                         .children("span").text("Don't purse.");
   else {
      input.next().next().fadeOut(1000);
      return true;
   }
}

$("form #username")
   .focus(userNameValidation)
   .keyup(userNameValidation);

// Validate password
function passwordValidation() {
   var input = $(this);
   if (input.val().length <= 8)
      input.next().next().css("display", "block")
                         .children("span").text("it must be greater than 8.");
   else {
      input.next().next().fadeOut(1000);
      return true;
   }
}

$("form #password")
   .focus(passwordValidation)
   .keyup(passwordValidation)
   .keyup(CpasswordValidation);


// Confirm password
function CpasswordValidation() {
   var passwd = $("form #password");
   var cPasswd = $("form #Cpassword");

   if (cPasswd.val() !== passwd.val())
      cPasswd.next().next().css("display", "block")
                         .children("span").text("password doesn't match.");
   else {
     cPasswd.next().next().fadeOut(1000);
      return true;
   }

   console
}

$("form #Cpassword")
   .focus(CpasswordValidation)
   .keyup(CpasswordValidation);