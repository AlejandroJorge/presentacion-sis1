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
    font-size: 1.5rem;
  }

  button {
    margin: 5px;
    padding: 10px 20px;
    font-size: 16px; 
    cursor: pointer;
  }

  @media screen and (min-width: 1600px) {
    h1 {
      font-size: 4rem;
    }

    button {
      font-size: 2rem;
    }
  }
</style>

<div class="counter">
  <h1>Contador</h1>
  <p>Cuenta: {count}</p>
  <button on:click={increment}>Aumentar</button>
  <button on:click={decrement}>Decrementar</button>
</div>
