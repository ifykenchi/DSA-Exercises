// Write a program that uses a singly linked list to keep track of a set of test grades
// entered interactively into the program.

class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
	}
}

class LList {
	constructor() {
		this.head = new Node("head");
	}

	findPrevious(item) {
		let currNode = this.head;
		while (currNode.next !== null && currNode.next.element != item) {
			currNode = currNode.next;
		}
		return currNode;
	}

	remove(item) {
		let prevNode = this.findPrevious(item);
		if (prevNode.next !== null) {
			prevNode.next = prevNode.next.next;
		}
	}

	display() {
		let currNode = this.head;
		while (currNode.next !== null) {
			console.log(currNode.next.element);
			currNode = currNode.next;
		}
	}

	find(item) {
		let currNode = this.head;
		while (currNode.element !== item) {
			currNode = currNode.next;
		}
		return currNode;
	}

	insert(newElement, item) {
		let newNode = new Node(newElement);
		let current = this.find(item);
		newNode.next = current.next;
		current.next = newNode;
	}
}

let records = new LList();
records.insert(100, "head");
records.insert(97, 100);
records.insert(42, 97);
records.insert(53, 42);
records.display();

console.log("removed 97");
records.remove(97);
records.display();
