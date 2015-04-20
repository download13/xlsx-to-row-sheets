var xlsx = require('xlsx');

var parseCsv = require('csv-parse');

var async = require('async');


function xlsxToRowSheets(xlsxBuffer, cb) {
	var workbook = xlsx.read(xlsxBuffer);

	var sheetNames = workbook.SheetNames;

	// xlsx can only deliver a sheet as an array of objects or a csv string
	// To ensure consistent field ordering just get the csv output and parse it back into rows

	var csvs = sheetNames.map(function(sheetName) {
		var sheet = workbook.Sheets[sheetName];

		return xlsx.utils.sheet_to_csv(sheet)
	});

	async.map(csvs, parseCsv, function(err, sheets) {
		if(err) {
			return cb(err);
		}

		var sheetsByName = {};

		sheets.forEach(function(sheet, i) {
			sheetsByName[sheetNames[i]] = sheet;
		});

		cb(null, sheetsByName);
	});
}


module.exports = xlsxToRowSheets;
