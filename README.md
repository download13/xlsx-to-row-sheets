# xlsx-to-row-sheets

This package converts a buffer of an xlsx file into an object of sheets. Each sheet is an array of rows. Each row is an array of strings.

## Install

    npm install xlsx-to-row-sheets

## Example

```javascript
var xlsToRowSheets = require('xlsx-to-row-sheets');

var xlsxFileBuffer = fs.readFileSync('test.xlsx');

xlsxToRowSheets(xlsxFileBuffer, function(err, sheets) {
	// Sheets is an object mapping the sheet names to their row-array representations
	/*
	{
		sheet1: [
			['id', 'column2'],
			['0', 'value']
		],
		finance_stuff: [
			['expense_name', 'amount'],
			['cookies', '2.00'],
			['cookie refund', '-2.00']
		]
	}
	*/
});
```
