
$(document).ready(function(){
  getHitokoto();
  bgImg();
  image();
  $("#form").submit(function(getsubmit){
    $.getJSON("/api.json",function(search){


    });
  });
});

    function getHitokoto() {
        $.getJSON("https://api.imjad.cn/hitokoto/?charset=utf-8&encode=json", function(data) {
            $("#hitokoto").html('<p class="rounded shadow text-white" style="background-color: #272822;"> >'+data.hitokoto+"</p>");
        });
    }
    function bgImg(){
        $.getJSON("/assets/bg.json",function(bg){
          var count = Object.keys(bg).length;
          var num = Math.floor((Math.random()*count)+1);
          var url = bg[num];
          $("body").css("background-image",'url("'+url+'")');
        });
    }
function image(){
    $("#post").find("img").addClass("img-fluid");
}
