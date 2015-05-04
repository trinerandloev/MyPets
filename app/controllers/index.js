Ti.App.addEventListener('UpdateList', updateList);
var db = require('dbAccess');

function updateList() {
	$.pet_list.sections[0].setItems(db.getAllRows());
}

function removeAll() {
	db.deleteAll();
}

function addPet() {
	var addpet = Alloy.createController("addPet").getView();
	addpet.modal = true;	
	addpet.open();
}

function remove(e) {
	testCount();
	db.deleteRow(e.source.id);
	updateList();
	testCount();
}

function testCount() {
	console.info("**** Row Count: "+db.countAllRows());
}

// removeAll();
updateList();
$.index.open();