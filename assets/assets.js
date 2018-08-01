'use strict';
$(document).ready(function(){
  getHitokoto();
  bgImg();
  image();
});

    function getHitokoto() {

        $.ajax('https://api.lwl12.com/hitokoto/v1?encode=realjson&charset=utf-8', {
            dataType: 'json'
        }).done(function (data) {
            $("#hitokoto").html('<p class="rounded shadow text-white" style="background-color: #272822;"> >'+data.text+"</p>");
        });
        
    }
    function bgImg(){
        var bginfo='{"1":"http://datast.qiniudn.com/20180608/be098f4a5a77c320.jpg","2" :"http://datast.qiniudn.com/20180608/665632114303e2af.jpg","3":"http://datast.qiniudn.com/20180608/ff4bb44b62603797.jpg"}'
        var bg = JSON.parse(bginfo);
          var count = Object.keys(bg).length;
          var num = Math.floor((Math.random()*count)+1);
          var url = bg[num];
          $("body").css("background-image",'url("'+url+'")');
    }
    function image(){
    $("#post").find("img").addClass("img-fluid");
    }
