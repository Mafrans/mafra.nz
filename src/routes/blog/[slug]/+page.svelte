<script lang="ts">
  import Divider from "~/components/Divider.svelte";
  import type { PageData } from "./$types";
  import Richtext from "~/components/Richtext.svelte";
  import TopSection from "~/components/TopSection.svelte";

  export let data: PageData;
  const { title, excerpt, image } = data.content.attributes;
</script>

<title>{title} - Malte's Blog</title>

<main class="container">
  <TopSection {title} {excerpt} {image} backLink="/blog" />

  <div class="richtext">
    <Richtext>
      {@html data.content.html}
    </Richtext>
  </div>
</main>

<style>
  main {
    height: 100%;
  }
</style>
