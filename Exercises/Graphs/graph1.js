// There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

// You want to determine if there is a valid path that exists from vertex source to vertex destination.

// Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.

// Constraints:

// 1 <= n <= 2 * 105
// 0 <= edges.length <= 2 * 105
// edges[i].length == 2
// 0 <= ui, vi <= n - 1
// ui != vi
// 0 <= source, destination <= n - 1
// There are no duplicate edges.
// There are no self edges.

const Graph = require("./graph");

function isReachable(g, s, d) {
	if (s == d) return true;

	const visited = new Set();
	let stack = [];

	visited.add(s);
	stack.push(s);

	while (stack.length !== 0) {
		const currentVertex = stack.pop();

		for (let i = 0; i < g.adjacencyList[currentVertex].length; i++) {
			if (g.adjacencyList[currentVertex][i] == d) return true;

			if (!visited.has(g.adjacencyList[currentVertex][i])) {
				visited.add(g.adjacencyList[currentVertex][i]);
				stack.push(g.adjacencyList[currentVertex][i]);
			}
		}
	}
	return false;
}

const g = new Graph();

g.addVertex(0);
g.addVertex(1);
g.addVertex(2);

g.addEdge(0, 1);
g.addEdge(1, 2);
g.addEdge(2, 0);

console.log(isReachable(g, 0, 2));
