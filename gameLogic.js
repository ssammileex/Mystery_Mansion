function inti() {
	location[0] = new locales("Location 0", "Foyer", "Everything is covered in dust, and has a musty smell. You decide to explore the house.", "none");
	location[1] = new locales("Location 1", "Kitchen", "The kitchen looks as if no one ever used it. The table in the center of the room seems to be set for a dinner for two.", "none");
	location[2] = new locales("Location 2", "Dinning Room", "The dinning room is extremely large. One wall is completely windows. On the left most wall there is a cabinet full of beautiful china. There seems to be something glowing from the cabinet, you can take it.", "Keys");
	location[3] = new locales("Location 3", "Living Room", "There is a huge fireplace. The house is ice cold. Find matches and wood to start a fire.", "Matches");
	location[4] = new locales("Location 4", "Hallway", "There is a painting hanging on the wall. The painting strikes you as odd and out of place. Behind it you find a safe that requires a passcode.", "Photograph");
	location[5] = new locales("Location 5", "Bedroom", "The hallway led to a single bedroom. It consists of a bed and a nightstand. On the nightstand there is a leather journal containing a passcode.", "Journal");
	location[6] = new locales("Location 6", "Basement", "The basement is just a cement room. There is nothing down here besides a musty smell.", "none");
	location[7] = new locales("Location 7", "Courtyard", "The house has a huge courtyard completely surrounded by trees, and a porch coming off the back of the house. Next to the porch is a pile of wood, that you should take. Also, in the furthest west corner of the property you see what looks to be a small shed.", "Wood");
	location[8] = new locales("Location 8", "Shed", "In the shed is another ghost. She is the wife of the ghost in the house.", "none");
	item[0] = new items("Item 0", "Journal", "a journal containing a passcode", "You take the journal", "You already have the journal");
	item[1] = new items("Item 1", "Photograph", "a photograph of a husband and wife", "You take the photograph", "You already have the photograph");
	item[2] = new items("Item 2", "Keys", "a set of keys", "You take the keys", "You already have the keys");
	item[3] = new items("Item 3", "Matches", "a pack of matches", "You take the matches", "You already have the matches");
	item[4] = new items("Item 4", "Wood", "a piece of wood", "You take the wood", "You already have the wood");
	Foyer();

}
