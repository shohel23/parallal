$(function(){
    "use strict";
    
    
    $(document).ready(function(){
          $("section").height($(window).height());
          onWindowRezise();
          
          $(".obss-scroller").smoothScroller({
              duration: 2000,
              activeClass: "active"
          });
      });
        
        
        var onWindowRezise = function(){
           $(window).resize(function(evt){
               $("section").height($(window).height());
           }); 
        }
})