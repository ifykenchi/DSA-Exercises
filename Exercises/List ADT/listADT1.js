// Write a function that inserts an element into a list only if the element to be inserted
// is larger than all of the elements currently in the list. Larger can mean either greater
// than when working with numeric values, or further down in the alphabet, when
// working with textual values.

class List {
	constructor() {
		this.dataStore = [];
	}

	add(element) {
		const length = this.dataStore.length;
		const lastItem = this.dataStore[length - 1];

		if (length === 0) {
			this.dataStore.push(element);
		} else if (
			(typeof element === "number" &&
				typeof lastItem === "number" &&
				element > lastItem) ||
			(typeof element === "string" &&
				typeof lastItem === "string" &&
				element.toLowerCase() > lastItem.toLowerCase())
		) {
			this.dataStore.push(element);
		} else {
			console.log("Invalid input");
		}
	}

	print() {
		return this.dataStore;
	}
}

const words = new List();
words.add(5);
words.add(7);
words.add("apple");
console.log(words.print());
