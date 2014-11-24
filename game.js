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
