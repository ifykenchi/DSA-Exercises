//Create a grades object that stores a set of student grades in an object. Provide a
//function for adding a grade and a function for displaying the student’s grade average.

class Grades {
	constructor(scores) {
		this.scores = scores;
	}

	add(...scores) {
		this.scores.push(...scores);
	}

	average() {
		let total = this.scores.reduce((acc, val) => acc + val, 0);
		return (total / this.scores.length).toFixed(2);
	}
}

const lilySchool = new Grades([2, 3, 6, 4, 9]);
console.log(lilySchool.average());

lilySchool.add(5, 7);
console.log(lilySchool.average());
