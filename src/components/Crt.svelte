<script lang="ts">
  const Rows = 16;
  const Cols = 48;

  let content = Array.from({ length: Rows }, (_, y) =>
    Array.from({ length: Cols }, (_, x) => {
      const [u, v] = [x / Cols, y / Rows];
      const [cu, cv] = [u - 0.5, v - 0.5];
      const len = Math.sqrt(cu * cu + cv * cv);
      const normal = [cu / len, cv / len];

      return {
        char: ((y * Cols + x) % 36).toString(36),
        pos: [x, y],
        len,
        normal,
      };
    })
  );
</script>

<div class="wrapper">
  {#each content as row}
    <div class="row">
      {#each row as { char, normal, len }}
        <span
          style={`
          --skew: ${Math.pow(len, 2)};
          --nx: ${normal[0]};
          --ny: ${normal[1]};
        `}>{char}</span
        >
      {/each}
    </div>
  {/each}
</div>

<style>
  .wrapper {
    perspective: 100px;
    width: max-content;
  }

  .row {
    display: flex;
  }

  span {
    display: block;
    background: black;
    color: white;
    letter-spacing: 1px;
    line-height: 1.1;
    font: var(--font-terminal);
    transform: translate(
        calc(var(--nx) * var(--skew) * -50px),
        calc(var(--ny) * var(--skew) * -50px)
      )
      scale(calc(1 - var(--skew) * 0.1))
      rotate3d(var(--ny), calc(-1 * var(--nx)), 0, calc(90deg));
  }
</style>
