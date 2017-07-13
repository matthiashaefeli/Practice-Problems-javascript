
describe("consecutive", function(){
	it("gives te spaces missing in an given array", function(){
		expect(makeArrayConsecutive2([6, 2, 3, 8])).toEqual(3)
	});

	it("gives te spaces missing in an given array", function(){
		expect(makeArrayConsecutive2([0, 3])).toEqual(2)
	});

	it("gives te spaces missing in an given array", function(){
		expect(makeArrayConsecutive2([6, 3])).toEqual(2)
	});
});

describe("kebabize", function(){
	it("returns a given camel string into a string with - bevor each upcase letter", function(){
		expect(kebabize("myCamelHaseThreeHumps")).toEqual("my-camel-hase-three-humps")
	});

	it("returns a given camel string into a string with - bevor each upcase letter", function(){
		expect(kebabize("myGameHasALotOfPlayers")).toEqual("my-game-has-a-lot-of-players")
	});
});

describe("middle", function(){
	it("returns the middle character of a given string", function(){
		expect(middle("test")).toEqual("es")
	});

	it("returns the middle character of a given string", function(){
		expect(middle("testing")).toEqual("t")
	});

	it("returns the middle character of a given string", function(){
		expect(middle("middle")).toEqual("dd")
	});

	it("returns the middle character of a given string", function(){
		expect(middle("A")).toEqual("A")
	});

	it("returns the middle character of a given string", function(){
		expect(middle("Of")).toEqual("Of")
	});
});

describe("auto complete",function(){
	it("returns an array (only first 5 elements) of a dictionary if the first given letters mach",function(){
		var dictionary = [ 'abnormal',
								  'arm-wrestling',
								  'absolute',
								  'airplane',
								  'airport',
								  'amazing',
								  'apple',
								  'ball' ];
		expect(autoComplete("ai", dictionary)).toEqual(["airplane", "airport"])
	});

	it("returns an array (only first 5 elements) of a dictionary if the first given letters mach",function(){
		var dictionary = [ 'abnormal',
								  'arm-wrestling',
								  'absolute',
								  'airplane',
								  'airport',
								  'amazing',
								  'apple',
								  'ball' ];
		expect(autoComplete("a", dictionary)).toEqual(['abnormal','arm-wrestling','absolute','airplane','airport'])
	});
});

describe("counting duplicates",function(){
	it("returns the number of dublicated letters or numbers",function(){
		expect(countingDuplicates("")).toEqual(0)
	});

	it("returns the number of dublicated letters or numbers",function(){
		expect(countingDuplicates("abcdefg")).toEqual(0)
	});

	it("returns the number of dublicated letters or numbers",function(){
		expect(countingDuplicates("hello")).toEqual(1)
	});

	it("returns the number of dublicated letters or numbers",function(){
		expect(countingDuplicates("Indivisibilities")).toEqual(2)
	});
});

describe("reverse alphabetic characters", function(){
	it("reverse a given string without non alphabetic characters", function(){
		expect(reverseAlphabeticCharacters("krishan")).toEqual("nahsirk")
	});

	it("reverse a given string without non alphabetic characters", function(){
		expect(reverseAlphabeticCharacters("ab23c")).toEqual("cba")
	});

	it("reverse a given string without non alphabetic characters", function(){
		expect(reverseAlphabeticCharacters("ultr53o?n")).toEqual("nortlu")
	});

	it("reverse a given string without non alphabetic characters", function(){
		expect(reverseAlphabeticCharacters("n&^%$2556_o")).toEqual("on")
	});
});

describe("sum of pairs", function(){
	it("returns the two integers given the given sum",function(){
		var integers = [1, 4, 8, 7, 3, 15]
		var sum = 8
		expect(sumOfPairs(integers, sum)).toEqual(1, 7)
	});

	it("returns the two integers given the given sum",function(){
		var integers = [1, -2, 3, 0, -6, 1]
		var sum = -6
		expect(sumOfPairs(integers, sum)).toEqual(0, -6)
	});

	it("returns the two integers given the given sum",function(){
		var integers = [1, 2, 3, 4, 1, 0]
		var sum = 2
		expect(sumOfPairs(integers, sum)).toEqual(1, 1)
	});

	it("returns the two integers given the given sum",function(){
		var integers = [10, 5, 2, 3, 7, 5]
		var sum = 10
		expect(sumOfPairs(integers, sum)).toEqual(5, 5)
	});

	it("returns the two integers given the given sum",function(){
		var integers = [5, 9, 13, -3]
		var sum = 10
		expect(sumOfPairs(integers, sum)).toEqual(13, -3)
	});
});

describe("binary code",function(){
	it("returns the number of a binary code",function(){
		expect(binaryCode(0, 0, 0, 1)).toEqual(1)
	});

	it("returns the number of a binary code",function(){
		expect(binaryCode(0, 0, 1, 0)).toEqual(2)
	});

	it("returns the number of a binary code",function(){
		expect(binaryCode(1, 1, 1, 1)).toEqual(15)
	});

	it("returns the number of a binary code",function(){
		expect(binaryCode(0, 1, 1, 0)).toEqual(6)
	});
});

describe("square digits", function(){
	it("returns square of each number", function(){
		expect(squareDigits(3212)).toEqual(9414)
	});

	it("returns square of each number", function(){
		expect(squareDigits(1234321)).toEqual(14916941)
	});
});

describe("encode", function(){
	it("returns an array with ne number given of a string and a key", function(){
		expect(encode("scout", 1939)).toEqual([20, 12, 18, 30, 21])
	});

	it("returns an array with ne number given of a string and a key", function(){
		expect(encode("masterpiece", 1939)).toEqual([14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8])
	});

	it("returns an array with ne number given of a string and a key", function(){
		expect(encode("aaaaaaa", 18)).toEqual([2,9,2,9,2,9,2])
	});
});

describe("find longest", function(){
	it("returns longes digit of a given array with numbers", function(){
		expect(findLongest([1, 10, 100])).toEqual(100)
	});

it("returns longes digit of a given array with numbers", function(){
		expect(findLongest([1, 200, 100000])).toEqual(1000000)
	});

it("returns longes digit of a given array with numbers", function(){
		expect(findLongest([1, 200, 300])).toEqual(200)
	});
});

describe("get count", function(){
	it("returns how many vowels and consonants has a word", function(){
		expect(getCount("Test")).toEqual([1, 3])
	});

	it("returns how many vowels and consonants has a word", function(){
		expect(getCount("To be a Codewarrior or not to be")).toEqual([12, 13])
	});

	it("returns how many vowels and consonants has a word", function(){
		expect(getCount("$$%&*12345 66 }} ab")).toEqual([1, 1])
	});
});

describe("mean", function(){
	it("returns an array with the sum of the given number and the string", function(){ 
		var list = ["u", "6", "d", "1", "i", "w", "6", "s", "t", "4", "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"]
		expect(mean(list)).toEqual([3.6, "udiwstagwo"])
	});

	it("returns an array with the sum of the given number and the string", function(){ 
		var list = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "a", "a", "d", "d", "g", "q", "u", "v", "y", "y"]
		expect(mean(list)).toEqual([0.9, "aaddgquvyy"])
	});
});

describe("groupe", function(){

	it("returns an array of an array sort in numbers how the given", function(){
		expect(group([3, 2, 6, 2, 1, 3])).toEqual([[3, 3], [2, 2], [6], [1]])
	});

	it("returns an array of an array sort in numbers how the given", function(){
		expect(group([3, 2, 6, 2])).toEqual([[3], [2, 2], [6]])
	});

	it("returns an array of an array sort in numbers how the given", function(){
		expect(group([1, 100, 4, 2, 4])).toEqual([[1], [100], [4, 4], [2]])
	});
});

describe("delete nth", function(){

	it("returns a given array with the given count max of each element", function(){
		expect(deleteNth([20,37,20,21], 1)).toEqual([20,37,21])
	});

	it("returns a given array with the given count max of each element", function(){
		expect(deleteNth([1,1,3,3,7,2,2,2,2], 3)).toEqual([1, 1, 3, 3, 7, 2, 2, 2])
	});
});

describe("take", function(){

	it("takes an array and an integer and give ....... check tests", function(){
		expect(take([1,2,3,4], 1)).toEqual([2,3,4])
	});

	it("takes an array and an integer and give ....... check tests", function(){
		expect(take([1,2,3,4], 2)).toEqual([3,4])
	});

	it("takes an array and an integer and give ....... check tests", function(){
		expect(take([1,2,3,4])).toEqual([1,2,3,4])
	});
});

describe("find even index", function(){
	it("takes an array and return the index of the number in the middle where both side give the same sum", function(){
		expect(findEvenIndex([1,2,3,4,5,6])).toEqual(-1)
	});

	it("takes an array and return the index of the number in the middle where both side give the same sum", function(){
		expect(findEvenIndex([20,10,30,10,10,15,35])).toEqual(4)
	});

	it("takes an array and return the index of the number in the middle where both side give the same sum", function(){
		expect(findEvenIndex([10,-80,10,10,15,35,20])).toEqual(6)
	});

	it("takes an array and return the index of the number in the middle where both side give the same sum", function(){
		expect(findEvenIndex([-1,-2,-3,-4,-3,-2,-1])).toEqual(3)
	});
});

describe("increment string", function(){
	it("takes a string and a number and give back the string with the number +1", function(){
		expect(increment("foo")).toEqual("foo1")
	});

	it("takes a string and a number and give back the string with the number +1", function(){
		expect(increment("foobar1")).toEqual("foobar2")
	});

	it("takes a string and a number and give back the string with the number +1", function(){
		expect(increment("")).toEqual("1")
	});

	it("takes a string and a number and give back the string with the number +1", function(){
		expect(increment("foobar99")).toEqual("foobar100")
	});
});


describe("find it", function(){
	it("Given an array, find the int that appears an odd number of times.", function(){
		expect(findIt([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])).toEqual(5)
	});

	it("Given an array, find the int that appears an odd number of times.", function(){
		expect(findIt([1,1,1,1,1,1,10,1,1,1,1])).toEqual(10)
	});
});






















