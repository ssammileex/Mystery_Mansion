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
			updateLocation();
		}else{
		var msg = "You cannot go this way.";
		updateText(msg);
		}

	} 

	function help() {
		var message = "To move or go to the next room type N to go North, S to go South, E to go East, and W to go West. If you want to see how the rooms connect, press the question mark next to the go button to look at a map.";
		updateText(message);
	}

	function updateLocation() {
		switch(currentLocation)
		{
			case 0: Foyer();
			break;
			case 1: Kitchen();
			break;
			case 2: Dinning();
			break;
			case 3: Living();
			break;
			case 4: Hallway();
			break;
			case 5: Bedroom();
			break;
			case 6: Basement();
			break;
			case 7: Courtyard();
			break;
			case 8: Shed();
			break;
		
		}
	}
