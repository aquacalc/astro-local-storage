<script>
  // Assign the stored value to number bound to input element
  $: number = 4;

  const handleKeydown = (e) => {
    console.log(`Key Down: ${e.key}`);
  };
</script>

<!-- <svelte:window on:load={() => console.log('DOM loaded')} /> -->
<svelte:window on:keydown={handleKeydown} />

<div class="guts">
  <label for="test">
    Enter a value <input id="test" bind:value={number} />
  </label>

  <h4>
    The number is <span>{number}</span>.
  </h4>
</div>

<style>
  .guts {
    display: flex;
    gap: 3rem;
  }
  h4 {
    margin: 0;
  }

  span {
    font-size: 1.2rem;
    font-weight: bold;
    color: rebeccapurple;
  }
</style>
