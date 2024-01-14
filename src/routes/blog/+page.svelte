<script lang="ts">
  import Divider from "~/components/Divider.svelte";
  import Links from "~/components/Links.svelte";
  import type { PageData } from "./$types";
  import PostList from "~/components/PostList.svelte";

  export let data: PageData;
  const {
    html,
    attributes: { title, image, links },
  } = data.frontpage.content;
  const entries = data.entries;
</script>

<title>Malte's Blog</title>

<main class="container">
  <img class="top-image" src={image} alt="" srcset="" />
  <h1>{title}</h1>
  {@html html}

  <Links {links} />

  <Divider type="wave" title="Posts" />

  <PostList items={entries} />
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
</style>
