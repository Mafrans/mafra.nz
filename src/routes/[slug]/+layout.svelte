<script>
  import "../../styles/global.css";
</script>

<main>
  <slot />
</main>

<style>
  :global(body) {
    font: var(--font-body);
    background-image: url("./background-texture.webp");
    background-size: 700px;
  }

  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
