/*
	Rules:
	- if a tile has no free spaces around it, do nothing
	- if a tile has a free space next to it, move the tile into that space
	- each tile has a random number in it, [1-8]
	- the puzzle board always has 1 empty space
*/
(function() {
	const puzzle = document.querySelector('.puzzle-figure');
	const board = [
		[8, 5, 6],
		[3, 1, 7],
		[4, 2, 0]
	];
})();