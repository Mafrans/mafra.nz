<script lang="ts">
  import type { GamereviewQuery } from "@tina/types";
  import TinaMarkdown from "./TinaMarkdown/TinaMarkdown.svelte";
  import Button from "./Button.svelte";
  export let review: GamereviewQuery["gamereview"];
</script>

<a href={review.excerpt ? undefined : `/reviews/${review._sys.relativePath}`}>
  <details role="listitem">
    <summary>
      <h2>{review.title}</h2>
      <data value={review.rating}>{review.rating}</data>
    </summary>

    <div>
      <p class="excerpt">{review.excerpt ?? ""}</p>
      <Button href={`/reviews/${review._sys.relativePath}`}>Read more</Button>
    </div>
  </details>
</a>

<style>
  a {
    color: unset;
    text-decoration: unset;
    cursor: pointer;
  }

  details {
    padding: 1rem;
    border-radius: 0.5rem;
    background: var(--color-grey-100);
    border: 1px solid var(--color-grey-300);
  }

  summary {
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

  .excerpt {
    max-width: 700px;
  }
</style>
