module.exports = function check(str, bracketsConfig) {
  var strArray = str.split('');
  var stack  = [];
  var countBrackets = 0;
  while(countBrackets<str.length){
	stack.push(strArray[countBrackets]);
	for(var i=0; i<bracketsConfig.length; i++){
		if(stack[stack.length-2]== bracketsConfig[i][0] && stack[stack.length-1] == bracketsConfig[i][1]){ stack.pop(); stack.pop();}	
	}	
	countBrackets++;
  }
  return stack.length? false:true;
}

