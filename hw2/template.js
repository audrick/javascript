var selected_color = null;					//global variable

$(function(){

	$('#add').click(add_colors);
	$('#colors').on('hover', '.color', change_bg);
	$('#colors').on('dblclick', '.color', delete_color);
	$('#colors').on('click', '.color', toggle_select_color);
	$('#left').click(left);
	$('#right').click(right);

});

function add_colors()
{
	var colors = $('#colors_string').val();
	colors = colors.split(', ');				//this lines turns it into an array (watch the spacing)
	for(var i = 0; i < colors.length; i++)		// 'For' Loop
	{
		var color = $('<div>');					//creates a color div, but it is floating out in space somewhere
		color.addClass('color');
		color.css('background-color', colors[i])		// i = 0
		$('#colors').append(color);					// append places the div (color) at the bottom
	}
}

function change_bg()
{
	var color = $(this).css('background-color');  			// the 'this' function tells you which box you are hovering over
	$('#colors_string').css('background-color', color);
}

function delete_color()									// double-click the box to remove the color box
{
	$(this).remove();									//the color box that you double-clicked on
}														

function toggle_select_color()							
{
	if(selected_color != this)						//initially, the selected_color is null (no color)
	{
		$(selected_color).removeClass('selected');  


		selected_color = this;
		$(selected_color).addClass('selected');
	}
	else
	{
		$(selected_color).removeClass('selected');		
		selected_color = null;
	}
}

function left()
{
	if(selected_color != null)
	{
		var previous = $(selected_color).prev();
		previous.before(selected_color);			// before + after is different than prepend + append
	}
}

function right()
{
	if(selected_color != null)
	{
		var next = $(selected_color).next();
		next.after(selected_color);
	}
}