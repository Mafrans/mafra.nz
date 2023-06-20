<script>
  import "../styles/global.css";
</script>

<slot />

<style>
  :global(body) {
    font: var(--font-body);
    background: var(--color-grey-50);
    min-height: 100vh;
  }
</style>
