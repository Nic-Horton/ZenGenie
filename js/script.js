//Adds event listener to document so that all HTML is loaded before JavaScript is applied
document.addEventListener('DOMContentLoaded', () => {
	const gifResults = document.getElementById('gifResults');
	const quoteResults = document.getElementById('quoteResults');

	const form = document.getElementById('zenForm');

	//Function that takes keyWord and uses it to fetch gif from API and add it to HTML
	function gifGenerator(keyWord) {
		const gifSaver = document.getElementById('gifSaver');
		//Calls on Giphy API to get a random gif with the tag of keyWord
		fetch(
			`https://api.giphy.com/v1/gifs/random?api_key=PHuUhz4WuQQHCCdm0ANuCaejDCaITCJ6&q=@reactions&tag=${keyWord}&rating=pg-13`
		)
			.then((res) => res.json())
			.then((data) => {
				//console.log(data.data);
				gifResults.innerHTML = `<img class="img-fluid" src= ${data.data.images.original.url}>`;
				gifSaver.innerHTML = `<button class="btn btn-info" onclick="addGifToFavs('${data.data.images.original.url}')">Save Gif</button>`;
			});
	}
	//Function that takes keyWord and uses it to zenquote from API and add it to HTML
	function quoteGenerator(keyWord) {
		const quoteSaver = document.getElementById('quoteSaver');
		//Calls on zenquote API to get a random quotes with the tag of keyWord
		fetch(
			`https://zenquotes.io/api/random/2f2f146a00772400006c45f55e8e506e&keyword=${keyWord.toLowerCase()}`
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				quoteResults.innerHTML = data[0].h;
				quoteSaver.innerHTML = `<button class="btn btn-info mb-3" onclick="addQuoteToFavs('${data[0].h}')">Save Quote</button>`;
			});
	}

	//Listens for submit event on form and proceeds to get input of select input and store its value in a variable to be used by functions later
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const keyWord = document.getElementById('categories').value;
		quoteGenerator(keyWord);
		gifGenerator(keyWord);
		document.getElementById('results').style.display = 'flex';
	});
});

function addQuoteToFavs(quote) {
	var favoriteListJSON = localStorage.getItem('favoriteList');
	var favoriteList = JSON.parse(favoriteListJSON);
	if (favoriteList == null) {
		favoriteList = [];
	}
	favoriteList.push(quote);
	favoriteListJSON = JSON.stringify(favoriteList);
	localStorage.setItem('favoriteList', favoriteListJSON);
}

function addGifToFavs(gif) {
	var favoriteGifListJSON = localStorage.getItem('favoriteGifList');
	var favoriteGifList = JSON.parse(favoriteGifListJSON);
	if (favoriteGifList == null) {
		favoriteGifList = [];
	}
	favoriteGifList.push(gif);
	favoriteGifListJSON = JSON.stringify(favoriteGifList);
	localStorage.setItem('favoriteGifList', favoriteGifListJSON);
}
