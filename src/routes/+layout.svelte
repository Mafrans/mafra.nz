<script>
  import "@fontsource/inter/variable.css";
  import "modern-normalize/modern-normalize.css";
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
    margin: 15vh auto;
    padding: 0 1rem;
  }
</style>
