document.addEventListener('DOMContentLoaded', () => {
	const favs = document.getElementById('favorites');

	function myQuotes(quotes) {
		let quoteHTML = quotes.map((currentQuote) => {
			return `<div class="col-sm-6 col-lg-4 mb-4">
				<div class="card">
      		<div class="card-body">
        		${currentQuote}
      		</div>
    		</div>
			</div>`;
		});
		favs.innerHTML = quoteHTML.join('');
	}

	var favoriteListJSON = localStorage.getItem('favoriteList');
	var favoriteList = JSON.parse(favoriteListJSON);
	myQuotes(favoriteList);
});
