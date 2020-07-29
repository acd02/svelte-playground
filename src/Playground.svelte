<script lang="ts">
  let count = 0
</script>

<style>
  .root {
    margin: 24px auto 0;
    border: 1px solid #d5d5d5;
    cursor: pointer;
    padding: 8px 12px;
    width: 100px;
    text-align: center;
  }
</style>

<div>
  <div class="root" on:click={() => (count = count += 1)}>{count}</div>
</div>
