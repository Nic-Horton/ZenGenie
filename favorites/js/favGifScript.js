function myGifs(gifs) {
	let gifHTML = gifs.map((currentGif) => {
		return `
			<div class="col-sm-6 col-lg-4 mb-4">
				<div class="card ">
          <div class="card-body">
	      	  <img src="${currentGif}" class="card-img img-fluid">
          </div>
	  	  </div>
		  </div>`;
	});
	const favs = document.getElementById('favorites');
	favs.innerHTML = gifHTML.join('');
}

function displayFavGifs() {
	var favoriteGifListJSON = localStorage.getItem('favoriteGifList');
	var favoriteGifList = JSON.parse(favoriteGifListJSON);
	myGifs(favoriteGifList);
}
displayFavGifs();
