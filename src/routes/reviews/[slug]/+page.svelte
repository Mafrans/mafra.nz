<script lang="ts">
  import TinaMarkdown from "~/components/TinaMarkdown/TinaMarkdown.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  const { title, body, rating } = data.content.gamereview;
</script>

<header>
  <h1>{title}</h1>
  <p class="rating">
    <data value={rating}>{rating}</data>
    <span>/10</span>
  </p>
</header>

<TinaMarkdown content={body} />

<style>
  :global(body) {
    --container: 960px;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid rgb(0 0 0 / 15%);
  }

  .rating {
    font: var(--font-body);
  }

  .rating data {
    font: var(--font-headline-2);
  }

  h1 {
    font: var(--font-headline-1);
    margin: 0;
  }
</style>
