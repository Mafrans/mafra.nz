<script>
  import { client } from "../../tina/__generated__/client";
  let content = client.queries.frontpage({
    relativePath: "frontpage.md",
  });
</script>

<div class="container">
  {#await content then { data: { frontpage } }}
    <h1>{frontpage.title}</h1>
  {/await}
  <p>Still working on this one</p>
</div>

<style>
  h1 {
    font: var(--font-headline-1);
  }

  p:first-of-type {
    font: var(--font-body-lg);
  }
</style>
