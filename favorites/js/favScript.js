document.addEventListener('DOMContentLoaded', () => {
	const quoteContainer = document.getElementById('favoriteQuotes');

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
});
