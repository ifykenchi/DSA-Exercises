// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

// Example 1:

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input: s = "cccaaa"
// Output: "aaaccc"
// Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:

// Input: s = "Aabb"
// Output: "bbAa"
// Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.

// Constraints:

// 1 <= s.length <= 5 * 105
// s consists of uppercase and lowercase English letters and digits.

function sortString(str) {
	const stringMap = new Map();
	for (const char of str) {
		stringMap.set(char, (stringMap.get(char) || 0) + 1);
	}

	const strArray = Array.from(stringMap);

	quickSort(strArray, 0, strArray.length - 1);

	let sortedString = "";
	for (const [char, frequency] of strArray) {
		sortedString += char.repeat(frequency);
	}

	return sortedString;
}

function partition(arr, low, high) {
	let pivot = arr[high][1];
	let i = low - 1;

	for (let j = low; j < high; j++) {
		if (arr[j][1] >= pivot) {
			i++;
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
	}
	[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
	return i + 1;
}

function quickSort(arr, low, high) {
	if (low < high) {
		let pindex = partition(arr, low, high);

		quickSort(arr, low, pindex - 1);
		quickSort(arr, pindex + 1, high);
	}
}

console.log(sortString("tree"));
console.log(sortString("cccaaa"));
console.log(sortString("Aabb"));
