// Write a function that takes an arithmetic expression as an argument and
// returns the position in the expression where a parenthesis is missing. An example
// of an arithmetic expression with unbalanced parentheses is 2.3 + 23 / 12 + (3.14159
// * .24.

function checkParenthesis(expression) {
	const stack = [];

	for (let i = 0; i < expression.length; i++) {
		if (expression[i] === "(") {
			stack.push(i);
		} else if (expression[i] === ")" && stack.length === 0) {
			return `Unmatched Closing parenthesis at position ${i + 1}`;
		} else if (expression[i] === ")" && stack.length !== 0) {
			stack.pop();
		}

		if (stack.length > 0) {
			return `Unmatched opening parenthesis at position ${i + 1}`;
		}
	}
}

console.log(checkParenthesis("2.3 + 23 / 12 + (3.14159 * .24"));
