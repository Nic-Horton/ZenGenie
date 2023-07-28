document.addEventListener('DOMContentLoaded', () => {
	const favs = document.getElementById('favorites');
	function myGifs(gifs) {
		let gifHTML = gifs.map((currentGif) => {
			return `
			<div class="col-sm-6 col-md-4 mb-4">
				<div class="card ">
          <div class="card-body">
	      	  <img src="${currentGif}" class="card-img img-fluid">
          </div>
	  	  </div>
		  </div>`;
		});
		favs.innerHTML = gifHTML.join('');
	}
	var favoriteGifListJSON = localStorage.getItem('favoriteGifList');
	var favoriteGifList = JSON.parse(favoriteGifListJSON);
	myGifs(favoriteGifList);

	//Allows gifs to load first before attempting reload.
	imagesLoaded(favs, function () {
		// init Isotope after all images have loaded
		new Masonry(favs, {
			percentPosition: true,
		});
	});
});
