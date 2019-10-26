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
        var bginfo='{"1":"https://i.loli.net/2018/12/27/5c2430b8f2c66.jpg","2" :"https://i.loli.net/2018/12/27/5c243681867bf.jpg","3":"https://i.loli.net/2018/12/27/5c24380c95726.jpg","4":"https://i.loli.net/2018/12/27/5c24380c7a3ae.jpg"}'
        var bg = JSON.parse(bginfo);
          var count = Object.keys(bg).length;
          var num = Math.floor((Math.random()*count)+1);
          var url = bg[num];
          $("body").css("background-image",'url("'+url+'")');
    }
    function image(){
    $("#post").find("img").addClass("img-fluid");
    }
    function colorpatt(){

    }
    function Search() {
        var self = this;
        var input = $('#search');
        var result = $('.modal-content');

        input.focus(function() {
            $('.icon-search').css('color', '#3199DB');
            result.show();
        });

        input.keyup(debounce(this.autoComplete));

        $(document).click(function(e) {
            if(e.target.id === 'search' || e.target.className === 'search_result' || e.target.className === 'search_item') {
                return;
            }
            $('.icon-search').css('color', '#CAD3DC');
            result.hide();
        });
    }

    Search.prototype.autoComplete = function() {
        var keywords = this.value.toLowerCase();

        if (keywords.length) {
            $('.icon-search').css('color', '#3199DB');
        } else {
            $('.icon-search').css('color', '#CAD3DC');
        }

        $.getJSON('../../api.json').done(function(data) {
            var html = '';
            for (var i in data) {
                var item = data[i];
                var title = item.title;
                var tags = item.tags;
                var url = item.url;

                var k = title + tags;
                if (keywords !== '' && k.toLowerCase().indexOf(keywords) >= 0) {
                    html += '<a class="search_item" href="' + item.url + '">' + item.title + '</a>';
                }
            }
            $('.modal-content').html(html);
        });
    };

    function debounce(fn, delay) {
        var timer;
        delay = delay || 120;

        return function () {
            var ctx = this;
            var args = arguments;
            var later = function() {
                fn.apply(ctx, args);
            };
            clearTimeout(timer);
            timer = setTimeout(later, delay);
        };
    }

    new Search();
