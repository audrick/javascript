
$(function(){

$('#add').click(add);

});

function add()
{
	var a = parseInt($('#n1').val());
	var b = parseInt($('#n2').val());
	var c = a + b;

	$('#sum').text(c);

}



