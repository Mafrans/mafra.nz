<script lang="ts">
  import type { IconSource } from "@steeze-ui/heroicons/types";
  import { Icon } from "@steeze-ui/svelte-icon";

  export let icon: IconSource | undefined = undefined;
  export let leftIcon: IconSource | undefined = icon;
  export let rightIcon: IconSource | undefined = undefined;
  export let href: string | undefined = undefined;
  export let variant: "primary" | "secondary" | undefined = undefined;
</script>

{#if href}
  <a class={`button ${variant}`} {href}>
    {#if leftIcon}
      <Icon src={leftIcon} theme="mini" size="16" />
    {/if}
    <span><slot /></span>
    {#if rightIcon}
      <Icon src={rightIcon} theme="mini" size="16" />
    {/if}
  </a>
{:else}
  <button class={`button ${variant}`}>
    {#if leftIcon}
      <Icon src={leftIcon} theme="mini" size="16" />
    {/if}
    <span><slot /></span>
    {#if rightIcon}
      <Icon src={rightIcon} theme="mini" size="16" />
    {/if}
  </button>
{/if}

<style>
  .button {
    position: relative;
    display: inline-flex;
    gap: var(--size-1);
    align-items: center;
    text-decoration: none;
    padding: var(--size-2) var(--size-3);
    color: currentColor;
    transition: var(--transition);
    font: var(--font-button);
  }
  .button::before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 5%;
    background: currentColor;
    transition: var(--transition);
  }
  .button:hover::before {
    opacity: 12.5%;
  }

  .primary {
    background: var(--color-purple-500);
    color: white;
  }
  .primary:hover {
    background: var(--color-purple-700);
  }

  .secondary {
    background: var(--color-orange-300);
    color: var(--color-black);
  }
  .secondary:hover {
    background: var(--color-orange-500);
  }
</style>
