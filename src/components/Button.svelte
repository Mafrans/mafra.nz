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
    padding: 11px 16px;
    color: currentColor;
    border-radius: var(--radius-xs);
    transition: var(--transition);
  }
  .button::before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0;
    background: currentColor;
    border-radius: var(--radius-xs);
    transition: var(--transition);
  }
  .button:hover::before {
    opacity: 10%;
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
