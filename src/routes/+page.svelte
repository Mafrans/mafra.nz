<script lang="ts">
  import PostList from "~/components/PostList.svelte";
  import type { PageData } from "./$types";
  import Links from "~/components/Links.svelte";
  import Divider from "~/components/Divider.svelte";

  export let data: PageData;
  const {
    html,
    attributes: { image, title, links },
  } = data.content;
</script>

<title>Malte's Homepage</title>

<main class="container richtext">
  <img class="top-image" src={image} alt="" srcset="" />
  <h1>{title}</h1>
  {@html html}

  <Links {links} />

  {#if data.portfolio.length > 0}
    <Divider type="wave" title="Portfolio" />
    <PostList prefix="/portfolio" items={data.portfolio} />
  {/if}

  {#if data.blog.length > 0}
    <Divider type="wave" title="Blog posts" />
    <PostList prefix="/blog" items={data.blog} />
  {/if}
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
