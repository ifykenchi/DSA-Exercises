// Create a Person class that stores a person’s name and their gender. Create a list of
// at least 10 Person objects. Write a function that displays all the people in the list of
// the same gender.

class Person {
	constructor(name, gender) {
		this.name = name;
		this.gender = gender;
	}
}

class List {
	constructor() {
		this.dataStore = [];
	}

	add(item) {
		this.dataStore.push(item);
	}

	print(gender) {
		const result = this.dataStore.filter((item) => item.gender === gender);
		console.log(result);
	}
}

let list = new List();

list.add(new Person("ify", "male"));
list.add(new Person("charles", "male"));
list.add(new Person("glory", "female"));
list.add(new Person("toby", "male"));
list.add(new Person("chioma", "female"));
list.add(new Person("alpha", "male"));
list.add(new Person("jenny", "female"));
list.add(new Person("grace", "female"));
list.add(new Person("andy", "male"));
list.add(new Person("chris", "male"));

list.print("male");
list.print("female");
