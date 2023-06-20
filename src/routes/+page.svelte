<script lang="ts">
  import TinaMarkdown from "~/components/TinaMarkdown/TinaMarkdown.svelte";
  import type { PageData } from "./$types";
  import Button from "~/components/Button.svelte";
  import { getBasename } from "~/util/util";

  export let data: PageData;
  const { image, content, title, socials } = data.content;
</script>

<main class="container richtext">
  <img class="top-image" src={image} alt="" srcset="" />
  <h1>{title}</h1>
  <TinaMarkdown {content} />

  <div class="socials">
    {#each socials ?? [] as social}
      {#if social != null}
        <Button target="_blank" href={`/${getBasename(social.ref.id)}`}>
          <img
            src={social.ref.logo}
            width="24"
            alt={`${social.ref.title} logo`}
          />
          {social.ref.title}
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
    gap: var(--size-6);
  }
</style>
