// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Example 1:
// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// Example 2:
// Input: p = [1,2], q = [1,null,2]
// Output: false

// Example 3:
// Input: p = [1,2,1], q = [1,1,2]
// Output: false

class Node {
	constructor(val) {
		this.data = val;
		this.left = null;
		this.right = null;
	}
}

function isIdentical(bt1, bt2) {
	if (bt1 === null && bt2 === null) return true;

	if (bt1 === null || bt2 === null) return false;

	return (
		bt1.data === bt2.data &&
		isIdentical(bt1.left, bt2.left) &&
		isIdentical(bt1.right, bt2.right)
	);
}

let bt1 = new Node(1);
bt1.left = new Node(2);
bt1.right = new Node(3);

let bt2 = new Node(1);
bt2.left = new Node(2);
bt2.right = new Node(3);

if (isIdentical(bt1, bt2)) {
	console.log("Yes");
} else {
	console.log("No");
}
