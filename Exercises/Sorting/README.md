## sorting1

#### To solve this problem I implemented quick sort algorithm.

#### The high and low for the initial array is 0 and the array length - 1 respectively.

#### I set the last element of the array as the pivot and the initial pointer i as -1.

#### I loop through the array and whenever the array element at the current index is less than the pivot, I increase i by one and swap with the array element at i. Doing this, I'm moving all elements less than the pivot to the start.

#### Finally, I move the pivot to the next slot after the last element that is less than it. This way, to the right of the pivot are elements greater than it and to it's left are elements less than it. And return the index of the pivot.

#### I call this function recursively on the left hand side subarray and right hand side subarray of the pivot.

---

## sorting2

#### For this problem, I looped through the string and recorded each character and it's frequency in a Map object.

#### Then I convert the Mp object into an array of arrays containing each character and it's frequency.

#### Finally I used quick sort to sort the array according to the character with the highest frequency, then return the strings.

#### I implemented the same quick sort algorithm from the first challenge but modified the loop so that i is increased by one only when the array at the current index is greater than or equal to the pivot element. And then I swap the element at the current index with the element at i. This way, only the higher values (characters with greater frequency) are to the left of the pivot element.
