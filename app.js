
// parallax section
$(document).ready(function(){

  $(window).trigger('scroll');

  $('.parallax-window').load(function(parallax){
    // naturalWidth: 600,
    // naturalHeight: 200
  });

    console.log("it works");

  $(window).load(function(){

  	$("#preloader").fadeOut("slow");
    console.log("aaaaaaaakkkkkkkkkkkkkk");

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
  });

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

// $(document).onclick

// $.ajax({
//   url: "https://developers.facebook.com/docs/graph-api",
//   method: "GET",
//   success: function(data) {
//     alert(JSON.stringify(data));
//   }
// });

//////checks the person login status
//   FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
// });
// console.log("works");
  // This is called with the results from from FB.getLoginStatus().
 // function statusChangeCallback(response) {
 //   console.log('statusChangeCallback');
 //   console.log(response);
   // The response object is returned with a status field that lets the
   // app know the current login status of the person.
   // Full docs on the response object can be found in the documentation
   // for FB.getLoginStatus().
  //  if (response.status === 'connected') {
     // Logged into your app and Facebook.
  //    testAPI();
  //  } else if (response.status === 'not_authorized') {
     // The person is logged into Facebook, but not your app.
  //    document.getElementById('status').innerHTML = 'Please log ' +
  //      'into this app.';
  //  } else {
     // The person is not logged into Facebook, so we're not sure if
     // they are logged into this app or not.
 //     document.getElementById('status').innerHTML = 'Please log ' +
 //       'into Facebook.';
 //   }
 // }

 // This function is called when someone finishes with the Login
 // Button.  See the onlogin handler attached to it in the sample
 // code below.
 // function checkLoginState() {
 //   FB.getLoginStatus(function(response) {
 //     statusChangeCallback(response);
 //   });
 // }
 //
 // window.fbAsyncInit = function() {
 // FB.init({
 //   appId      : '{1531192833856203}',
 //   cookie     : true,  // enable cookies to allow the server to access
 //                       // the session
 //   xfbml      : true,  // parse social plugins on this page
 //   version    : 'v2.5' // use graph api version 2.5
 // });

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
 //
 // FB.getLoginStatus(function(response) {
 //   statusChangeCallback(response);
 // });
 //
 // };

 // Load the SDK asynchronously
 // (function(d, s, id) {
 //   var js, fjs = d.getElementsByTagName(s)[0];
 //   if (d.getElementById(id)) return;
 //   js = d.createElement(s); js.id = id;
 //   js.src = "//connect.facebook.net/en_US/sdk.js";
 //   fjs.parentNode.insertBefore(js, fjs);
 // }(document, 'script', 'facebook-jssdk'));

 // Here we run a very simple test of the Graph API after login is
 // successful.  See statusChangeCallback() for when this call is made.
 // function testAPI() {
 //   console.log('Welcome!  Fetching your information.... ');
 //   FB.api('/me', function(response) {
 //     console.log('Successful login for: ' + response.name);
 //     document.getElementById('status').innerHTML =
 //       'Thanks for logging in, ' + response.name + '!';
 //   });
 // }



//////////////////////////////////////////
//   FB.getLoginStatus(function(response) {
//   if (response.status === 'connected') {
//     console.log('Logged in.');
//   }
//   else {
//     FB.login();
//   }
// });
//
// console.log("yesssssssssss");
