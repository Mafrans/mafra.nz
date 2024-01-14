<div class="richtext">
  <slot />
</div>

<style>
  :global(.gallery) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: var(--space-xl) var(--minus-space-lg);
    margin-bottom: var(--space-2xl);

    & > * {
      width: 50%;
      padding: var(--space-lg);

      &.wide {
        width: 100%;
      }
    }
  }

  :global(.cta) {
    display: inline-block;
    padding: var(--space-md);
    margin: var(--space-lg) auto;
    border-radius: var(--rounded);
    background: black;
    color: white;
    text-decoration: none;
    font-size: 1rem;
  }
</style>
