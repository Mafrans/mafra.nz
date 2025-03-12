<script lang="ts">
  import type { Ref } from "~/content";
  import Button from "./Button.svelte";
  import type { Post } from "~/types/Post";
  import { page } from "$app/stores";

  export let items: Ref<Post>[] = [];
  export let prefix: string = $page.url.pathname;
</script>

<section class="postlist">
  {#each items as item}
    {@const { title, excerpt, image } = item.content.attributes}

    <article class="item">
      <img src={image} alt={title} />
      <div class="content">
        <h3>{title}</h3>
        <p>{excerpt}</p>

        <Button href={`${prefix}/${item.file}`}>Read More</Button>
      </div>
    </article>
  {/each}

  {#if items.length === 0}
    <p>Nothing here yet.</p>
  {/if}
</section>

<style>
  .postlist {
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
    width: 100%;
  }

  .item {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: var(--space-lg);
    width: 100%;
    align-items: center;
    margin-bottom: 1rem;
    text-align: right;
  }

  .item p {
    margin-bottom: var(--space-md);
    font: var(--font-body);
  }

  .item img {
    width: 200px;
    aspect-ratio: 4 / 3;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--rounded);
    outline: 4px black dashed;
    outline-offset: 4px;
    text-align: center;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  @media (max-width: 640px) {
    .item {
      grid-template-columns: 1fr;
      justify-content: center;
      text-align: center;
    }

    .item img {
      margin: 0 auto;
    }

    .content {
      align-items: center;
    }
  }
</style>
