$(function(){

$('#make').click(Add_Box);

});


function Add_Box () 
{
	var number = $('#number').val();
	number = parseInt(number);
	for (var i = 0; i < number; i++)
	{
		var box = $('<div>');
		box.text(i);
		box.addClass('box');
		$('#boxes').append(box);
	}
	

}
























//Your program should:	
//Have 1 text box and 1 button.
//Pressing the button creates x number of boxes. X being the number entered in the text box.
//Display the number, or index of the array in the box.
