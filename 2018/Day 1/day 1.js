let data = require('./day 1 data.json');
let dataMap = new Map();
let twiceFreq = false;
dataMap.set(0,0)
let currFreq = 0;
data.forEach((freq) => {
  currFreq = currFreq + Number(freq);
  if(!twiceFreq) {
    dataMap.set(currFreq,currFreq);
  }
});
console.log('Sum: ', currFreq);
scanDataForReusedFreq(data);
function scanDataForReusedFreq(data) {
  data.forEach((freq) => {
    currFreq = currFreq + Number(freq);
    if(!twiceFreq && dataMap.has(currFreq)) {
      twiceFreq = true;
      console.log('Used twice: ', currFreq);
    }
    if(!twiceFreq) {
      dataMap.set(currFreq,currFreq);
    }
  });
  if(!twiceFreq) return scanDataForReusedFreq(data)
}



