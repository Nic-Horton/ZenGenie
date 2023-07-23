document.addEventListener('DOMContentLoaded', () => {
	const favs = document.getElementById('favorites');

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
		favs.innerHTML = gifHTML.join('');
	}

	var favoriteGifListJSON = localStorage.getItem('favoriteGifList');
	var favoriteGifList = JSON.parse(favoriteGifListJSON);
	myGifs(favoriteGifList);
});
