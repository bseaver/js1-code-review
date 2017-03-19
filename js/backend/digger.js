// Given an object and chained properties:
// Return the value of the last property
// Return the empty string if the chain cannot be followed or the last property is null or undefined
// Return "{more}" if the last property is an object
//
function digger(obj /*, level1, level2, ... levelN*/) {
  var
    index,
    nilResult = "",
    objectResult = "{more}",
    level = 1,
    argsLength = arguments.length;

  for (index = 1; index < argsLength; index++) {
    if (!obj || !obj.hasOwnProperty(arguments[index])) {
      return nilResult;
    }
    obj = obj[arguments[index]];
  }

  if (obj === null) {
    return nilResult;
  }

  if (obj === undefined) {
    return nilResult;
  }

  if (typeof obj === "object") {
    return objectResult;
  }

  return obj;
}

exports.digger = digger;
