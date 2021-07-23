$(document).ready(function () {

  $(".menu a").click(function(){
    $(".overlay").animate({ "opacity": "0" }, 600 );
    $(".menu").addClass("idk").animate({ "opacity": "0" }, 600 );
    $(".hamburger").toggleClass("hamToggle");
    $(".menu").hide(0);
    $(".overlay").hide(0);
  })

  $(".hamburger").click(function () {
    $(".hamburger").toggleClass("hamToggle");
   if( $(".menu").hasClass('idk')){
     $(".menu").show(0);
     $(".overlay").show(0);
    $(".overlay").animate({ "opacity": "1" }, 100, function(){
      $(".menu").removeClass("idk").animate({ "opacity": "1" }, 400 );
    });
    
   }
   else{
    $(".menu").hide(0);
    $(".overlay").hide(0);
    
    $(".overlay").animate({ "opacity": "0" }, 300 );
    $(".menu").addClass("idk").animate({ "opacity": "0" }, 300 );
   }
   

   
  })

  const progressBarData = document.querySelectorAll(".progress-completed");
  
  for(var i=0; i<progressBarData.length; i++ ){
    progressBarData[i].style.width = progressBarData[i].getAttribute('data-done') + '%';
  progressBarData[i].style.opacity = 1;
  }




});


