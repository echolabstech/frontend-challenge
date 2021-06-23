/*
	Rules:
	- if a tile has no free spaces around it, do nothing
	- if a tile has a free space next to it, move the tile into that space
	- each tile has a random number in it, [1-8]
	- the puzzle board always has 1 empty space
*/
(() => {
	function moveTile(event) {
		/*
			- identify tile clicked
			- find tile neighbors
			- is tile neighbor 0?
			 - yes: swap tile and tile neighbor 0
			 - no: do nothing
		*/
		console.log('move tile ', event.currentTarget.innerText);
	}

	class Tile {
		constructor(number) {
			this.number = number;
		}
	}

	const puzzle = document.querySelector('.puzzle-figure');
	const tiles = document.querySelectorAll('.tile');
	tiles.forEach(tile => {tile.onclick = moveTile;});

	function random(min, max) {
	  const num = Math.floor(Math.random() * (max - min + 1)) + min;
	  return num;
	}

	let numbers = new Set();
	while (numbers.size < 8) {
		const number = random(1, 8);
		numbers.add(number);
	}
	numbers = numbers.values();

	const board = Array(3).fill(undefined).map(() => {
		return Array(3).fill(undefined).map(() => {
			return numbers.next().value || 0;
		});
	});
	console.log(board);
})();