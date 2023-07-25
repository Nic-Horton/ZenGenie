document.addEventListener('DOMContentLoaded', () => {
	function myQuotes(quotes) {
		let quoteHTML = quotes.map((currentQuote) => {
			return `<div class="col-sm-6 col-md-4 mb-4">
				<div class="card">
      		<div class="card-body">
        		${currentQuote}
      		</div>
    		</div>
			</div>`;
		});
		const favs = document.getElementById('favorites');
		favs.innerHTML = quoteHTML.join('');
	}

	var favoriteListJSON = localStorage.getItem('favoriteList');
	var favoriteList = JSON.parse(favoriteListJSON);
	myQuotes(favoriteList);
});
