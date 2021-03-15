
 function myFunction(input){
  if(input ==1){
    console.log("errrrrrrrrrr1");
    document.getElementById("canvas").style.backgroundImage = "url('Web_1920_2.jpg')";
    document.getElementById("canvas").style.height = "52vw";
  }else if(input ==2){
    console.log("errrrrrrrrrr2");
    document.getElementById("canvas").style.backgroundImage = "url('Web_1920_3.jpg')";
    document.getElementById("canvas").style.height = "52vw";
  }else if(input ==3){
    console.log("errrrrrrrrrr2");
    document.getElementById("canvas").style.backgroundImage = "url('Web_1920_5.jpg')";
    document.getElementById("canvas").style.height = "52vw";
  }else if(input ==4){
    console.log("errrrrrrrrrr2");
    document.getElementById("canvas").style.backgroundImage = "url('Web_1920_4.jpg')";
    document.getElementById("canvas").style.height = "52vw";
  }
 }
  
 $(window).on("load",function(){
  $(".loader-wrapper").fadeOut("slow");
});

$(document).ready(function(){
  $(".btn #play-btn").on('click', function(){
    $(this).hide();
    $("#pause-btn").fadeIn();
    $("#music")[0].play();
  });
  $(".btn #pause-btn").on('click', function(){
    $(this).hide();
    $("#play-btn").fadeIn();
    $("#music")[0].pause();
  });
});