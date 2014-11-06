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
