<script lang="ts">
  export let type: "dots" | "wave" = "dots";
  export let title: string | undefined = undefined;
</script>

<div class="divider" class:has-title={title != null}>
  <img src="/divider-{type}.png" alt="" />
  {#if title}
    <h2>{title}</h2>
    <img src="/divider-{type}.png" alt="" />
  {/if}
</div>

<style>
  .divider {
    margin: var(--space-xl) 0;
  }

  .divider.has-title {
    display: flex;
    align-items: center;
    gap: var(--space-lg);
    margin-top: var(--space-2xl);
    margin-bottom: var(--space-xl);
  }

  .divider h2 {
    margin-bottom: 0;
  }
</style>
