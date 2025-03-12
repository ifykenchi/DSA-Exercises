## binaryTrees1

#### To test if a given root node is a binary tree, I first checked the base case where the given node is null, it means we have reached the end of the subtree. It returns true.

#### Then I compare the node.values with the minimum and maximum values passed in. The left node values must always be less than their parents and the right node values must always be greater than their parents.

#### I recursively call the function. When I pass in node.left as the node, the maximum value becomes the node value of the current node and the min value is implicitly passed in as the previous min value.

#### When I call node.right as the node, the maximum value is implicitly passed in as the previous max value and the min value is the current node value.

#### ie for node.left, the current node value must not be less than the previous node value and for node.right, the current node value must not be greater than the previous node value.

---

## binaryTrees2

#### To check if two binary trees are equal, I first confirmed the base cases. If both trees are null then the are equal. Also if either is null, then they are not equal.

#### Finally I calledthe function recursively to return the boolean if both's node data is equal, if their left subtrees are equal and if their right subtree are equal.
