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

	const puzzle = document.querySelector('.puzzle-figure');
	const tiles = document.querySelectorAll('.tile');
	tiles.forEach(tile => {tile.onclick = moveTile;});
	const board = [
		[8, 5, 6],
		[3, 1, 7],
		[4, 2, 0]
	];
})();