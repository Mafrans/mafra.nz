<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  const {
    html,
    attributes: { title, icon },
  } = data.content;
</script>

<div class="user container">
  <title>{title}</title>
  <img src={icon} alt="" />

  {@html html}
</div>

<style>
  .user {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
