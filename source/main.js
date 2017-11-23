$('#movies').on('click', function(){
	$('#block').empty();
	$('#block').html("\
	<h1>My Favourite Movies</h1><br>\
	<a href='http://www.imdb.com/title/tt0371724/' target='_blank'><img src='source/0.jpg' title='The Hitchhikers Guide to the Galaxy'></a>\
	<a href='http://www.imdb.com/title/tt0088763/' target='_blank'><img src='source/1.jpg' title='Back to the future'>\
	<a href='http://www.imdb.com/title/tt2058673/' target='_blank'><img src='source/2.jpg' title='Point Break'>\
	<a href='http://www.imdb.com/title/tt1058017/' target='_blank'><img src='source/3.jpg' title='Invention of Lying'>\
	");
})