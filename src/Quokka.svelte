<script lang="ts">
  type Item = {
    label?: string
    value: Record<string | number, unknown> | string | boolean | number | unknown[]
  }

  export let items: Item[] = []
  $: formattedItems = items.map(({ value, label }, i) => {
    return {
      label: label || i,
      value: typeof value === 'function' ? String(value) : JSON.stringify(value, null, 2),
    }
  })
</script>

<style>
  .root {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: min-content;
    grid-row-gap: 24px;
    background-color: var(--bg-dark);
    padding: 1.4rem;
  }

  .label {
    color: var(--color-label);
    font-weight: 600;
  }

  .value {
    white-space: pre-wrap;
    color: var(--color-value);
  }
</style>

<div class="root">
  {#each formattedItems as { value = "the value is undefined", label }, i (i)}
  <div>
    <span class="label">{label || i}:</span>
    {' '}
    <span class="value">{value}</span>
  </div>
  {/each}
</div>
