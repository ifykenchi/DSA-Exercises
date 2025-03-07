// A postfix expression evaluator works on arithmetic expressions taking the following
// form:
// op1 op2 operator
// Using two stacks—one for the operands and one for the operators—design and
// implement a JavaScript function that converts infix expressions to postfix expres‐
// sions, and then use the stacks to evaluate the expression

function precedence(op) {
	if (op === "**") {
		return 3;
	} else if (op === "/" || op === "*") {
		return 2;
	} else if (op === "+" || op === "-") {
		return 1;
	} else {
		return -1;
	}
}

function postfix(expression) {
	const stack = [];
	let result = "";

	for (let i = 0; i < expression.length; i++) {
		let char = expression[i];
		if (char === " ") {
			continue;
		}

		if (!isNaN(char)) {
			result += char;
		} else if (char === "(") {
			stack.push("(");
		} else if (char === ")") {
			while (stack[stack.length - 1] !== "(") {
				result += stack.pop();
			}
			stack.pop();
		} else {
			while (
				stack.length &&
				precedence(char) <= precedence(stack[stack.length - 1])
			) {
				result += stack.pop();
			}
			stack.push(char);
		}
	}

	while (stack.length) {
		result += stack.pop();
	}

	for (let value of result) {
		if (!isNaN(value)) {
			stack.push(Number(value));
		} else {
			let val1 = stack.pop();
			let val2 = stack.pop();

			switch (value) {
				case "+":
					stack.push(val2 + val1);
					break;
				case "-":
					stack.push(val2 - val1);
					break;
				case "/":
					stack.push(Number((val2 / val1).toFixed(2)));
					break;
				case "*":
					stack.push(val2 * val1);
					break;
				case "**":
					stack.push(val2 ** val1);
					break;
			}
		}
	}

	return `Postfix expression: ${result} \nResult = ${stack.pop()}`;
}

console.log(postfix("2 + (6 / 3) + (3 * 2)"));
