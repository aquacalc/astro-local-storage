<script>
  // Import the store
    import { myStoredValue } from "../stores/MySvelteStore";
   
  // clg some info when the entered value changes
  // $: console.log(`myValue = `, $myStoredValue.myValue);

  // Assign the stored value to number bound to input element
  $: number = $myStoredValue.myValue;

  // on:input handler
  const handleChange = (data) => {
    // Set current value to update store
    $myStoredValue.myValue = data.target.value;
  };
  
  const handleKeydown = (e) => {console.log(`Key Down: ${e.key}`)}
</script>

<svelte:window on:loadeddata={() => console.log('DOM loaded')} />
  <!-- <svelte:window on:keydown={handleKeydown}/> -->

<label for="test">
  Enter a value...
  <input id="test" on:input={handleChange} bind:value={number} />
</label>

<h2>
  <span>{number}</span> has been set to local storage.
</h2>

<style>
  span {
    font-size: 2rem;
    font-weight: bold;
    color: rebeccapurple;
  }
</style>
