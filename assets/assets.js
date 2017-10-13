$(document).ready(function(){

  $("input[id=search]").change(function(){
    var submit = $(this).val();
    var $output = "";
      if (submit != "") {
        $.get(/feed.xml,function(data){
          $(data).find('channel').find('item').each(function(index, ele){
          var titles = $(ele).find('title').text();
          var links = $(ele).find('link').text();

      });
      });
  };
});
});

new Vue({
  el: '#editor',
  data: {
    input: '# hello'
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true })
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value
    }, 300)
  }
})
