<script lang="ts">
  import TinaMarkdown from "~/components/TinaMarkdown/TinaMarkdown.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  const { image, content, title } = data.content;
</script>

<main class="richtext">
  <img src={image} alt="" srcset="" />
  <h1>{title}</h1>
  <TinaMarkdown {content} />
</main>

<style>
  img {
    border-radius: var(--radius-md);
    margin-bottom: 2rem;
    width: 100%;
  }
</style>
