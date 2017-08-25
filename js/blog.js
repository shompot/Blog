$(document).ready (function (){
   // ------------BODY HEIGHT-----------
   var screenH = $(window).height();
   var headerH = $("#header").height();
   var footerH = $("#footer").height();
   var bodyH = screenH - headerH - footerH - 2*$('#header').offset().top;

   $('#body').css ({
      height: bodyH
   });
   // ----------FOOTER POSITION---------
   $('#footer').css({
      left: $('#header').offset().left,
      width: $('#header').width(),
      bottom: $('#header').offset().top
   });
   // -------BLOG TEXT SET-------

   $('.blogTextCont').css({
      height: $('.post').height() - $('.blogTitleCont').height() - parseInt($('.blogTitleCont').css ('marginTop')) - 40,
      left: 50,
      marginLeft: $('.blogPic').width() + parseInt($('.blogPic').css('marginLeft')) + parseInt($('.blogTitleCont').css('marginLeft')),
      marginRight: "25px"
   });;

   var text ="Blog Text";
   text = text.substring (0, 400) + " ...";

   var textPromise = new Promise ( function (resolve, reject){
      $.get("data/blog1.txt", function (data){
         text = data.substring (0, 400)  + " ...";
         console.log ("Inside get: " + text);
         resolve (text);
      },"text");
   });

   console.log ("New Text: " + text);
   textPromise.then (function (response){
      $(".blogText").html(response);
   });


});
