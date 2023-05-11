<script lang="ts">
  export let href: string | undefined = undefined;
  export let variant: "primary" | "secondary" | undefined = undefined;
</script>

{#if href}
  <a class={`button ${variant}`} {href}>
    <slot />
  </a>
{:else}
  <button class={`button ${variant}`} class:variant>
    <slot />
  </button>
{/if}

<style>
  .button {
    position: relative;
    text-decoration: none;
    padding: var(--size-2) var(--size-3);
    color: currentColor;
    border-radius: var(--radius-xs);
    transition: var(--transition);
  }
  .button::before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 5%;
    background: currentColor;
    border-radius: var(--radius-xs);
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
