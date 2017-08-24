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
/*
   var text;
   $.get( '../data/blog1.txt', function (){
      text = data;
   } , 'text');
   console.log (text);
   */
});
