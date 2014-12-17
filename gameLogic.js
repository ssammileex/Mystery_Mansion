var PlayerHasJournal = false;
var PlayerHasPhotograph = false;
var PlayerHasKeys = false;
var PlayerHasMatches = false;


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

		}else if(currentLocation === 4 && PlayerHasPhotograph === true){
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

	function Inventory() {
		if(PlayerHasJournal === true){
			document.getElementById("inv1").innerHTML="\n"+(item[0].name);
		}if(PlayerHasPhotograph === true){
			document.getElementById("inv2").innerHTML="\n"+(item[1].name);
		}if(PlayerHasKeys === true){
			document.getElementById("inv3").innerHTML="\n"+(item[2].name);
		}if(PlayerHasMatches === true){
			document.getElementById("inv4").innerHTML="\n"+(item[3].name);
		}
	}
	function drop() {
		var dropInput = document.getElementById("dropInput").value;
		if(PlayerHasJournal === true && dropInput==="Journal"){
			document.getElementById("inv1").innerHTML="";
			PlayerHasJournal=false;
		}if(PlayerHasPhotograph === true && dropInput==="Photograph"){
			document.getElementById("inv2").innerHTML="";
			PlayerHasPhotograph= false;
		}if(PlayerHasKeys === true && dropInput==="Keys"){
			document.getElementById("inv3").innerHTML="";
			PlayerHasKeys = false;
		}if(PlayerHasMatches === true && dropInput==="Matches"){
			document.getElementById("inv4").innerHTML="";
			PlayerHasMatches = false;
		}
	}
	function enterShed() {
		if(PlayerHasJournal === true && PlayerHasPhotograph === true && PlayerHasKeys === true && PlayerHasMatches === true && currentLocation === 8){
	
		winGame();	
		}else{
			updateText("You need to find all the items to enter.");
				
		}
	}
	function winGame() {
		var winNum = prompt("The ghost will not let you enter the shed until you guess the right number between 1 and 2. What is the ghost's number?");
		var win = Math.floor((Math.random() * 2) +1);
		var numWin = parseInt(winNum);
		if(win === numWin) {
			updateText("You have guessed the correct number! The ghost allows you to enter the shed. You reunited the husband and wife ghost after centuries of being apart. The two ghosts both agree to leave the house for good allowing people to refurbish it and finally live inside knowing it is no longer haunted. Congratulations on winning the game. Thank you for playing.");
		}else{
			updateText("This is the wrong number. Type Enter to try again.");
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
