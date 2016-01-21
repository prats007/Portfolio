$(window).scroll(function(){
            var target1 = $("#home").offset().top;
            var target2 = $("#aboutme").offset().top;
            var target3 = $("#portfolio").offset().top;
            ("<p>Hello</p>").appendTo(".card");
            if ($(window).scrollTop() >= target2) {
              alert("Hello! I am an alert box!!");
              $("#nav-about").addClass("active");
              $("#nav-home").removeClass("active");
              $("#nav-portfolio").removeClass("active");
            }/*
            if ($(window).scrollTop() >= target2 && $(window).scrollTop() < target3) {
                alert("Hello! I am an alert box!!");
              $("#nav-about").addClass("active");
              $("#nav-home").removeClass("active");
              $("#nav-portfolio").removeClass("active");
              alert("Hello! I am an alert box!!");
            }  
            if ($(window).scrollTop() >= target3) {
                alert("Hello! I am an alert box!!");
              $("#nav-portfolio").addClass("active");
              $("#nav-home").removeClass("active");
              $("#nav-about").removeClass("active");
              alert("Hello! I am an alert box!!");
            } */
          });