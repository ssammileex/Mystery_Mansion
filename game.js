var player = {
	items: [];
	pickUp: function(item){
		this.function.push(item)
	},
	drop: function(item){
		var pos = this.item.indexOf(item);
		if (pos >= 0) {
			this.items.splice(pos, 1);
		}
	}
}
var interpret = function(string){
        var action= [];
        var object = [];
        var tr = string.trim();
        var sp = t.spilt(" ");
        var shift = sp.shift();
        action.first = shift;
	var res = sp.join();
	object.result = res;
	return object;
}
function execute (command) {
	var action = command.action;
	var object = command.object;
	var func = player[action];
	func(target);
}
function report (result) {
	for(var i = 0; i<object.length; i++){
}
function gameStep () {
	var input = this.value;
	var cmd = interpret(input);
	//then call execute, then report 
}

var gameStart = function () {
	var inputBox = document.querySelector("input");
	inputBox.addEventListener("keyup", gameStep);
window.onload = gameStart;

var interpret = function(string){
	var action= [];
	var object = [];
	var tr = string.trim();
	var sp = t.spilt(" ");
	var shift = sp.shift();
	action.




/*
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

	var listOfItems = document.querySelector('#help > ul');
	var action = document.createElement('li');
	var jump = document.createTextNode('jump');
	listOfItems.appendChild(action);
	action.appendChild(jump);
	var actions = document.createElement('li');
        var run = document.createTextNode('run');
        listOfItems.appendChild(actions);
        actions.appendChild(run);

	
};
window.onload = runSomeTests;
*/
