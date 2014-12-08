var location = new array();
var item = new array();

function locales(_id, _name, _description, _item){
	this.id = _id;
	this.name = _name;
	this.description = _description;
	this.item = _item;
}

function items(_id, _name, _description, _notTaken, _taken){
	this.id = _id;
	this.name = _name;
	this.description = _description;
	this.notTaken = _notTaken;
	this.taken = _taken;
}

	this.toString = function items() {
		var itemsString = "";
		itemsString = "[items]"
					this.id
					this.name
					this.description
					this.notTaken
					this.taken;
			return itemsString;

	}

	this.toString = function locales() {
		var localString = "";
		localString = "[locales]"
					this.id
					this.name
					this.description
					this.item;
			return localString;
	}
