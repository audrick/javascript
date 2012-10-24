$(function(){
	
	$('.a').mouseenter(color_the_box);
	$('.a').mouseleave(make_it_white);
	$('#add').click(add_node);
	$('#addcolors').click(add_colors);
	$('#boxes').on('hover', '.box', make_pretty);		///.on (study this like your life depends on it!!!!

});

function make_pretty()
{
	$(this).toggleClass('alert');						//these boxes were created dynamical;y, so when toggled over
}														//none of the box characteristics work




function add_colors()
{
	var count = $('#count').val();
	count= parseInt(count);
	for(var i = 0; i < count; i++)
	{
		var box = $('<div>');							//actually creating a <div> element
		box.text(i);
		box.addClass('box');							//styling the div element with css	
		$('#boxes').append(box);
	}


}

function add_node()
{
	var element = $('#element').val();
	var node = $('<' + element + '>');		//('<') create an element in .JS
	var css = $('#css').val();
	var text = $('#text').val();
	node.addClass(css);
	node.text(text);
	$('#elements').prepend(node);				//attaches p tages to the elements
}

function color_the_box ()
{
	var color = $(this).text();
	$(this).css('background-color', color);
}

function make_it_white ()
{
	$(this).css('background-color', 'white');
}




