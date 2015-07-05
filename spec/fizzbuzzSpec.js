describe("Non-multiples of 3 and 5 numbers", function(){
	it("returns one for number one as input", function(){
		expect(fizzBuzz(1)).toBe(1);
	});

	it("returns the inputed number", function(){
		expect(fizzBuzz(2)).toBe(2);
		expect(fizzBuzz(4)).toBe(4);
		expect(fizzBuzz(7)).toBe(7);
		expect(fizzBuzz(202)).toBe(202);
	});

});

describe("Multiples of 3", function(){
	it("returns Fizz word when input is 3", function(){
		expect(fizzBuzz(3)).toBe("Fizz");
	});

	it("should return fizz", function(){
		expect(fizzBuzz(3)).toBe("Fizz");
		expect(fizzBuzz(6)).toBe("Fizz");
		expect(fizzBuzz(12)).toBe("Fizz");
		expect(fizzBuzz(48)).toBe("Fizz");
		expect(fizzBuzz(81)).toBe("Fizz");
	});
})

describe("Multiples of 5", function(){
	it("returns Buzz for number 5", function(){
		expect(fizzBuzz(5)).toBe("Buzz");
	});

	it("should return Buzz", function(){
		expect(fizzBuzz(5)).toBe("Buzz");
		expect(fizzBuzz(25)).toBe("Buzz");
		expect(fizzBuzz(35)).toBe("Buzz");
		expect(fizzBuzz(40)).toBe("Buzz");
		expect(fizzBuzz(200)).toBe("Buzz");
	});

});

describe("Multiples of 5 and 3 at the same time", function(){
	it("returns FizzBuzz for 15", function(){
		expect(fizzBuzz(15)).toBe("FizzBuzz");
	});

	it("should return FizzBuzz", function(){
		expect(fizzBuzz(15)).toBe("FizzBuzz");
		expect(fizzBuzz(45)).toBe("FizzBuzz");
		expect(fizzBuzz(75)).toBe("FizzBuzz");
		expect(fizzBuzz(105)).toBe("FizzBuzz");
	});
})
