/*
	Rules:
	- if a tile has no free spaces around it, do nothing
	- if a tile has a free space next to it, move the tile into that space
	- each tile has a random number in it, [1-8]
	- the puzzle board always has 1 empty space
*/
(() => {
	class Tile {
		constructor(number=0, top=undefined, right=undefined, bottom=undefined, left=undefined) {
			this.number = number;
			this.top = top;
			this.right = right;
			this.bottom = bottom;
			this.left = left;
		}
	}

	const tiles = document.querySelectorAll('li.tile');
	tiles.forEach(tile => {tile.onclick = moveTile;});
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
			const number = numbers.next().value || 0;
			return new Tile(number);
		});
	});

	/*
		sample board:
		[2,7,1]
		[8,4,3]
		[6,5,0]

		an example:
			rowIndex = 0 # [2,7,1]
			tileIndex = 2
			tile = board[rowIndex][tileIndex] # tile 1
			tile.top = board[rowIndex - 1][tileIndex] # no top
			tile.right = board[rowIndex][tileIndex + 1] # no right
			tile.bottom = board[rowIndex + 1][tileIndex] # bottom is tile 3
			tile.left = board[rowIndex][tileIndex - 1] # left is tile 7

		another example:
			rowIndex = 1 # [8,4,3]
			tileIndex = 1
			tile = board[rowIndex][tileIndex] # tile 4
			tile.top = board[rowIndex - 1][tileIndex] # top is tile 7
			tile.right = board[rowIndex][tileIndex + 1] # right is tile 3
			tile.bottom = board[rowIndex + 1][tileIndex] # bottom is tile 5
			tile.left = board[rowIndex][tileIndex - 1] # left is tile 8
	*/
	function updateBoard(tiles) {
		const updatedTiles = [];
		board.forEach((row, rowIndex) => {
			row.forEach((tile, tileIndex) => {
				tile = board[rowIndex][tileIndex];
				tile.top = board[rowIndex - 1] ? board[rowIndex - 1][tileIndex] : undefined
				tile.right = board[rowIndex][tileIndex + 1];
				tile.bottom = board[rowIndex + 1] ? board[rowIndex + 1][tileIndex] : undefined;
				tile.left = board[rowIndex][tileIndex - 1];
				updatedTiles.push(tile.number);
			});
		});
		tiles.forEach((tile, index) => {
			tile.innerText = updatedTiles[index];
		});
	}
	updateBoard(tiles);
})();