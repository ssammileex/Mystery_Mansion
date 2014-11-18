var prompt = require('readline-sync').question;
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

