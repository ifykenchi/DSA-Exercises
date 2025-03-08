// A deque is a queue-like structure that allows elements to be added and removed from both the front and the back of
// the list. Use the Deque class you created to determine if a given word is a palindrome.

class Deque {
	constructor() {
		this.dataStore = [];
	}

	enqueueBack(data) {
		return this.dataStore.push(data.pop());
	}

	dequeueBack() {
		return this.dataStore.pop();
	}

	enqueueFront(data) {
		return this.dataStore.unshift(data.pop());
	}

	dequeueFront() {
		return this.dataStore.shift();
	}

	print() {
		return this.dataStore.join("");
	}
}

const word = "racecar";
const wordList = word.split("");

let check = new Deque();

for (let val in word) {
	check.enqueueBack(wordList);
}

if (word === check.print()) {
	console.log(`${word} is a palindrome`);
} else {
	console.log(`${word} is not a palindrome`);
}
