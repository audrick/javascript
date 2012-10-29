$(function(){

$('#make').click(Enter_Color);

});


function Enter_Color () 
{

	var color = {};
	color.color = $('#entercolor').val();
	
}

function Insert_Color ()
{
	var d = $('<div>');
	d.addClass('color');
	d.css('background-color', color.color);
	d.text(color.name);

}


	// var color = $('#color').val();
	// number = parseInt(number);
	// for (var i = 0; i < number; i++)
	// {
	// 	var box = $('<div>');
	// 	box.text(i);
	// 	box.addClass('box');
	// 	$('#boxes').append(box);
	// }
	