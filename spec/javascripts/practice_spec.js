
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

















