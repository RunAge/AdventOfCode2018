let fs = require('fs');
let data = ``
data = data.split('\n');
data.pop();
data = JSON.stringify(data);
fs.writeFileSync('data.json', data);