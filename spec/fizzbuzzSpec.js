describe("Calculates fizzbuzz", function(){
	it("returns one for number one as input", function(){
		expect(fizzBuzz(1)).toBe(1);
	});

	it("returns the inputed number for non particular cases", function(){
		expect(fizzBuzz(2)).toBe(2);
		expect(fizzBuzz(4)).toBe(4);
		expect(fizzBuzz(7)).toBe(7);
		expect(fizzBuzz(201)).toBe(201);
	});

	it("returns Fizz word when input is 3", function(){
		expect(fizzBuzz(3)).toBe(3)
	});
});