<script>
  import "../styles/global.css";
</script>

<slot />

<style>
  :global(body) {
    font: var(--font-body);
    background-image: url("/background-texture.webp");
    background-size: 700px;
    min-height: 100vh;
  }
</style>
