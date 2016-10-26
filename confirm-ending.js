function end(str, target) {
  var start = str.length - (target.length - 1);
  if(str.substr(start, str.length) == target){
     return false;
  } else {
     return true;
  }
}

console.log(end('bat', 't'));
