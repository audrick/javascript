
$(function(){

$('#b1').click(Add);			//.click([come up with name])
$('#b2').click(Subtract);
$('#b3').click(Divide);
$('#b4').click(Multiply);

$('#clear').click(Clear);
// $('#b1').hover(Change);
// $('#b2').hover(Change);
// $('#b3').hover(Change);
// $('#b4').hover(Change);


});

function Add()					//write functions for above actions			
{
	var a = $('#box1').val();
	a = parseInt(a);
	var b = $('#box2').val();
	b = parseInt(b);
	var c = a + b;

	var d = $('<div>');
	d.text(c);

	d.addClass('value');		//take answer and dynamically create an area for the answer, instead of hard-coding answer box in html/css
	$('#total').prepend(d);
}

function Subtract()
{
	var a = $('#box1').val();
	a = parseInt(a);
	var b = $('#box2').val();
	b = parseInt(b);
	var c = a - b;

	var d = $('<div>');
	d.text(c);

	d.addClass('value');
	$('#total').prepend(d);
}

function Divide()
{
	var a = $('#box1').val();
	a = parseInt(a);
	var b = $('#box2').val();
	b = parseInt(b);
	var c = a / b;

	var d = $('<div>');
	d.text(c);

	d.addClass('value');
	$('#total').prepend(d);
}

function Multiply()
{
	var a = $('#box1').val();
	a = parseInt(a);
	var b = $('#box2').val();
	b = parseInt(b);
	var c = a * b;

	var d = $('<div>');
	d.text(c);

	d.addClass('value');
	$('#total').prepend(d);
}

function Clear()
{
	$('#total').text("");
	$('#box1').val("");
	$('#box2').val("");
}

// function Change()
// {
// 	$('#b1').css($('#total' 'background-color', 'red'));


// // 	if (this.id = b1);
// // 	{
// // 	$('#total').css('background-color','red');
// // 	}

// }






