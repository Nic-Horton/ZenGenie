//Adds event listener to document so that all HTML is loaded before JavaScript is applied
document.addEventListener('DOMContentLoaded', () => {
	const result = document.getElementById('results');
	const form = document.getElementById('zenForm');

	//Function that takes keyWord and uses it to fetch gif from API and add it to HTML
	function gifGenerator(keyWord) {
		//Calls on Giphy API to get a random gif with the tag of keyWord
		fetch(
			`https://api.giphy.com/v1/gifs/random?api_key=PHuUhz4WuQQHCCdm0ANuCaejDCaITCJ6&q=@reactions&tag=${keyWord}&rating=pg-13`
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data.data);
				result.innerHTML = `<img src= ${data.data.images.original.url}>`;
			});
	}

	//Listens for submit event on form and proceeds to get input of select input and store its value in a variable to be used by functions later
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const keyWord = document.getElementById('categories').value;
		gifGenerator(keyWord);
	});
});
