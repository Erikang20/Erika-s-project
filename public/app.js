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

// animation when the page is being scroll
    $(window).scroll(function () {
      if ($(window).scrollTop() > 400) {
        $(".navbar-brand a").css("color","#fff");
        $("#navigation").removeClass("animated-header");
      } else {
        $(".navbar-brand a").css("color","inherit");
        $("#navigation").addClass("animated-header");
      }
      // console.log("eeeeeeeeeeeeee");
    });

  });


      // contact us form home page//////////////////

      $("form").on("submit", function(event){
        event.preventDefault();
        if($(".messageIndex").val().length === 1){
          console.log("working?");
        }
        else if($(".messageIndex").val().length > 5){
          $("form").fadeOut(100);
          var message=$("<h1>Thank you for your message We'll be back to you as soon as possible</h1>").fadeIn(1000);
          $(".contact-form").append(message);
          console.log("moreeeeeeeee");
        }

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
      });
});

      // login form for new users////////////////////

      $("form").on("submit", function(event){
        event.preventDefault();
          if($("#inputPassword").val().length === 1){
            // $("#inputPassword").show();
            // $("#inputPassword").text("please enter a password").css("color", "red");
              console.log("bueno");
          }
            else if($("#inputPassword").val().length > 5){
              $("#userInput").fadeOut(100);
              var message=$("<h1>Thank you for join us</h1>").fadeIn(1000);
              $("form").append(message);
              // console.log("moreeeeeeeee");
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

/////login to profile page/////////
$("#login").on("click", function(){
  window.location = "about.html";
});
