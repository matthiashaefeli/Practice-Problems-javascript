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
	dictionary.forEach(function(word) {
		if(word.substring(0, letters.length) === letters) {
			result.push(word)
		}
	})
		while(result.length > 5) {
			result.pop()
		}
		return result
}


function reverseAlphabeticCharacters(string) {
	var result = []
	var letterArray = string.replace(/\W|_|\d/g, "")
	letterArray.split("").forEach(function(letter) {
		result.unshift(letter)
	})
	return result.join("")
}

function sumOfPairs(integers, sum) {
	var result = []
	for(var index = 0; index < integers.length; index++) {
		for(var itwo = 1; itwo < integers.length; itwo++) {
			if(integers[index] + integers[itwo] === sum) {
				result.push(integers[index], integers[itwo])
				return result
			}
		}
	}
}

function binaryCode(binary) {
	var binarystring = binary.join("")
	var integer = parseInt(binarystring, 2)
	return integer
}

function squareDigits(integer) {
	var string = integer.toString();
	var numbersArray = string.split("")
	var result = []
	numbersArray.forEach(function(number) {
		result.push(number * number)
	})
	return parseInt(result.join(""), 10)
}

function findLongest(numberArray) {
	var length = 0
	var result = 0
	numberArray.forEach(function(num) {
		if(num.toString().length > length) {
			length = num.toString().length
			result = num
		}
	})
	return result
}

function getCount(string) {
	var result = []
	var vowelsCount = 0
	var letterArray = string.replace(/\W|_|\d/g, "")
	var vowels = ["a", "e", "i", "e", "o", "u"]
	letterArray.split("").forEach(function(letter) {
		if(vowels.includes(letter)) {
			vowelsCount += 1
		}
	})
	result.push(vowelsCount);
	result.push(letterArray.length - vowelsCount)
	return result
}


function mean(array) {
	var result = []
	var letter = array.join("").replace(/\d/g, "")
	var numbers = array.join("").replace(/[a-z]/g, "")
	var totalNumbers = 0
	numbers.split("").forEach(function(num) {
		totalNumbers += parseInt(num, 10)
	})
	result.push(totalNumbers / 10);
	result.push(letter);
	return result
}

function take(array, integer) {
	return array.slice(integer)
}

function increment(string) {
	number = string.replace(/\D/g, "")
	if(number === ""){
		return string + "1"
	} else {
	result = parseInt(number) + 1
	return string.replace(/\d/g, "") + result.toString()
	}
}

function findIt(numberArray) {
	var result = 0
	numberArray.forEach(function(number) {
			var count = 0
			for(var index = 0; index < numberArray.length; index++) {
				if(numberArray[index] === number) {
					count++
				}
			}
		if(count % 2 === 1) {
		result = number
		}
	})
	return result
}


function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}


function countingDuplicates(string) {
	var array = string.split("").sort()
	var newArray = []
	for(var index = 0; index < array.length; index++) {
		if(array[index+1] === array[index]) {
			newArray.push(array[index])
		}
	}
	return newArray.filter( onlyUnique ).length
}


function encode(string, code) {
	var numberArray = []
	var result = []
	var codeArray = code.toString().split("")
	var alphabet = "abcdefghijklmnopqrstuvwxyz"
	string.split("").forEach(function(letter) {
	 	numberArray.push(alphabet.indexOf(letter))
	})
	for(var index = 0, indextwo = 0; index < string.length; index++, indextwo++) {
		if(indextwo >= codeArray.length) {
			indextwo = 0;
			result.push(numberArray[index] + parseInt(codeArray[indextwo]) + 1)
		} else {
			result.push(numberArray[index] + parseInt(codeArray[indextwo]) + 1)
		}
	}
	return result
	
}









