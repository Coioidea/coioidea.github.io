
$(document).ready(function(){
  $("#form").submit(function(getsubmit){
    $.getJSON("/api.json",function(search){
      for (var i = 0; i < Object.key(search).length; i++) {
        while (smit) {

        }
      }
    });
  });
});

 function getsubmit(){
   global smit = document.getElementsByID('form');
   return smit;
 }

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
