var xlsxToRowSheets = require('../xlsx-to-row-sheets');

var fs = require('fs');

var assert = require('assert');


var ZIP_FILE_BUFFER = fs.readFileSync(__dirname + '/files/efile_newest_WESTSAC_2015.xlsx');


describe('xlsxToRowSheets', function() {
	var sheets;

	it('should convert without errors', function(done) {
		xlsxToRowSheets(ZIP_FILE_BUFFER, function(err, sheets_results) {
			if(err) return done(err);

			sheets = sheets_results;

			done();
		});
	});

	it('should produce output with a valid format', function() {
		assert.equal(typeof sheets, 'object');

		var firstKey = Object.keys(sheets)[0];

		var rows = sheets[firstKey];

		// Rows should be an array
		assert(Array.isArray(rows));

		// Each row shoul also be an array
		assert(Array.isArray(rows[0]));
	});

	it('should produce output with valid content', function() {
		var rows = sheets['497'];

		var keys = rows[0];

		var row = rows[1];

		assert.equal(keys[0], 'Filer_ID');

		assert.equal(row[0], '1265695');
	});
});
