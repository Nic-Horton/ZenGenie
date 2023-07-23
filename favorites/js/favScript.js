document.addEventListener('DOMContentLoaded', () => {
	const quoteContainer = document.getElementById('favoriteQuotes');
	const gifContainer = document.getElementById('favoriteGifs');

	function myQuotes(quotes) {
		let quoteHTML = quotes.map((currentQuote) => {
			return `<div class="card" style="width: 18rem;">
      <div class="card-body">
        ${currentQuote}
      </div>
    </div>`;
		});
		quoteContainer.innerHTML = quoteHTML.join('');
	}

	var favoriteListJSON = localStorage.getItem('favoriteList');
	var favoriteList = JSON.parse(favoriteListJSON);
	myQuotes(favoriteList);

	function myGifs(gifs) {
		let gifHTML = gifs.map((currentGif) => {
			return `
			<div class=col>
				<div class="card gif-card-specifics">
        	<img src="${currentGif}" class="card img-fluid">
    	</div>
		</div>`;
		});
		gifContainer.innerHTML = gifHTML.join('');
	}

	var favoriteGifListJSON = localStorage.getItem('favoriteGifList');
	var favoriteGifList = JSON.parse(favoriteGifListJSON);
	myGifs(favoriteGifList);
});
