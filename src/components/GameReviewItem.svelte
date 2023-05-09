<script lang="ts">
  import type { GamereviewQuery } from "@tina/types";
  import TinaMarkdown from "./TinaMarkdown/TinaMarkdown.svelte";
  export let review: GamereviewQuery["gamereview"];
</script>

<article role="listitem">
  <header>
    <h2>{review.title}</h2>
    <data value={review.rating}>{review.rating}</data>
  </header>
</article>

<style>
  article {
    padding: 1rem;
    border-radius: 0.5rem;
    background: rgb(0 0 0 / 5%);
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    margin: 0;
    font: var(--font-body-lg);
  }

  data {
    padding: 0.5rem;
    border-radius: 0.5rem;
    background: rgb(0 0 0 / 5%);
  }
</style>
