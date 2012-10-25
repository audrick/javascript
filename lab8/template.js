 var counter = 0;				// Global Variable


$(function(){

	setTimeout(display_text, 3000);
	setInterval(display_more, 1000);


});

function display_more()
{
	var d=$('<div>');
	// d.text(counter);   		//if you do not want counter
	d.addClass('funky');
	$('#test').prepend(d);
	counter ++;
	var color1 = counter % 255;
	var color2 = (counter + counter) % 255;
	var color3 = (counter * counter) % 255;
	var color_string = 'rgb('+ color1 +' , '+ color2 +', '+ color3 +')';
	d.css('background-color', color_string);
}

function display_text()
{
	$('#test').text('hello world');
}