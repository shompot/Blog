$(document).ready (function (){

   var screenH = $(window).height();
   var headerH = $("#header").height();
   var footerH = $("#footer").height();
   var bodyH = screenH - headerH - footerH - 2*$('#header').offset().top;

   $('#body').css ({
      height: bodyH
   });

   $('#footer').css({
      left: $('#header').offset().left,
      width: $('#header').width(),
      bottom: $('#header').offset().top
   });
});
