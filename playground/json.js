const fs = require('fs');

const JSONdata = fs.readFileSync('1-json.json');
const JSONdataStr = JSONdata.toString();
const JSONparse = JSON.parse(JSONdataStr);

JSONparse.name = 'Andrzej';
JSONparse.age = 54;

const dataJSON2 = JSON.stringify(JSONparse);

fs.writeFileSync('1-json.json', dataJSON2);
