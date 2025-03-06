//Store a set of words in an array and display the contents both forward and backward.

const words = ["cats", "fish", "bicycle", "panda", "trains"];

const backwardWords = words.map((word) => {
	const reversedWords = word.split("").reverse();
	return reversedWords.join("");
});

console.log(`forward words: ${words.join(", ")}`);
console.log(`backward words: ${backwardWords.join(", ")}`);
