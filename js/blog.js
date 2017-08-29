$(document).ready (function (){
   // ------------BODY HEIGHT-----------
   $('#body').css ({
      height: $(window).height() - $("#header").height() - $("#footer").height() - 2*$('#header').offset().top
   });
   // -----------POSTS CREATION-----------
   var $post = "<div class='post'><div class='blogPic'></div><div class='blogTitleCont'><h1 class='blogTitle'>Title of Post</h1></div><div class='blogTextCont'><p class='blogText'></p></div></div>";
   $("#body").append($post);
   $("#body").append($post);
   $("#body").append($post);
   // -------BLOG TEXT SET-------------
   var i;
   var text = "Blog Text Here ...";
   var texts = [];
   var textPromise;

   // Set default text and request the actual text
   i = 1;

   $(".blogText").each (function (){
      $(this).html(i + " " + text);

      var link = "https://raw.githubusercontent.com/shompot/Blog/master/data/blog";
      link += i + ".txt";

      textPromise = new Promise ( function (resolve, reject){
         $.get(link, function (data){
            text = data.substring (0, 400)  + " ...";
            texts.push (text);
            resolve (text);
         },"text");
      });

      i ++;
   });

   // When resolved set the actual text to blog text preview
   i = 0;

   textPromise.then (function (response){
         $(".blogText").each (function (){
            $(this).html(texts[i]);
            console.log ("Succeeded to assign the actual blog text number " + (i+1));
            i++;
         });
      }, function(){
         $(".blogText").each (function (){
            console.log ("Failed to assign the actual blog text");
         });
   });

   //-------------------------------------------
});
