<script>
  import "../../styles/global.css";
</script>

<main>
  <slot />
</main>

<style>
  :global(body) {
    font: var(--font-body);
    background: var(--color-grey-50);
  }

  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
