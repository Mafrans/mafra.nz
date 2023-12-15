<script lang="ts">
  import Divider from "~/components/Divider.svelte";
  import type { PageData } from "./$types";
  import Button from "~/components/Button.svelte";
  import { ArrowLeft, Home } from "@steeze-ui/heroicons";

  export let data: PageData;
  const { title, excerpt, image } = data.content.attributes;
</script>

<main class="container richtext">
  <header>
    <Button href="/" icon={Home}>Return home</Button>
    <img class="top-image" src={image} alt="" srcset="" />
  </header>
  <h1>{title}</h1>
  <p>{excerpt}</p>

  <Divider type="dots" />

  <div class="content">
    {@html data.content.html}
  </div>
</main>
```

<style>
  main {
    text-align: center;
    height: 100%;
  }

  header {
    width: 500px;
    margin: 0 auto;
    text-align: left;
  }

  .top-image {
    width: 100%;
    border-radius: var(--rounded);
    margin: 2rem 0;
  }

  .content :global(.gallery) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-lg);
    margin: var(--space-xl) auto;
    margin-bottom: var(--space-2xl);
  }

  .content :global(.gallery > .wide) {
    grid-column: span 2;
  }

  .content :global(.cta) {
    display: inline-block;
    padding: var(--space-md);
    margin: var(--space-lg) auto;
    border-radius: var(--rounded);
    background: black;
    color: white;
    text-decoration: none;
    font-size: 1rem;
  }
</style>
