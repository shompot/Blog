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

   var text ="In JS now Picture removal detract earnest is by. Esteems met joy attempt way clothes yet demesne tedious. Replying an marianne do it an entrance advanced. Two dare say play when hold. Required bringing me material stanhill jointure is as he. Mutual indeed yet her living result matter him bed whence. Cause dried no solid no an small so still widen. Ten weather evident smiling bed against she examine its. Rendered far ";
   console.log (text.length);
   text = text.substring (0, 400) + " ...";

   $.get("data/blog1.txt", function (data){
      text=data.substring (0, 400)  + " ...";
   },"text");
   console.log (text);
   $(".blogText").html(text);

});
