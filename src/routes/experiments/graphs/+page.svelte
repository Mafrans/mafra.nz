<script lang="ts">
  import Button from "~/components/Button.svelte";

  type Node = {
    x: number;
    y: number;
    neighbors: number[];
  };

  const distributions = {
    uniform: "Uniform",
    random: "Random",
    normal: "Normal",
  } as const;

  const algorithms = {
    dijkstra: "Dijkstra",
    breadthFirst: "Breadth First",
    depthFirst: "Depth First",
  } as const;

  let distribution: keyof typeof distributions = "random";
  let number = 100;
  let neighborChance = 0.25;
  let guaranteedNeighbor = false;
  let algorithm: keyof typeof algorithms = "dijkstra";
  let speed = 10;

  let canvas: HTMLCanvasElement;
  let nodes: Node[] = [];
  let edgeWeights: Map<number, number> = new Map();
  let startNode = 0;
  let queuedNodes: number[] = [];
  let visitedNodes: Set<number> = new Set();
  let visitedEdges: Set<number> = new Set();

  $: simulating = false;

  function hashEdge(a: number, b: number) {
    return a * number + b;
  }

  function getWeight(a: number, b: number) {
    return (
      edgeWeights.get(hashEdge(a, b)) ?? edgeWeights.get(hashEdge(b, a)) ?? 1
    );
  }

  function getNeighbors(i: number, columns = Math.ceil(Math.sqrt(number))) {
    let neighbors: number[] = [];

    // Horizontal neighbors
    if (i % columns !== 0) neighbors.push(i - 1);
    if (i % columns !== columns - 1) neighbors.push(i + 1);

    // Vertical neighbors
    if (i >= columns) neighbors.push(i - columns);
    if (i < number - columns) neighbors.push(i + columns);

    // Diagonal neighbors
    if (i % columns !== 0 && i >= columns) neighbors.push(i - columns - 1);
    if (i % columns !== columns - 1 && i >= columns)
      neighbors.push(i - columns + 1);

    // Remove impossible neighbors
    return neighbors.filter((neighbor) => neighbor >= 0 && neighbor < number);
  }

  function generate() {
    visitedEdges.clear();
    visitedNodes.clear();

    const columns = Math.ceil(Math.sqrt(number));
    nodes = Array.from({ length: number }, () => ({
      x: 0,
      y: 0,
      neighbors: [],
    }));

    // Add nodes
    for (let i = 0; i < number; i++) {
      const node = nodes[i];

      // Arrange nodes in a grid
      node.x = (i % columns) / columns;
      node.y = Math.floor(i / columns) / columns;

      // Center nodes in their cells
      node.x += 0.5 / columns;
      node.y += 0.5 / columns;

      if (distribution === "random") {
        node.x += (Math.random() - 0.5) * (0.75 / columns);
        node.y += (Math.random() - 0.5) * (0.75 / columns);
      }
    }
    startNode = Math.floor(Math.random() * number);

    // Add edges
    for (let i = 0; i < number; i++) {
      for (const ni of getNeighbors(i, columns)) {
        const a = nodes[i];
        const b = nodes[ni];
        const distance = Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);

        if (Math.random() > neighborChance) continue;

        a.neighbors.push(ni);
        b.neighbors.push(i);
        edgeWeights.set(hashEdge(i, ni), distance);
      }
    }

    // Add guaranteed edges to nodes without neighbors
    if (guaranteedNeighbor) {
      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].neighbors.length !== 0) continue;

        const neighbors = getNeighbors(i, columns);
        const ni = neighbors[Math.floor(Math.random() * neighbors.length)];
        const a = nodes[i];
        const b = nodes[ni];
        const distance = Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);

        a.neighbors.push(ni);
        b.neighbors.push(i);
        edgeWeights.set(hashEdge(i, ni), distance);
      }
    }

    render();
  }

  function render() {
    console.time("render");
    const scale = 1 / Math.sqrt(nodes.length);
    const nodeSize = 100 * scale;
    const context = canvas.getContext("2d");
    if (!context) return;

    const width = canvas.width - 2 * nodeSize;
    const height = canvas.height - 2 * nodeSize;
    const offsetX = nodeSize;
    const offsetY = nodeSize;

    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < nodes.length; i++) {
      const { x, y, neighbors } = nodes[i];
      for (const ni of neighbors) {
        const { x: nx, y: ny } = nodes[ni];

        context.strokeStyle =
          visitedEdges.has(hashEdge(i, ni)) || visitedEdges.has(hashEdge(ni, i))
            ? "lightGreen"
            : "black";

        context.lineWidth = 2;
        context.beginPath();
        context.moveTo(offsetX + x * width, offsetY + y * height);
        context.lineTo(offsetX + nx * width, offsetY + ny * height);
        context.stroke();

        const weight = getWeight(i, ni);
        const tw = context.measureText(weight.toFixed(2));
        const margin = 5;

        context.textAlign = "center";
        context.textBaseline = "middle";
        context.font = `${nodeSize / 2}px sans-serif`;
        context.clearRect(
          offsetX + ((x + nx) / 2) * width - tw.width / 2 - margin,
          offsetY + ((y + ny) / 2) * height - nodeSize / 4 - margin,
          tw.width + 2 * margin,
          nodeSize / 2 + 2 * margin
        );
        context.fillText(
          weight.toFixed(2),
          offsetX + ((x + nx) / 2) * width,
          offsetY + ((y + ny) / 2) * height
        );
      }
    }

    for (let i = 0; i < nodes.length; i++) {
      const { x, y } = nodes[i];

      context.fillStyle = "white";
      context.strokeStyle = "black";

      if (queuedNodes.includes(i)) context.fillStyle = "lightgrey";
      if (visitedNodes.has(i)) context.fillStyle = "lightgreen";

      context.beginPath();
      context.arc(
        offsetX + x * width,
        offsetY + y * height,
        nodeSize,
        0,
        Math.PI * 2
      );
      context.fill();
      context.stroke();

      context.textAlign = "center";
      context.textBaseline = "middle";
      context.font = `${nodeSize}px sans-serif`;

      context.fillStyle = "black";
      context.fillText(i.toString(), offsetX + x * width, offsetY + y * height);
    }

    console.timeEnd("render");
  }

  async function renderSimulation() {
    await new Promise((done) => setTimeout(done, 250 / speed));
    requestAnimationFrame(render);
  }

  async function simulate() {
    visitedNodes.clear();
    visitedEdges.clear();

    simulating = true;
    switch (algorithm) {
      case "breadthFirst":
        await simulateBreadthFirst();
      case "depthFirst":
        await simulateDepthFirst();
      case "dijkstra":
        await simulateDijkstra();
    }
    simulating = false;
  }

  async function simulateBreadthFirst() {
    queuedNodes = [startNode];

    while (queuedNodes.length > 0) {
      const i = queuedNodes.pop()!;
      visitedNodes.add(i);
      for (const ni of nodes[i].neighbors) {
        if (visitedNodes.has(ni)) continue;
        visitedEdges.add(hashEdge(i, ni));
        queuedNodes.unshift(ni);

        await renderSimulation();
      }

      await renderSimulation();
    }
  }

  async function simulateDepthFirst() {
    async function dfs(i: number) {
      visitedNodes.add(i);
      for (const ni of nodes[i].neighbors) {
        if (!visitedNodes.has(ni)) {
          visitedEdges.add(hashEdge(i, ni));
          queuedNodes.push(ni);
          await renderSimulation();
          await dfs(queuedNodes.pop()!);
        }
      }
    }

    await dfs(startNode);
  }

  async function simulateDijkstra() {
    queuedNodes = [];
    const dist: number[] = [];
    const prev: (number | undefined)[] = [];

    for (let i = 0; i < nodes.length; i++) {
      dist[i] = Infinity;
      prev[i] = undefined;
      queuedNodes.push(i);
    }
    dist[startNode] = 0;

    while (queuedNodes.length > 0) {
      queuedNodes.sort((a, b) => dist[a] - dist[b]);

      let i = queuedNodes.shift();
      if (i == null) return;

      visitedNodes.add(i);
      await renderSimulation();

      for (const ni of nodes[i].neighbors) {
        const w = dist[i] + getWeight(i, ni);
        visitedEdges.add(hashEdge(i, ni));
        if (w < dist[ni]) {
          dist[ni] = w;
          prev[ni] = i;
          queuedNodes.push(ni);
        }
        await renderSimulation();
      }
    }
  }
</script>

<main>
  <div class="sidebar">
    <label>
      <span>Distribution</span>
      <select bind:value={distribution}>
        {#each Object.entries(distributions) as [value, label]}
          <option {value}>{label} </option>
        {/each}
      </select>
    </label>

    <label>
      <span>Node Count</span>
      <input type="number" bind:value={number} />
    </label>

    <label>
      <span>Neighbor Chance</span>
      <div class="range-container">
        {neighborChance.toFixed(2)}
        <input
          type="range"
          bind:value={neighborChance}
          min={0}
          max={1}
          step={0.01}
        />
      </div>
    </label>

    <label>
      <span>Guarantee ≥1 neighbor</span>
      <input type="checkbox" bind:checked={guaranteedNeighbor} />
    </label>

    <label>
      <span>Algorithm</span>
      <select bind:value={algorithm}>
        {#each Object.entries(algorithms) as [value, label]}
          <option {value}>{label} </option>
        {/each}
      </select>
    </label>

    <label>
      <span>Simulation Speed</span>
      <div class="range-container">
        {speed * 10}%
        <input type="range" bind:value={speed} min={1} max={50} step={0.5} />
      </div>
    </label>

    <div class="buttons">
      <button disabled={simulating} on:click={generate}>Generate</button>
      <button disabled={simulating} on:click={simulate}>Simulate</button>
    </div>
  </div>
  <div class="content">
    <canvas width={1000} height={1000} bind:this={canvas} />
  </div>
</main>

<style>
  label {
    display: flex;
    flex-direction: column;
  }

  select,
  input[type="number"] {
    padding: 0.5rem;
    background: rgb(0 0 0 / 10%);
    border: 2px solid rgb(0 0 0 / 5%);
    border-radius: 6px;
  }

  .range-container {
    font-size: 14px;
    display: grid;
    grid-template-columns: max-content 1fr;
    align-items: center;
    gap: 0.5rem;
  }

  input[type="range"]::-webkit-slider-runnable-track,
  input[type="range"]::-moz-range-track {
    background: rgb(0 0 0 / 10%);
  }

  input[type="checkbox"] {
    appearance: none;
    width: 1.5rem;
    height: 1.5rem;
    border: 2px solid rgb(0 0 0 / 20%);
    border-radius: 6px;
    cursor: pointer;
  }

  input[type="checkbox"]:checked::after {
    content: " ";
    display: block;
    width: 0.9rem;
    height: 0.9rem;
    margin: 0.175rem;
    background: rgb(0 0 0 / 60%);
    border-radius: 3px;
  }

  main {
    display: grid;
    height: 100vh;
    grid-template-columns: 300px 1fr;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23acaa92' fill-opacity='0.21'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  canvas {
    width: 100%;
    height: 100vh;
    object-fit: contain;
    aspect-ratio: 1;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border-right: 1px solid rgb(0 0 0 / 10%);
  }

  button {
    appearance: none;
    padding: 0.5rem 1rem;
    background: rgb(0 0 0 / 10%);
    border: 2px solid rgb(0 0 0 / 5%);
    border-radius: 6px;
    cursor: pointer;
    transition: opacity var(--ease-out);
  }

  button:disabled {
    pointer-events: none;
  }

  button:hover {
    opacity: 60%;
  }

  .buttons {
    width: 100%;
    padding: 1rem 0;
    border-top: 2px solid rgb(0 0 0 / 5%);
    display: flex;
    gap: 1rem;
  }
</style>
