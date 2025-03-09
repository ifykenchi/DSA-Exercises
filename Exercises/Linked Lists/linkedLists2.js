// Rewrite your solution using a doubly linked list.

class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
		this.previous = null;
	}
}

class DLList {
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
		let currNode = this.find(item);
		if (currNode.next !== null) {
			currNode.previous.next = currNode.next;
			currNode.next.previous = currNode.previous;
			currNode.next = null;
			currNode.previous = null;
		} else {
			currNode.previous.next = null;
			currNode.previous = null;
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
		newNode.previous = current;
		current.next = newNode;
	}
}

let records = new DLList();
records.insert(100, "head");
records.insert(97, 100);
records.insert(42, 97);
records.insert(53, 42);
records.display();

console.log("removed 97");
records.remove(97);
records.display();
