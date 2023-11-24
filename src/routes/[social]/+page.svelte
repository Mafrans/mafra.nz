<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  const { title, user, url, logo } = data.content.attributes;
</script>

<div class="user">
  <img src={logo} alt="" />
  <h1>{user}</h1>
</div>

<style>
  .user {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
