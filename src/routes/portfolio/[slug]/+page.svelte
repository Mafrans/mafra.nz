<script lang="ts">
  import Divider from "~/components/Divider.svelte";
  import type { PageData } from "./$types";
  import Richtext from "~/components/Richtext.svelte";
  import TopSection from "~/components/TopSection.svelte";

  export let data: PageData;
  const { title, excerpt, image } = data.content.attributes;
</script>

<title>{title} - Malte's Portfolio</title>

<main class="container richtext">
  <TopSection {title} {excerpt} {image} />

  <Divider type="dots" />

  <Richtext>
    {@html data.content.html}
  </Richtext>
</main>

<style>
  main {
    text-align: center;
    height: 100%;
  }
</style>
