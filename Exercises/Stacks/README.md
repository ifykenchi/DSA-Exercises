## stack1

#### I used the Stack data structure to iterate through a string and return the position of a missing item. This way I avoided using a nested loop to check for the item.

---

## stack2

#### I learnt that while this: a + (b * c) + d is more readable to us, it is inefficient because the compiler has to scan the expression multiple times to solve b*c first, then add a and d.

### The postfix expression solves this problem. here there is no need for parenthesis, and only move back one step when an operator is reached.

#### To implement this logic, I created a separate function to calculate the precedence of each operator

#### In the postfix function I created two stack arrays. One to passin the operators and the second is a string to pass in the results.

### I used a for loop to iterate through the input expression. for each character:

#### If it is a number, I added it to the result string.

#### If it is an operator, as long as has the higher precedence in the stack array, I push it into the array. But if it is lower or equal to one already inside the stack array, I pop all the operators from the stack array and into the result before pushing the operator into it.

#### If it is an opening parenthesis, I push it to the stack. This is because parenthesis affects precedence in an arihmetic expression.

#### Now if it is a closing parenthesis, I pop in all operators in the stack to the result. while doing this, I use the opening parenthesis as the stop and remove it after once the operation is done.

#### Finally I used the empty stack to push in the numbers i pop() from the result. When an operator is reached, I use it to evaluate the last two values in the stack. Only one value will be left i the stack and that is the answer.
