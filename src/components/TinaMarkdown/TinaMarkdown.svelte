<script lang="ts">
  import type { ComponentType } from "svelte";
  import Node from "./Node.svelte";
  import type { TinaMarkdownContent } from "./TinaMarkdownContent";

  export let content: TinaMarkdownContent | TinaMarkdownContent[];
  export let components: Record<string, ComponentType> = {};
</script>

{#if content}
  {@const nodes = Array.isArray(content) ? content : content.children}
  {#each nodes ?? [] as child}
    <Node {components} {child} />
  {/each}
{/if}
