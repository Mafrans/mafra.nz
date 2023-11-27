<script lang="ts">
  import Divider from "~/components/Divider.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  const { title, excerpt, image } = data.content.attributes;
</script>

<main class="container richtext">
  <img class="top-image" src={image} alt="" srcset="" />
  <h1>{title}</h1>
  <p>{excerpt}</p>

  <Divider type="dots" />

  {@html data.content.html}
</main>
```

<style>
  main {
    text-align: center;
    height: 100%;
  }

  .top-image {
    border-radius: var(--radius-md);
    margin: 0 auto;
    margin-bottom: 2rem;
  }
</style>
