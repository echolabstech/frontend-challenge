/*
	Rules:
	- if a tile has no free spaces around it, do nothing
	- if a tile has a free space next to it, move the tile into that space
	- each tile has a random number in it, [1-8]
	- the puzzle board always has 1 empty space
*/
(() => {
	class Tile {
		constructor(number=0, 
								top=undefined,
								right=undefined,
								bottom=undefined,
								left=undefined,
								position=undefined,
								tile=undefined,
		) {
			this.number = number;
			this.top = top;
			this.right = right;
			this.bottom = bottom;
			this.left = left;
			this.position = position;
			this.tile = tile;
		}
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

	const board = {
		1: new Tile(),
		2: new Tile(),
		3: new Tile(),
		4: new Tile(),
		5: new Tile(),
		6: new Tile(),
		7: new Tile(),
		8: new Tile(),
		9: new Tile('0'),
	}
	board[1].right = board[2];
	board[1].bottom = board[4];
	board[2].left = board[1];
	board[2].right = board[3];
	board[2].bottom = board[5];
	board[3].left = board[2];
	board[3].bottom = board[6];
	board[4].top = board[1];
	board[4].right = board[5];
	board[4].bottom = board[7];
	board[5].top = board[2];
	board[5].right = board[6];
	board[5].bottom = board[8];
	board[5].left = board[4];
	board[6].top = board[3];
	board[6].left = board[5];
	board[6].bottom = 0;
	board[7].top = board[4];
	board[7].right = board[8];
	board[8].top = board[5];
	board[8].right = 0;
	board[8].left = board[7];
	board[9].top = board[6];
	board[9].left = board[8];

	const tiles = document.querySelectorAll('.tile');
	tiles.forEach((tile, index) => {
		tile.className = `tile position${index+1}`;
		tile.innerText = numbers.next().value;
		board[index + 1].number = tile.innerText;
		board[index + 1].tile = tile;
		board[index + 1].position = index + 1;
		tile.onclick = moveTile;
		tile.setAttribute('position', index + 1);
	});

	function swap(direction, tile) {
		let newPosition = tile.position;
		if (direction === 'top') {
			newPosition = tile.position - 3;
		} else if (direction === 'right') {
			newPosition = tile.position + 1;
		} else if (direction === 'bottom') {
			newPosition = tile.position + 3;
		} else if (direction === 'left') {
			newPosition = tile.position - 1;
		}

		tile.tile.className = `tile position${newPosition}`;
		if (getValidPosition(newPosition - 3)) {
			tile.top = board[newPosition - 3];
		} else {
			tile.top = undefined;
		}
		if (getValidPosition(newPosition + 1)) {
			tile.right = board[newPosition + 1];
		} else {
			tile.right = undefined;
		}
		if (getValidPosition(newPosition + 3)) {
			tile.bottom = board[newPosition + 3];
		} else {
			tile.bottom = undefined;
		}
		if (getValidPosition(newPosition - 1)) {
			tile.left = board[newPosition - 1];
		} else {
			tile.left = undefined;
		}
		console.log(tile);
	}

	function getValidPosition(position) {
		if (position >= 1 && position <= 9) return position;
		return undefined;
	}

	function reShuffleBoard() {
		// update tile directions (i.e. up, right, etc...)
	}

	function moveTile(event) {
		const position = event.currentTarget.getAttribute('position');
		const tile = board[position];
		if (tile.top === 0) swap('top', tile);
		if (tile.right === 0) swap('right', tile);
		if (tile.bottom === 0) swap('bottom', tile);
		if (tile.left === 0) swap('left', tile);
	}
})();