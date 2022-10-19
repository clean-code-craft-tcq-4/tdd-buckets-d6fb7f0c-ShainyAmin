function getRange(dataList) {
  dataList = sort(dataList);
  let firstElement = dataList[0];
  let previous = dataList[0];
  let counter = 1;
  const result = {};
  for (let i = 1; i < dataList.length; i++) {
    if (checkIfCountinous(dataList[i], previous)) {
      previous = dataList[i];
      counter++;
    } else {
      result[`${firstElement}-${previous}`] = counter;
      firstElement = dataList[i];
      previous = dataList[i];
      counter = 1;
    }
  }
  result[`${firstElement}-${previous}`] = counter;
  return result;
}

function formatJson(key, value) {
  return `${key}, ${value}`;
}


function sort(dataList) {
  return dataList.sort((a, b) => a - b);
}
function checkIfCountinous(current, previous) {
  return [0, 1].includes(current - previous);
}


module.exports = {
  sort,
  getRange,
  formatJson,
  checkIfCountinous,
};
