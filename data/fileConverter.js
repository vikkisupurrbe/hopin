// Convert Excel to JSON
const XLSX = require('xlsx');
const fs = require('fs');

const workbook = XLSX.readFile('craftbeer.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const jsonData = XLSX.utils.sheet_to_json(worksheet);

fs.writeFileSync('output.json', JSON.stringify(jsonData, null, 2));