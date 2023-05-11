<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  const { profile, title } = data.content;
</script>

<aside>
  {#if profile}
    <section class="profile">
      <img src={profile.image} alt={`${profile.name}'s avatar'`} />
      <h2>{profile.name}</h2>
      <p>{profile.alias}</p>
      <p>{profile.location}</p>
    </section>
  {/if}
</aside>

<main>
  <section class="title">
    <h1>{title}</h1>
  </section>
</main>

<style>
  section {
    padding: var(--size-4);
    background: var(--color-grey-100);
    border: 1px solid var(--color-grey-400);
  }

  .title {
    font: var(--font-headline-1);
    text-align: center;
  }
</style>
