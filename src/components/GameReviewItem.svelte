<script lang="ts">
  import type { GameReview } from "~/types/GameReview";
  import Button from "./Button.svelte";
  import { ArrowRight } from "@steeze-ui/heroicons";

  export let review: GameReview;
  export let href: string;
</script>

<details role="listitem">
  <summary>
    <h2>{review.title}</h2>
    <data value={review.rating}>{review.rating}</data>
  </summary>

  <div class="content">
    <p>{review.excerpt ?? ""}</p>
    <Button {href} rightIcon={ArrowRight}>Read more</Button>
  </div>
</details>

<style>
  details {
    background: var(--color-grey-100);
    border: 1px solid var(--color-grey-300);
    cursor: var(--cursor-pointer);
  }

  details:active {
    cursor: var(--cursor-pointer-press);
  }

  summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-lg);
  }

  h2 {
    margin: 0;
    font: var(--font-body-lg);
  }

  data {
    font-family: var(--font-mono);
    border: 1px solid var(--color-grey-300);
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    padding: var(--space-sm);
    background: var(--color-grey-50);
  }

  .content {
    padding: var(--space-lg);
    max-width: 700px;
    font: var(--font-body-sm);
  }

  details[open] summary {
    padding-bottom: 0;
  }

  details[open] .content {
    padding-top: 0;
  }
</style>
