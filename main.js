$(document).ready(function () {
    $("h1").hide();
    $("h2").hide();
    $(".name").click(function() {
      $(".arrow").click(function(){
        $(".input-div").hide(); 
        var str = $(".name").val();
        $("h1").show(); 
        
        if(str.length < 20){
          $("h2").show();
          $("h1").text(str);
           $("h1").append('!');
        }
        else{
          $("h1").text("Too long...");
        }
      });
    });
  });