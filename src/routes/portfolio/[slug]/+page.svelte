<script lang="ts">
  import Divider from "~/components/Divider.svelte";
  import type { PageData } from "./$types";
  import Richtext from "~/components/Richtext.svelte";
  import TopSection from "~/components/TopSection.svelte";

  export let data: PageData;
  const { title, excerpt, image, github } = data.content.attributes;
</script>

<title>{title} - Malte's Portfolio</title>

<main class="container">
  <TopSection githubLink={github} {title} {excerpt} {image} />

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
