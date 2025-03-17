<script lang="ts">
  import { ArrowLeft } from "@steeze-ui/heroicons";
  import Button from "./Button.svelte";
  import { page } from "$app/stores";
  import Divider from "./Divider.svelte";

  export let title: string;
  export let excerpt: string;
  export let image: string;
  export let githubLink: string = "";
  export let backLink: string = "/";
</script>

<header>
  {#if image}
    <img class="top-image" src={image} alt="" srcset="" />
  {/if}

  <h1>{title}</h1>
  <p>{excerpt}</p>

  <div class="buttons">
    {#if $page.url.pathname !== backLink}
      <Button href={backLink} icon={ArrowLeft}>Go back</Button>
    {/if}
    {#if githubLink}
      <Button target="__blank" href={githubLink}>
        <img src={"/socials/github.png"} width={24} height={24} alt="" />
        GitHub
      </Button>
    {/if}
  </div>

  <Divider type="dots" />
</header>

<style>
  header {
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
  }

  .buttons {
    display: flex;
    gap: 24px;
    justify-content: center;
    align-items: center;
    margin-bottom: var(--space-lg);
  }

  .top-image {
    width: 100%;
    margin: var(--space-lg) 0;
  }
</style>
