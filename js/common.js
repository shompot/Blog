$(document).ready (function (){
   var $header = "<div id='header'><img src='img/logo.png' id='logo'><div id='topMenu'><ul id='topMenuList'><li><a href='home.html' class='topMenuItems'>Home</a></li><li><a href='GT.html' class='topMenuItems'>General Thoughts</a></li><li><a href='PD.html' class='topMenuItems'>Personal Development</a></li><li><a href='contact.html' class='topMenuItems'>Contact</a></li></ul></div></div>";
   $("body").append ($header);
   var $body = "<div id='body'></div>";
   $("body").append ($body);
   var $footer = "<div id='footer'></div>";
   $("body").append ($footer);
   // ------------BODY HEIGHT-----------
   $('#body').css ({
      height: $(window).height() - $("#header").height() - $("#footer").height() - 2*$('#header').offset().top
   });
});
