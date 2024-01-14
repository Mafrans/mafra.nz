<script lang="ts">
  import type { Ref } from "~/content";
  import Button from "~/components/Button.svelte";
  import type { Link } from "~/types/Link";

  export let links: Ref<Link>[] = [];
</script>

<div class="links">
  {#each links as link}
    {#if link != null}
      {@const { title, icon, url } = link.content.attributes}

      <Button
        target={url?.startsWith("http") ? "_blank" : undefined}
        href={link.content.attributes.url ?? `/${link.file}`}
      >
        <img src={icon} width="24" alt={`${title} icon`} />
        {title}
      </Button>
    {/if}
  {/each}
</div>

<style>
  .links {
    display: flex;
    gap: var(--space-lg);
    margin-top: var(--space-lg);
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
