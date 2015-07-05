describe("Calculates fizzbuzz", function(){
	it("returns one for number one as input", function(){
		expect(fizzBuzz(1)).toBe(1);
	});

	it("returns the inputed number for non particular cases", function(){
		expect(fizzBuzz(2)).toBe(2);
		expect(fizzBuzz(4)).toBe(4);
		expect(fizzBuzz(7)).toBe(7);
		expect(fizzBuzz(202)).toBe(202);
	});

	it("returns Fizz word when input is 3", function(){
		expect(fizzBuzz(3)).toBe("Fizz");
	});

	it("returns Fizz word for multiples of 3", function(){
		expect(fizzBuzz(3)).toBe("Fizz");
		expect(fizzBuzz(6)).toBe("Fizz")
		expect(fizzBuzz(12)).toBe("Fizz")
		expect(fizzBuzz(48)).toBe("Fizz")
		expect(fizzBuzz(81)).toBe("Fizz")
	});

	it("returns Buzz for number 5", function(){
		expect(fizzBuzz(5)).toBe("Buzz");
	});

	it("returns Buzz word for multiples of 5", function(){
		expect(fizzBuzz(5)).toBe("Buzz");
		expect(fizzBuzz(25)).toBe("Buzz")
		expect(fizzBuzz(35)).toBe("Buzz")
		expect(fizzBuzz(40)).toBe("Buzz")
		expect(fizzBuzz(200)).toBe("Buzz")
	});

	it("returns FizzBuzz for multiples of 3 and five at same time", function(){
		expect(fizzBuzz(15)).toBe("FizzBuzz");
	});

});