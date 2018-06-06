var words = ["ground", "control", "to", "major", "tom"];

console.log(map(words, function(word) {
  return word.length;
}));

console.log(map(words, function(word) {
  return word.toUpperCase();
}));

console.log(map(words, function(word) {
  return word.split('').reverse().join('');
}));


function map (words, fn){
	var arr = [];
	for(elements in words){
		arr.push(fn(words[elements]));
	}	
	return arr;
}
