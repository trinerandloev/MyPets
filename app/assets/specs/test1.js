require('behave').andSetup(this);

describe('A module for accessing the database', function() {
	var db = require('dbAccess');
	db.deleteAll();
	
	// it('demonstrates a failure', function() {
		// expect(db.countAllRows()).notToBe(0);
	// });
	
	it('adds five records to the database', function() {
		db.insertRow("Cindy", "Norwegian Forest Cat");
		db.insertRow("Yzma", "Boa Constrictor");
		db.insertRow("Lorenzo", "Hellig Birma");
		db.insertRow("Linken", "Hellig Birma");
		db.insertRow("Lady", "Hellig Birma");
		expect(db.countAllRows()).toBe(5);
	});
	
	it('deletes two records from the database', function() {
		db.deleteRow(5);
		db.deleteRow(3);
		expect(db.countAllRows()).toBe(3);
	});
});