function makeArrayConsecutive2(array) {
	var result = 0;
	var first = array.sort()[0];
	var last = array.sort().slice(-1);
	for(var index = first; index < last; index++) {
		if (array.includes(index) === false) {
			result += 1
		}
	}
	return result
}

function kebabize(string) {
	var newString = string.replace(/([A-Z])/g, "-$1").toLowerCase()
	return newString
}

function middle(string) {
	var result = ""
	var middle = string.length / 2
	if(string.length % 2 === 0) {
			result = string[middle - 1] + string[middle]
	}else {
			result = string[Math.floor(middle)]
	}
	return result
}

function autoComplete(letters, dictionary) {
	var result = []
	dictionary.forEach(function(word){
		if(word.substring(0, letters.length) === letters){
			result.push(word)
		}
	})
		while(result.length > 5){
			result.pop()
		}
		return result
}