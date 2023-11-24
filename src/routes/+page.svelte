<script lang="ts">
  import type { PageData } from "./$types";
  import Button from "~/components/Button.svelte";

  export let data: PageData;
  const {
    html,
    attributes: { image, title, socials },
  } = data.content;
</script>

<main class="container richtext">
  <img class="top-image" src={image} alt="" srcset="" />
  <h1>{title}</h1>
  {@html html}

  <div class="socials">
    {#each socials as social}
      {#if social != null}
        {@const { title, logo } = social.content.attributes}

        <Button target="_blank" href={`/${social.file}`}>
          <img src={logo} width="24" alt={`${title} logo`} />
          {title}
        </Button>
      {/if}
    {/each}
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100%;
  }

  .top-image {
    border-radius: var(--radius-md);
    margin: 0 auto;
    margin-bottom: 2rem;
  }

  .socials {
    display: flex;
    gap: var(--space-lg);
    margin-top: var(--space-lg);
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
