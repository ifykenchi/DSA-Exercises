// Modify the priority queue example from Example 5-5 so that the higher-priority elements have higher numbers rather than lower numbers. Test your implementation with the example in the chapter.

class PriorityQueue {
	constructor() {
		this.dataStore = [];
	}

	enqueue(data) {
		return this.dataStore.push(data);
	}

	dequeue() {
		if (this.dataStore.length === 0) {
			console.log("queue empty");
			return null;
		}

		let priority = 0;
		for (let i = 1; i < this.dataStore.length; i++) {
			if (this.dataStore[i].code > this.dataStore[priority].code) {
				priority = i;
			}
		}
		return this.dataStore.splice(priority, 1)[0];
	}

	print() {
		let returnStr = "";
		for (let i = 0; i < this.dataStore.length; i++) {
			returnStr += `${this.dataStore[i].name} code: ${this.dataStore[i].code} \n`;
		}
		return returnStr;
	}
}

class Patient {
	constructor(name, code) {
		this.name = name;
		this.code = code;
	}
}

let patient = new Patient("Smith", 5);
let waitList = new PriorityQueue();

waitList.enqueue(patient);
patient = new Patient("Jones", 4);
waitList.enqueue(patient);
patient = new Patient("Freddy", 6);
waitList.enqueue(patient);
patient = new Patient("Brown", 1);
waitList.enqueue(patient);
patient = new Patient("Joan", 1);
waitList.enqueue(patient);

console.log(waitList.print());

let seen = waitList.dequeue();
console.log(`Patient being treated: ${seen.name}`);
console.log(`Patients waiting to be seen: \n${waitList.print()}`);

seen = waitList.dequeue();
console.log(`Patient being treated: ${seen.name}`);
console.log(`Patients waiting to be seen: \n${waitList.print()}`);

seen = waitList.dequeue();
console.log(`Patient being treated: ${seen.name}`);
console.log(`Patients waiting to be seen: \n${waitList.print()}`);
