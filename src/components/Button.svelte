<script>
  let count = 0;

  function increment() {
    count += 1;
  }

  function decrement() {
    count -= 1;
  }
</script>

<style>
  .counter {
    text-align: center;
    margin: auto;
    width: 200px;
    padding: 20px;
    border-radius: 5px;
    flex: 1;
  }

  h1 {
    font-size: 1.5rem; /* Default font size for h1 */
  }

  p {
    font-size: 1rem; /* Default font size for p */
  }

  button {
    margin: 5px;
    padding: 10px 20px;
    font-size: 16px; /* Default font size for buttons */
    cursor: pointer;
  }

  @media screen and (min-width: 1600px) {
    h1 {
      font-size: 4rem; /* Increase font size for h1 on larger screens */
    }

    p {
      font-size: 2rem; /* Increase font size for p on larger screens */
    }

    button {
      font-size: 2rem; /* Increase font size for buttons on larger screens */
    }
  }
</style>

<div class="counter">
  <h1>Svelte Counter</h1>
  <p>Count: {count}</p>
  <button on:click={increment}>Increment</button>
  <button on:click={decrement}>Decrement</button>
</div>
