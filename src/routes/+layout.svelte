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
    max-width: 860px;
    margin: 15vh auto;
  }
</style>
