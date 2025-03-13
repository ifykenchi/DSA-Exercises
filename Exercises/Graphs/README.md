## graph1

#### To check if there is a valid path from a source to the destination, I check the base case, when the source is the destination and return true.

#### Then I create a set to keep track of each edge I have visited. And a stack array to implement depth-first traversal.

#### Using a while loop, as long as the stack is not empty, I remove the last vertex added to the stack and iterat through it's edges. If it is the destination I am looking for, I return true. If not, then I check if it has been visited. If false, then I add it to the visited array an also push it into the stack.

#### At the end of the while loop, if there is no match I return false

---

## graph2

#### Since the input is a two dimensional array, the center of the star graph will be the vertex that occurs in all the sub arrays.

#### I solved this problem by using the Map object. I iterate through the array and sub arrays and record how many tieseach vertex occurs.

#### Finally I return the vertex that occurs the same number of times as the length of the input array.
