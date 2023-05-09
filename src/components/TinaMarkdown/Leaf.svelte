<script lang="ts">
  import type { ComponentType } from "svelte";

  export let components: Record<string, ComponentType>;
  export let text: string = "";

  export let bold: boolean = false;
  export let italic: boolean = false;
  export let underline: boolean = false;
  export let strikethrough: boolean = false;
  export let code: boolean = false;
</script>

{#if bold}
  {#if components.bold}
    <svelte:component this={components.bold}>
      <svelte:self {italic} {underline} {strikethrough} {code} {components} />
    </svelte:component>
  {:else}
    <strong>
      <svelte:self {italic} {underline} {strikethrough} {code} {components} />
    </strong>
  {/if}
{:else if italic}
  {#if components.italic}
    <svelte:component this={components.italic}>
      <svelte:self {bold} {underline} {strikethrough} {code} {components} />
    </svelte:component>
  {:else}
    <em>
      <svelte:self {bold} {underline} {strikethrough} {code} {components} />
    </em>
  {/if}
{:else if underline}
  {#if components.underline}
    <svelte:component this={components.underline}>
      <svelte:self {italic} {bold} {strikethrough} {code} {components} />
    </svelte:component>
  {:else}
    <u>
      <svelte:self {italic} {bold} {strikethrough} {code} {components} />
    </u>
  {/if}
{:else if strikethrough}
  {#if components.strikethrough}
    <svelte:component this={components.strikethrough}>
      <svelte:self {italic} {underline} {bold} {code} {components} />
    </svelte:component>
  {:else}
    <s>
      <svelte:self {italic} {underline} {bold} {code} {components} />
    </s>
  {/if}
{:else if code}
  {#if components.code}
    <svelte:component this={components.code}>
      <svelte:self {italic} {underline} {strikethrough} {bold} {components} />
    </svelte:component>
  {:else}
    <code>
      <svelte:self {italic} {underline} {strikethrough} {bold} {components} />
    </code>
  {/if}
{:else if text}
  {#if components.text}
    <svelte:component this={components.text}>
      {text}
    </svelte:component>
  {:else}
    {text}
  {/if}
{/if}
