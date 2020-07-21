function createMultiplyTable(start, end) {
  if(isValid(start, end)) {
    let multiTable = generateAllLines(start, end);
    return multiTable;
  }
  return null;
}

function isValid(start, end) {
  if(start <= end && start >=1 && start <=1000 && end >=1 && end <=1000) {
    return true;
  }
  return false;
}

function generateAllLines(start, end) {
  let multiTable = '';
    for (let index = start; index <= end; index++) {
        let multiStringLine = generateLine(start,index);
        if(index != end) {
          multiTable = multiTable + multiStringLine + '\n';
        } else {
          multiTable = multiTable + multiStringLine;
        }
    }
    return multiTable;
}

function generateLine(lineStart, lineEnd) {
  let multiLine = '';
    for (let index = lineStart; index <= lineEnd; index++) {
        let multiExpress = generateExpression(index,lineEnd);
        if(index != lineEnd) {
          multiLine = multiLine+  multiExpress + '\t';
        }else {
          multiLine = multiLine+  multiExpress;
        }
        
    }
   return multiLine;
}

function generateExpression(multiplicand, multiplier) {
  return multiplicand + '*' + multiplier + '=' + multiplicand*multiplier;
}

module.exports = {
  createMultiplyTable,
};
