<script lang="ts">
  import client from "@tina/client";
  import GameReviewItem from "~/components/GameReviewItem.svelte";
  import TinaMarkdown from "~/components/TinaMarkdown/TinaMarkdown.svelte";

  $: reviews = client.queries
    .gamereviewConnection({ sort: "rating", last: 10 })
    .then((connection) =>
      connection.data.gamereviewConnection.edges?.map((edge) => edge?.node)
    );
</script>

<div class="container">
  <h1>Game reviews</h1>

  {#await reviews then reviews}
    {#if reviews}
      <ol class="reviews">
        {#each reviews as review}
          {#if review != null}
            <GameReviewItem {review} />
          {/if}
        {/each}
      </ol>
    {/if}
  {/await}
</div>

<style>
  :global(body) {
    background: var(--color-grey-50);
    color: var(--color-black);
    --container: 1024px;
  }

  h1 {
    text-align: center;
    font: var(--font-headline-2);
  }

  .reviews {
    display: flex;
    padding: 0;
    flex-direction: column;
    gap: 0.5rem;
  }

  a {
    color: unset;
    text-decoration: none;
  }
</style>
