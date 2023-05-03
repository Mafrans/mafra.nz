<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div class="container">
  {#if data.content}
    <h1>{data.content.title}</h1>
  {/if}
  <p>Still working on this one</p>
</div>

<style>
  h1 {
    font: var(--font-headline-1);
  }

  p:first-of-type {
    font: var(--font-body-lg);
  }
</style>
