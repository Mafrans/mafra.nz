<script>
  import "../styles/global.css";
</script>

<div class="container">
  <slot />
</div>

<style>
  :global(body) {
    font: var(--font-body);
    background: var(--color-grey-50);
  }

  .container {
    max-width: var(--container);
    display: grid;
    gap: 1.5vw;
    grid-template-columns: 1fr 2fr;
    margin: 15vh auto;
    padding: 0 1rem;
  }

  .container > :global(*) {
    width: 100%;
  }
</style>
