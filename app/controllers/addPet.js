var db = require('dbAccess');

function save() {
	db.insertRow($.input_name.value, $.input_species.value);
	testCount();
	Ti.App.fireEvent('UpdateList');
	$.con.close();
}

function cancel() {
	$.con.close();
}

function testCount() {
	console.info("**** Row Count: "+db.countAllRows());
}