function init() {
var playerName = prompt("Welcome my game. What is your name?");
	locale[0] = new locales("Location 0", "Foyer", "Pushing through a DO NOT ENTER SIGN you and you're friends fine yourselves in a haunted mansion. The foyer is dark and musty. You hear voices coming from all directions of the house.", "none");
	locale[1] = new locales("Location 1", "Kitchen", "The kitchen looks as if no one ever used it. The table in the center of the room seems to be set for a dinner for two.", "none");
	locale[2] = new locales("Location 2", "Dinning Room", "The dinning room is extremely large. One wall is completely windows. On the left most wall there is a cabinet full of beautiful china. There seems to be something glowing from the cabinet, you can take it.", "Keys");
	locale[3] = new locales("Location 3", "Living Room", "There is a huge fireplace. The house is ice cold. You see matches sitting on the table. You can take them for later. You find a ghost sitting in a red chair. The ghost is telling you about his wife and how he cannot find her ghost. Naturally you want to help.", "Matches");
	locale[4] = new locales("Location 4", "Hallway", "There is a painting hanging on the wall. The painting strikes you as odd and out of place. Behind it you find a safe. In the safe is a photograph of a couple.", "Photograph");
	locale[5] = new locales("Location 5", "Bedroom", "The hallway led to a single bedroom. It consists of a bed and a nightstand. On the nightstand there is a leather journal. The journal is filled with a love story.", "Journal");
	locale[6] = new locales("Location 6", "Basement", "The basement is just a cement room. There is nothing down here besides a musty smell.", "none");
	locale[7] = new locales("Location 7", "Courtyard", "The house has a huge courtyard completely surrounded by trees, and a porch coming off the back of the house. Next to the porch is a pile of wood. Also, in the furthest west corner of the property you see what looks to be a small shed.", "none");
	locale[8] = new locales("Location 8", "Shed", "The shed appears to be locked. You can hear screaming from inside.", "none");
	item[0] = new items("Item 0", "Journal", "a journal containing a passcode", "You take the journal", "You already have the journal");
	item[1] = new items("Item 1", "Photograph", "a photograph of a husband and wife", "You take the photograph", "You already have the photograph");
	item[2] = new items("Item 2", "Keys", "a set of keys", "You take the keys", "You already have the keys");
	item[3] = new items("Item 3", "Matches", "a pack of matches", "You take the matches", "You already have the matches");
	
	Foyer();
document.getElementById("player").innerHTML = "Welcome, " + playerName + " to the mystery mansion."
}
