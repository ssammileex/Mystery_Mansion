var runSomeTests = function(){
	var descrip = document.getElementById('descrip');

	console.log( descrip.tagName );
	console.log( descrip.innerHTML );
	console.log( descrip.parentNode.tagName );

	var headings = document.querySelectorAll('aside > h1');

	for (i = 0; i < headings.length; i++){
	   console.log( headings[i].innerHTML );
	}
	var output = document.getElementById('scene');
	output.innerHTML = 'You have come to two tunnels, which way will you go?';
	
	var title = document.querySelectorAll('header > h1');
	title[0].innerHTML = 'Cross Roads';
	
	var listOfItems = document.querySelector('#inventory > ul');
	var item = document.createElement('li');
	var string = document.createTextNode('lantern');
	listOfItems.appendChild(item);
	item.appendChild(string);

	var items = document.createElement('li');
	var rope = document.createTextNode('rope');
	listOfItems.appendChild(items);
	items.appendChild(rope);
	
	var item1 = document.createElement('li');
        var journal = document.createTextNode('journal');
        listOfItems.appendChild(item1);
        item1.appendChild(journal);

	var item2 = document.createElement('li');
        var knives = document.createTextNode('knives');
        listOfItems.appendChild(item2);
        item2.appendChild(knives);

	var item3 = document.createElement('li');
        var mirror = document.createTextNode('broken mirror');
        listOfItems.appendChild(item3);
        item3.appendChild(mirror);

	var item4 = document.createElement('li');
        var safe = document.createTextNode('safe');
        listOfItems.appendChild(item4);
        item4.appendChild(safe);

	var item5 = document.createElement('li');
        var keys = document.createTextNode('keys');
        listOfItems.appendChild(item5);
        item5.appendChild(keys);

	var item6 = document.createElement('li');
        var matches = document.createTextNode('matches');
        listOfItems.appendChild(item6);
        item6.appendChild(matches);

	var item7 = document.createElement('li');
        var wood = document.createTextNode('wood');
        listOfItems.appendChild(item7);
        item7.appendChild(wood);

	var item8 = document.createElement('li');
        var chest = document.createTextNode('chest');
        listOfItems.appendChild(item8);
        item8.appendChild(chest);

	var item9 = document.createElement('li');
        var map = document.createTextNode('map');
        listOfItems.appendChild(item9);
        item9.appendChild(map);

	var item0 = document.createElement('li');
        var dead = document.createTextNode('dead body');
        listOfItems.appendChild(item0);
        item0.appendChild(dead);


	var listOfItems = document.querySelector('#help > ul');
	var action = document.createElement('li');
	var jump = document.createTextNode('jump');
	listOfItems.appendChild(action);
	action.appendChild(jump);
	
	var actions = document.createElement('li');
        var run = document.createTextNode('run');
        listOfItems.appendChild(actions);
        actions.appendChild(run);
	
	var action1 = document.createElement('li');
	var climb = document.createTextNode('climb');
	listOfItems.appendChild(action1);
	action1.appendChild(climb);
	
	var action2 = document.createElement('li');
        var fire = document.createTextNode('light on fire');
        listOfItems.appendChild(action2);
        action2.appendChild(fire);
	
	var action3 = document.createElement('li');
        var unlock = document.createTextNode('unlock');
        listOfItems.appendChild(action3);
        action3.appendChild(unlock);
	
	var action4 = document.createElement('li');
        var pickup = document.createTextNode('pickup');
        listOfItems.appendChild(action4);
        action4.appendChild(pickup);

	var action5 = document.createElement('li');
        var walk = document.createTextNode('walk');
        listOfItems.appendChild(action5);
        action5.appendChild(walk);
	
	var action6 = document.createElement('li');
	var scream = document.createTextNode('scream');
	listOfItems.appendChild(action6);
	action6.appendChild(scream);

	var action7 = document.createElement('li');
        var tackle = document.createTextNode('tackle');
        listOfItems.appendChild(action7);
        action7.appendChild(tackle);


};
window.onload = runSomeTests;
/*var connection = [
	(0,0,0),
	(0,0,0),
	(0,0,0)
];
map.connect('Beach', 'Jungle');
map.connect('Jungle', 'Cliff');
map.connect('Cliff', 'Beach');
var map = {
	locations: [],
	connections: [],
	connect: function (loc1, loc2){
		var i = this.connections.indexOf(loc1);
		var j = this.connections.indexOf(loc2);
		this.connections[i][j];
		this.connections[j][i];
	}
};

function report (){
	displayInventory();
	displayActions();
	displayScene();
*/

console.log("The items are bread, rope, matches, and a lantern.");
var player =["nothing","nothing","nothing","nothing"];
var input = prompt("Choose action: pickup, drop or show");
var pickup = function (){
var inputpickup = prompt("what do you want to pickup?");
        if(inputpickup === "drop" || inputpickup === "Drop"){
        drop();
        };
        if(inputpickup === "show" || inputpickup ==="show") {
        show();
        };
        if(inputpickup === "bread"||inputpickup === "Bread"){
        player[0] = "Bread";
        console.log("You picked up the Bread");
        return;
        };
        if(inputpickup === "rope"||inputpickup ==="Rope"){
        player[1] = "Rope";
        console.log("You picked up the Rope");
        };
        if(inputpickup === "matches"|| inputpickup === "Matches"){
        player[2] = "Matches";
        console.log("You picked up the Matches");
        };
        if(inputpickup === "lantern" ||inputpickup === "Lantern"){
        player[3] = "Lantern";
        console.log("You picked up the Lantern");
        };
        return;
};
var drop = function(){
var inputdrop = prompt("what do you want to drop?");
        if(inputdrop === "bread"||inputdrop === " Bread"){
        player[0] = "nothing";
        console.log("You dropped the Bread");
        };
        if(inputdrop === "rope"||inputdrop === "Rope"){
        player[1] = "nothing";
        console.log("You dropped the Rope");
        };
        if(inputdrop === "matches"||inputdrop === "Matches"){
        player[2] = "nothing";
        console.log("You dropped the Matches");
        };
        if(inputdrop === "lantern"||inputdrop === "Lantern"){
        player[3] = "nothing";
	console.log("You dropped the Lantern");
        };
        return;
};
var show = function (){
        for(var i = 0; i < 4; i++){
        console.log(player[i].trim());
        };
        return;
};
var quit = function(){
console.log("Thank you for using my program!");
        return;
};
while(input !=="q") {
if(input=== "pickup" || input=== "Pickup"){
pickup();
};
if(input === "drop" || input=== "Drop"){
drop();
};
if(input=== "show" || input==="show") {
show();
};
if(input === 'q'){
console.log('Thank you for using my program');
}; 
};

