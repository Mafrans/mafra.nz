<script lang="ts">
  import type { ComponentType } from "svelte";
  import TinaMarkdown from "./TinaMarkdown.svelte";
  import type { TinaMarkdownContent } from "./TinaMarkdownContent";
  import Leaf from "./Leaf.svelte";

  export let child: TinaMarkdownContent;
  export let components: Record<string, ComponentType> = {};

  let { children, type, ...props } = child;

  // Failsafe in case props are undefined
  if (props == null) {
    props = {};
  }
</script>

{#if ["h1", "h2", "h3", "h4", "h5", "h6", "p", "blockquote", "ol", "ul", "li"].includes(type)}
  <svelte:element this={type} {...props}>
    <TinaMarkdown {components} content={children} />
  </svelte:element>
{/if}

{#if components[type]}
  <svelte:component this={components[type]} {...props}>
    <TinaMarkdown {components} content={children} />
  </svelte:component>
{:else if type === "lic"}
  <TinaMarkdown {components} content={children} />
{:else if type === "img"}
  <img src={props.url} alt={props.caption} />
{:else if type === "a"}
  <a href={props.url}>
    <TinaMarkdown {components} content={children} />
  </a>
{:else if type === "code_block"}
  <pre>
      <TinaMarkdown {components} content={children} />
    </pre>
{:else if type === "hr"}
  <hr />
{:else if type === "break"}
  <br />
{:else}
  <Leaf {components} {...props} />
{/if}
