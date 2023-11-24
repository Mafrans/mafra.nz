<script lang="ts">
  import type { IconSource } from "@steeze-ui/heroicons/types";
  import { Icon } from "@steeze-ui/svelte-icon";
  import { onMount } from "svelte";

  export let icon: IconSource | undefined = undefined;
  export let leftIcon: IconSource | undefined = icon;
  export let rightIcon: IconSource | undefined = undefined;
  export let href: string | undefined = undefined;
  export let target: string | undefined = undefined;
  export let variant: "primary" | "secondary" | undefined = undefined;

  const isAlt = Math.random() < 0.5;
  let size = "md";
  let button: HTMLElement;
  onMount(() => {
    function updateSize(width: number, height: number) {
      const aspect = width / height;

      size = "sm";
      if (aspect > 1.25) {
        size = "md";
      }
      if (aspect > 1.5) {
        size = "lg";
      }
      if (aspect > 2) {
        size = "xl";
      }
    }

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        updateSize(width, height);
      }
    });
    observer.observe(button);
    updateSize(button.offsetWidth, button.offsetHeight);
  });
</script>

{#if href}
  <a
    bind:this={button}
    class={`button ${variant} ${size} ${isAlt ? "alt" : ""}`}
    {href}
    {target}
  >
    {#if leftIcon}
      <Icon src={leftIcon} theme="mini" size="16" />
    {/if}
    <span><slot /></span>
    {#if rightIcon}
      <Icon src={rightIcon} theme="mini" size="16" />
    {/if}
  </a>
{:else}
  <button
    bind:this={button}
    class={`button ${variant} ${size} ${isAlt ? "alt" : ""}`}
  >
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
    display: flex;
    gap: var(--space-sm);
    align-items: center;
    text-decoration: none;
    padding: var(--space-md) var(--space-lg);
    color: currentColor;
    transition: var(--transition);
    font: var(--font-button);
    background-size: 100% 100%;
    text-transform: uppercase;
  }

  .button:hover::before {
    opacity: 12.5%;
  }

  .sm,
  .sm.alt:hover {
    background-image: url("/buttons/button-sm-1.png");
  }
  .sm.alt,
  .sm:hover {
    background-image: url("/buttons/button-sm-2.png");
  }

  .md,
  .md.alt:hover {
    background-image: url("/buttons/button-md-1.png");
  }
  .md.alt,
  .md:hover {
    background-image: url("/buttons/button-md-2.png");
  }

  .lg,
  .lg.alt:hover {
    background-image: url("/buttons/button-lg-1.png");
  }
  .lg.alt,
  .lg:hover {
    background-image: url("/buttons/button-lg-2.png");
  }

  .xl,
  .xl.alt:hover {
    background-image: url("/buttons/button-xl-1.png");
  }

  .xl.alt,
  .xl:hover {
    background-image: url("/buttons/button-xl-2.png");
  }
</style>
