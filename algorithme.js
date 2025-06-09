// поиск в ширину

// const graph = {}
// graph.a = ['b', 'c']
// graph.b = ['f']
// graph.c = ['d']
// graph.d = ['f']
// graph.e = ['f']
// graph.f = ['g']

// function breadthSearch(graph, start, end) {
//   let queue = [];
//   queue.push(start);
//   while (queue.length > 0) {
//     const current = queue.shift();
//     if (!graph[current]) {
//       graph[current] = [];
//     }
//     if (graph[current].includes(end)) {
//       return true;
//     } else {
//       queue = [...queue, ...graph[current]];
//     }
//   }
//   return false;
// }

// console.log(breadthSearch(graph, 'a', 'g'))

// матрица смежности
// const matrix = [
//   [0, 1, 1, 0, 0, 0, 0],
//   [0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 1, 0, 1, 0],
//   [0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
// ];

// поиск по алгоритму дейкстра
const graph = {};
graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.g = {};

function shortPath(graph, start, end) {
  // Step 1: Initialize costs and parents
  const costs = {};
  const parents = {};
  const processed = [];

  // Set initial costs for all nodes
  Object.keys(graph).forEach(node => {
    if (node === start) {
      costs[node] = 0; // Cost to start node is 0
    } else {
      costs[node] = Infinity; // All other nodes have infinite cost initially
    }
  });

  // Step 2: Find the lowest-cost node that hasn't been processed
  function findNodeLowestCost(costs, processed) {
    let lowestCost = Infinity;
    let lowestNode = null;

    Object.keys(costs).forEach(node => {
      const cost = costs[node];
      if (cost < lowestCost && !processed.includes(node)) {
        lowestCost = cost;
        lowestNode = node;
      }
    });

    return lowestNode;
  }

  // Step 3: Process nodes
  let node = findNodeLowestCost(costs, processed);
  while (node) {
    const cost = costs[node];
    const neighbors = graph[node];

    Object.keys(neighbors || {}).forEach(neighbor => {
      const newCost = cost + neighbors[neighbor];
      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
        parents[neighbor] = node; // Update parent for path reconstruction
      }
    });

    processed.push(node); // Mark node as processed
    node = findNodeLowestCost(costs, processed); // Find next lowest-cost node
  }

  // Step 4: Return the shortest path cost to the end node
  return costs[end];
}

console.log(shortPath(graph, 'a', 'g'));