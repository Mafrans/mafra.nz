<script>
  import Button from "~/components/Button.svelte";
</script>

<main class="container">
  <img src="/four-oh-four.webp" width="400" alt="" />
  <h1>404</h1>
  <p>Sorry, we couldn't find this page</p>
  <Button href="/">Back home</Button>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 2rem;
  }
</style>
