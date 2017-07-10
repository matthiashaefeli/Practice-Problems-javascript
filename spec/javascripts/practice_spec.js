
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
		expect(auto_complete("ai", dictionary)).toEqual(["airplane", "airport"])
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
		expect(auto_complete("a", dictionary)).toEqual(['abnormal','arm-wrestling','absolute','airplane','airport'])
	});
})
