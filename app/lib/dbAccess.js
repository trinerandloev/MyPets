var CREATE_TABLE = 'CREATE TABLE IF NOT EXISTS pets(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, species TEXT);';
var DATABASE = 'myDB';
var SELECT_ROWS = 'SELECT id,name,species FROM pets';
var INSERT_ROW = 'INSERT INTO pets(name, species) VALUES (?,?)';
var DELETE_ROW = 'DELETE FROM pets WHERE id=?';
var DROP_TABLE = 'DROP TABLE IF EXISTS pets';

function getAllRows() {
	var rows = [];
	var db = Ti.Database.open(DATABASE);
	db.execute(CREATE_TABLE);
	var rs = db.execute(SELECT_ROWS);
	while (rs.isValidRow()) {
		rows.push({
				name: {text: rs.fieldByName('name')},
				species: {text: rs.fieldByName('species')},
				rbtn: {id: rs.fieldByName('id')}
		});
		rs.next();
	}
	rs.close();
	db.close();
	return rows;
}

function countAllRows() {
	var db = Ti.Database.open(DATABASE);
	db.execute(CREATE_TABLE);
	var rs = db.execute(SELECT_ROWS);
	var i = 0;
	while (rs.isValidRow()) {
		i++;
  		rs.next();
	}
	rs.close();
	db.close();
	return i;
}

function deleteRow(id) {
	var db = Ti.Database.open(DATABASE);
	db.execute(DELETE_ROW, id);
	db.close();
}

function deleteAll() {
	var db = Ti.Database.open(DATABASE);
	db.execute(DROP_TABLE);
	db.close();
}

function insertRow(n, s) {
	var db = Ti.Database.open(DATABASE);
	db.execute(CREATE_TABLE);
	db.execute(INSERT_ROW, n, s);
	db.close();
}

exports.getAllRows = getAllRows;
exports.countAllRows = countAllRows;
exports.deleteRow = deleteRow;
exports.deleteAll = deleteAll;
exports.insertRow = insertRow;