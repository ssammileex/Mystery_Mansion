var foyer = false;
var kitchen = false;
var dinning = false;
var living = false;
var hallway = false;
var bedroom = false;
var basement = false;
var courtyard = false;
var shed = false;

var currentLocation = 0;
var north = 0;
var south = 1;
var east = 2;
var west = 3;

var nav = [ // n s e w
	/*0*/    [2, 7, 3, 1],
	/*1*/    [-1, -1, 0, -1],
	/*2*/    [4, 0, -1, -1],
	/*3*/    [-1, 6, -1, 0],
	/*4*/    [5, 2, -1, -1],
	/*5*/    [-1, 4, -1, -1],
	/*6*/    [3, -1, -1, -1],
	/*7*/    [0, -1, -1, 8],
	/*8*/    [-1, -1, 7, -1],
];

	function move(dir){
		var newLocation = nav[currentLocation][dir];
		if(newLocation !== -1){
			currentLocation = newLocation;
		}else{
		var msg = "You cannot go this way.";
		updateText(msg);
		}

	} 

	function help() {
		var message = "To move or go to the next room type N to go North, S to go South, E to go East, and W to go West. To leave the game type Quit.";
		updateText(message);
	}

