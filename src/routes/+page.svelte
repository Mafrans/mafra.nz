<script lang="ts">
  import Crt from "../components/Crt.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div>
  <Crt />
</div>

<style>
  h1 {
    font: var(--font-headline-1);
  }

  p:first-of-type {
    font: var(--font-body-lg);
  }
</style>
