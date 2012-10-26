
$(function(){

$('#Add').click(function(){
      var value1 = $('Number1').val();
      var value2 = $('Number2').val();
      var sum = parseInt(value1, 10) + parseInt(value2, 10);
      $('#Sum').html(sum);
   });
});


