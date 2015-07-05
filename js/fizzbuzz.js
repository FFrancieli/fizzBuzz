function fizzBuzz(number){
	if (isMultipleOf(number, 5) && isMultipleOf(number, 3))
		return "FizzBuzz";
	if (isMultipleOf(number, 3))
		return  "Fizz";
	if (isMultipleOf(number, 5))
		return "Buzz";
	return number;
}

function isMultipleOf(number, multiple){
	return number%multiple == 0;
}