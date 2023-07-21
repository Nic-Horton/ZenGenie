//Adds event listener to document so that all HTML is loaded before JavaScript is applied
document.addEventListener('DOMContentLoaded', () => {
	const gifResults = document.getElementById('gifResults');
	const quoteResults = document.getElementById('quoteResults');

	const form = document.getElementById('zenForm');

	//Function that takes keyWord and uses it to fetch gif from API and add it to HTML
	function gifGenerator(keyWord) {
		//Calls on Giphy API to get a random gif with the tag of keyWord
		fetch(
			`https://api.giphy.com/v1/gifs/random?api_key=PHuUhz4WuQQHCCdm0ANuCaejDCaITCJ6&q=@reactions&tag=${keyWord}&rating=pg-13`
		)
			.then((res) => res.json())
			.then((data) => {
				//console.log(data.data);
				gifResults.innerHTML = `<img class="img-fluid" src= ${data.data.images.original.url}>`;
			});
	}
	//Function that takes keyWord and uses it to zenquote from API and add it to HTML
	function quoteGenerator(keyWord) {
		//Calls on zenquote API to get a random quotes with the tag of keyWord
		//https://cors-proxy.fringe.zone/
		fetch(
			`https://zenquotes.io/api/random/2f2f146a00772400006c45f55e8e506e&keyword=${keyWord.toLowerCase()}`
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				quoteResults.innerHTML = data[0].h;
			});
	}

	//Listens for submit event on form and proceeds to get input of select input and store its value in a variable to be used by functions later
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const keyWord = document.getElementById('categories').value;
		quoteGenerator(keyWord);
		gifGenerator(keyWord);
	});
});
