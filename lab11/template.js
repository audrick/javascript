$(function(){

Parse.initialize("8X6AGRxGyoygId1SwDVOFD2qAhRDgf7nPwy1znzd", "4Rd6uPVcPzI1DEqi0q7eali6DKoelbWQFppovtvg");
Dog = Parse.Object.extend("Dog");			//creating a master object

$('#b1').click(save_data);
$('#b2').click(save_data);

});

function save_data()
{

var d1 = new Dog();
var name = $('#t1').val();
var age = $('#t2').val();
d1.save({dog_name: name, dog_age: age}, {sucess: show_success});		//save additional data on one line

}

function show_success ()
{
	console.log('data saved to parse!');
}

function get_data()
{
	var query = new Parse.Query(Dog);
	query.ascending("dog_name");
	query.find({
		success: function(results) {
		  for(var i = 0; i < results.length; i++)
		  {
		  	var p = $('<p>');
		  	var name = results[i].get('dog_name');
		  	p.text(name);
		  	$('#data').prepend(p);
		  }

		},
		error: function(error) {}
	})
}
