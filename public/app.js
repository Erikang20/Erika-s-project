// parallax section
$(document).ready(function(){
  // const Jump = new Jump();

  $(window).trigger('scroll');

  $('.parallax-window').load(function(parallax){
    // naturalWidth: 600,
    // naturalHeight: 200
  });

    console.log("it works");

  $(window).load(function(){
  	$("#preloader").fadeOut("slow");
    console.log("aaaaaaaakkkkkkkkkkkkkk");

// animation when the page is being scroll
    $(window).scroll(function () {
      if ($(window).scrollTop() > 400) {
        $(".navbar-brand a").css("color","#fff");
        $("#navigation").removeClass("animated-header");
      } else {
        $(".navbar-brand a").css("color","inherit");
        $("#navigation").addClass("animated-header");
      }
      console.log("eeeeeeeeeeeeee");
    });

  });




// smooth transition
$.support.transition = true;


// login form for new users////////////////////

$("form").on("submit", function(event){
  event.preventDefault();
    if($("#inputPassword").val().length===1){
      // $("#inputPassword").show();
      // $("#inputPassword").text("please enter a password").css("color", "red");
        console.log("siiiiiiiii");
    }
      else if($("#inputPassword").val().length>5){
        $("#userInput").fadeOut(100);
        var message=$("<h1>Thank you for join us</h1>").fadeIn(1000);
        $("form").append(message);
        console.log("moreeeeeeeee");
      }
  });

      $("#inputPassword").on("keypress", function(event){
        $(".error").hide();
            if (($("#inputPassword").val().length) < 6){
              $("#inputEmail1").text("Your password should be longer than 6 characters").css("color","blue");
            }
              else{
                $("form-control").text("");
                console.log("final");

              }
      });


// storage new user's information
      var name;
      var userName;
      var email;

        var nameInput= document.getElementById("form");
        var userNameInput= document.getElementById("userName");
        var emailInput= document.getElementById("inputEmail1");

          function insert ( ) {
           name.push( nameInput.value );
           userName.push( userNameInput.value );
           email.push( emailInput.value );

         clearAndShow();

         console.log("input works");
        }

        function clearAndShow () {
  // Clear our fields
  nameInput.value = "";
  userNameInput.value = "";
  emailInput.value = "";

  // Show our output
  messageBox.innerHTML = "";

  messageBox.innerHTML += "name: " + name.join(", ") + "<br/>";
  messageBox.innerHTML += "userNameInput: " + userNameInput.join(", ") + "<br/>";
  messageBox.innerHTML += "emailInput: " + emailInput.join(", ");
}

// end storage user's information


// contact us form home page//////////////////

        $("form").on("submit", function(event){
          event.preventDefault();

              if($(".messageIndex").val().length===1){

              }
                  else if($(".messageIndex").val().length>5){
                    $("form").fadeOut(100);
                    var message=$("<h1>Thank you for your message We'll be back to you as soon as possible</h1>").fadeIn(1000);
                    $(".contact-form").append(message);
                    console.log("moreeeeeeeee");
                  }
                      else{
                        $(".form-control").text("");
                        console.log("final222222");

                      }

        });
});

//////animations///////

$("img").mouseenter(function(event){
  event.preventDefault();

      $(this).addClass("animated rubberBand");
      $("#jack, #erika, #cory").addClass("animated rubberBand");
        event.preventDefault();
            console.log("animated!!!");
          });

        $("img").mouseleave(function(){
              event.preventDefault();
              $(this).find("img").text("mouseleave");
              console.log("mouse leave");
        });

        var Firebase =require("firebase");

        var ref= new Firebase("https://erikaproject2.firebaseapp.com/index.html");
          ref.authWithOAuthPopup("facebook", function(error, authData) {
            if (error) {
              console.log("Login Failed!", error);
              } else {
                console.log("Authenticated successfully with payload:", authData);
                }
          });


          // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '{1531192833856203}',
    cookie     : true,  // enable cookies to allow the server to access
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.5' // use graph api version 2.5
  });

  // Now that we've initialized the JavaScript SDK, we call
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6&appId=1531192833856203";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }




  /* ========================================================================= */
  /*	Menu item highlighting
  /* ========================================================================= */
  // $(document).ready(function(){

  // $('#nav').singlePageNav({
  //   offset: jQuery('#nav').outerHeight(),
  //   filter: ':not(.external)',
  //   speed: 2000,
  //   currentClass: 'current',
  //   easing: 'easeInOutExpo',
  //   updateHash: true,
  //   beforeStart: function() {
  //     console.log('begin scrolling');
  //   },
  //   onComplete: function() {
  //     console.log('done scrolling');
  //   }
  // });
