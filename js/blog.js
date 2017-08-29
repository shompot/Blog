$(document).ready (function (){
   // ------------BODY HEIGHT-----------
   $('#body').css ({
      height: $(window).height() - $("#header").height() - $("#footer").height() - 2*$('#header').offset().top
   });
   // ----------FOOTER POSITION---------
   $('#footer').css({
      left: $('#header').offset().left,
      width: $('#header').width(),
      bottom: $('#header').offset().top
   });
   // -----------POSTS CREATION-----------
   var $post = "<div class='post'><div class='blogPic'></div><div class='blogTitleCont'><h1 class='blogTitle'>Title of Post</h1></div><div class='blogTextCont'><p class='blogText'></p></div></div>";
   $("#body").append($post);
   $("#body").append($post);
   $("#body").append($post);
   // -------BLOG TEXT CONTAINER---------
   $('.blogTextCont').css({
      height: $('.post').height() - $('.blogTitleCont').height() - parseInt($('.blogTitleCont').css ('marginTop')) - 40,
      left: 50,
      marginLeft: $('.blogPic').width() + parseInt($('.blogPic').css('marginLeft')) + parseInt($('.blogTitleCont').css('marginLeft')),
      marginRight: "25px"
   });
   // -------BLOG TEXT SET-------------
   var i = 1;
   var text;

   text ="Blog Text Here ...";

   $(".blogText").each (function (){
      $(this).html(i + " " + text);
      i++;
   });

   var textPromise = new Promise ( function (resolve, reject){
      $.get("data/blog1.txt", function (data){
         text = data.substring (0, 400)  + " ...";
         console.log ("Inside get: " + text);
         resolve (text);
      },"text");
   });

   console.log ("New Text: " + text);

   textPromise.then (function (response){
         $(".blogText").each (function (){
            $(this).html(response);
            console.log ($(this).html(););
         });
      }, function(){
         $(".blogText").each (function (){
            $(this).html(response);
      });
   });


});
