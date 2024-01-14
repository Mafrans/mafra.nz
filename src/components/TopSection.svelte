<script lang="ts">
  import { ArrowLeft } from "@steeze-ui/heroicons";
  import Button from "./Button.svelte";
  import { page } from "$app/stores";

  export let title: string;
  export let excerpt: string;
  export let image: string;
  export let backLink: string = "/";
</script>

<header>
  {#if image}
    <img class="top-image" src={image} alt="" srcset="" />
  {/if}

  <h1>{title}</h1>
  <p>{excerpt}</p>

  {#if $page.url.pathname !== backLink}
    <div class="backlink">
      <Button href={backLink} icon={ArrowLeft}>Go back</Button>
    </div>
  {/if}
</header>

<style>
  header {
    max-width: 500px;
    margin: 0 auto;
    text-align: left;
  }

  .backlink {
    margin-bottom: var(--space-lg);
    text-align: center;
  }

  img {
    width: 100%;
    margin: var(--space-lg) 0;
  }
</style>
