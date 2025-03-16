// Given a string s, return the longest palindromic substring in s.

function longestSubstring(str) {
	const n = str.length;
	const tab = Array.from({ length: n }, () => Array(n).fill(false));

	let start = 0;
	let maxLen = 1;

	for (let i = 0; i < n; i++) tab[i][i] = true;

	for (let i = 0; i < n - 1; i++) {
		if (str[i] === str[i + 1]) {
			tab[i][i + 1] = true;
			if (maxLen < 2) {
				start = i;
				maxLen = 2;
			}
		}
	}

	for (let k = 3; k <= n; k++) {
		for (let i = 0; i < n - k + 1; i++) {
			const j = i + k - 1;

			if (tab[i + 1][j - 1] && str[i] === str[j]) {
				tab[i][j] = true;

				if (k > maxLen) {
					start = i;
					maxLen = k;
				}
			}
		}
	}

	return str.substring(start, start + maxLen);
}

const str = "abbacaabbaabacc";
console.log(longestSubstring(str));
