$(function(){
	$('input#add').click(searchFlickr);
	$('input#stop').click(stopPhotos);
});

var pageNumber = 1,
	i = 0,
	intervalTime;

function searchFlickr (pageNumber) {
	search = $('input#search').val();
	$.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=907ad94705c77673e0df733db7014624&text='+search+'&page='+pageNumber+'&format=json&jsoncallback=?', flickrResults);
}

function flickrResults (data) {
	photos = data.photos;
	intervalTime = setInterval(function(){getPhoto(photos)},20);
	console.log(photos.page)
}

function getPhoto () {
	var itemFarm = photos.photo[i].farm,
		itemServer = photos.photo[i].server,
		itemId = photos.photo[i].id,
		itemSecret = photos.photo[i].secret;
	i++
	var src = "http://farm"+ itemFarm +".static.flickr.com/"+ itemServer +"/"+ itemId +"_"+ itemSecret +"_m.jpg";
	var div = $('<div>').addClass('photo');
	var img = $('<img>');
	$(img).attr('src', src);
	$(div).prepend($(img));
	$('div#photos').prepend(div);
	if(i>=99){
		pageNumber++;
		i = 0;
		clearInterval(intervalTime);
		searchFlickr(pageNumber);
	}
}

function stopPhotos () {
	clearInterval(intervalTime);
}
