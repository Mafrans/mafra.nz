<script lang="ts">
  import type { PortfolioItem } from "~/types/PortfolioItem";
  import type { Ref } from "~/content";
  import Button from "./Button.svelte";
  export let items: Ref<PortfolioItem>[] = [];
</script>

<section class="portfolio">
  {#each items as item}
    {@const { title, excerpt, image } = item.content.attributes}

    <article class="item">
      <img src={image} alt={title} />
      <div class="content">
        <h3>{title}</h3>
        <p>{excerpt}</p>

        <Button href={`/portfolio/${item.file}`}>Read More</Button>
      </div>
    </article>
  {/each}
</section>

<style>
  .portfolio {
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
  }

  .item p {
    margin-bottom: var(--space-md);
    font: var(--font-body);
  }

  .item img {
    width: 200px;
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
    }

    .item img {
      margin: 0 auto;
    }

    .content {
      align-items: center;
    }
  }
</style>
