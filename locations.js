var PlayerHasJournal = false;
var PlayerHasPhotograph = false;
var PlayerHasKeys = false;
var PlayerHasMatches = false;
var PlayerHasWood = false;

	function PlayerTakeJournal(){
		if(currentLocation === 5 && PlayerHasJournal === false){
			PlayerHasJournal = true;
			updateText(item[0].notTaken);

		}else if(currentLocation === 5 && PlayerHasJournal === true){
		updateText(item[0].taken);
		}
	}

	function PlayerTakePhotograph(){
		if(currentLocation === 4 && PlayerHasPhotograph === false){
			PlayerHasPhotograph = true;
			updateText(item[1].notTaken);

		}else if(currentLocation === 5 && PlayerHasPhotograph === true){
			updateText(item[1].taken);
		}
	}

	function PlayerTakeKeys(){
		if(currentLocation === 2 && PlayerHasKeys === false){
			PlayerHasKeys = true;
			updateText(item[2].notTaken);

		}else if(currentLocation === 2 && PlayerHasKeys === true){
			updateText(item[2].taken);
		}
	}

	function PlayerTakeMatches(){
		if(currentLocation === 3 && PlayerHasMatches === false){
			PlayerHasMatches = true;
			updateText(item[3].notTaken);

		}else if(currentLocation === 3 && PlayerHasMatches === true){
			updateText(item[3].taken);
		}
	}

	function PlayerTakeWood(){
		if(currentLocation === 4 && PlayerHasWood === false){
			PlayerHasWood = true;
			updateText(item[4].notTaken);

		}else if(currentLocation === 5 && PlayerHasWood === true){
			updateText(item[4].taken);
		}
	}

	function updateText(msg){
		var text = document.getElementById("main");
		text.value=msg+"\n"+"\n"+text.value;
	}
	//starting location 
	function Foyer(){
		updateText(locale[0].description);
		currentLocation=0;
	}

	//west of foyer
	function Kitchen(){
		updateText(locale[1].description);
		currentLocation=1;
	}

	//north of foyer
	function Dinning(){
		updateText(locale[2].description);
		currentLocation=2;
	}

	//east of foyer
	function Living(){
		updateText(locale[3].description);
		currentLocation=3;
	}

	//north of dinning 
	function Hallway(){
		updateText(locale[4].description);
		currentLocation=4;
	}

	//north of Hallway
	function Bedroom(){
		updateText(locale[5].description);
		currentLocation=5;
	}

	//south of living 
	function Basement(){
		updateText(locale[6].description);
		currentLocation=6;
	}

	//south of foyer
	function Courtyard(){
		updateText(locale[7].description);
		currentLocation=7;
	}

	//west of Courtyard
	function Shed(){
		updateText(locale[8].description);
		currentLocation=8;
	}
	
