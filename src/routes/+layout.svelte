<script>
  import "@fontsource/inter/variable.css";
  import "../styles/variables.css";
</script>

<main>
  <slot />
</main>

<style>
  :global(body) {
    font: var(--font-body);
  }

  main {
    max-width: var(--container);
    margin: 200px auto;
    padding: 0 1rem;
  }
</style>
