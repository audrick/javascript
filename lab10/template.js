$(function(){

	$('#add').click(search_flickr);

});

function search_flickr()
{
	var search = $('#search').val();	//pull out the search values here

	$.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1b9cc35cd3d92745a666307270cc4ed8&tags='+ search +' &format=json&jsoncallback=?', flickrResults);
	
}

function flickrResults(data)
{
	$.each(data.photos.photo, getPhoto);				//.each	is similar to the FOR loop
}

function getPhoto(index, item)							// item here is the OBJECT
{
var src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
var div =$('<div>');
div.addClass('photo');							//constructing a little DOM to construct photos
var img = $('<img>');
img.attr('src', src);
div.append(img);
$('#photos').prepend(div);
}


// http://farm9.static.flickr.com/8333/8103136340_e24b6d9174_m.jpg
		// 9 (item.farm) , 8333 (item.server)  , (item.id)  , (item.secret)  