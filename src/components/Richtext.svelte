<div class="richtext">
  <slot />
</div>

<style>
  .richtext :global(.gallery) {
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

  .richtext :global(.cta) {
    display: inline-block;
    justify-self: center;
    padding: var(--space-md);
    margin: var(--space-lg) auto;
    border-radius: var(--rounded);
    background: black;
    color: white;
    text-decoration: none;
    font-size: 1rem;
  }

  .richtext :global(:is(h2, h3, h4)) {
    margin-bottom: var(--space-md);
    margin-top: var(--space-lg);
  }

  .richtext :global(:is(ul, ol)) {
    margin: var(--space-md) 0;
    list-style-position: inside;
  }

  .richtext :global(blockquote) {
    margin: var(--space-lg) 0;
    margin-left: var(--space-lg);
    & p:first-of-type {
      font: var(--font-body);
      font-style: italic;
      margin-bottom: var(--space-md);
    }
  }

  .richtext :global(:is(video, img)) {
    max-width: 100%;
  }
</style>
