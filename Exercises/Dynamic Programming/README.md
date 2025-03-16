## dynProg1

#### To solve this problem I used Tabulation in Dynamic Programming.

#### I first noted the base cases. Since the substring can be a single value or a sub-array from 'i' to 'j', I created an n by n matrix with all the values set to false. And then I set the values of each single char: arr[i][i] to true. True represents palindromes.

#### For a two char palindrome, both chars have to be equal. I set that in the second for loop where i is the position of the first char, then i set the values for arr[i][i + 1] to true in the Tab. Then I set the start to i and the max length to two.

#### To get a four char palindrome from the two char palindrome, the first and last chars added must be thesame. In the last for loop, I implement this logic using the tab matrix. Whenever k is greater than max len; I set maxlen to k and start to i.

#### Finally I return the substring from start to maxlen.
