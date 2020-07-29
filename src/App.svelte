<script lang="ts">
  import Quokka from './Quokka.svelte'
  import Playground from './Playground.svelte'
  import { items } from './items'

  function getOppositeStatus(status: 'playground' | 'quokka'): 'playground' | 'quokka' {
    return status === 'playground' ? 'quokka' : 'playground'
  }

  let status: 'playground' | 'quokka' =
    (localStorage.getItem('status') as any) || 'playground'
</script>

<style>
  button {
    display: inline-flex;
    margin: 1rem auto;
    border: none;
    background-color: rgba(226, 232, 240, 1);
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    font-size: 1.25rem;
  }
  .is-quokka {
    background-color: var(--bg-dark);
  }
  main {
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100%;
  }

  .toggle-section {
    display: flex;
    flex: none;
    justify-content: center;
  }
</style>

<main>
  <div class="toggle-section" class:is-quokka={status === 'quokka'}>
    <button
      on:click={() => {
        status = getOppositeStatus(status)
        localStorage.setItem('status', status)
      }}>
      show {getOppositeStatus(status)}
    </button>
  </div>
  {#if status === 'quokka'}
    <Quokka {items} />
  {:else}
    <Playground />
  {/if}
</main>
