<script>
  let users = [];
  let newUser = '';

  const handleUserChange = (event) => {
    newUser = event.target.value;
  };

  const addUser = () => {
    if (newUser.trim() !== '') {
      if (users.length < 6) {
        users = [...users, newUser];
        newUser = '';
      }
    }
  };

  const removeUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    users = updatedUsers;
  };
</script>

<style>
  h1 {
    font-size: 1rem;
  }

  #container {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 5rem;
    text-align: center;
    gap: 1rem;
  }

  li {
    list-style-type:none;
    display: flex;
    justify-content:space-evenly;
  }

</style>

<div id="container">
  <h1>Lista interactiva</h1>
  <div>
    <input
      type="text"
      placeholder="Agrega un elemento (max 6)"
      bind:value={newUser}
      on:input={() => {}}
    />
    <button on:click={addUser}>Agregar</button>
  </div>
  <ul>
    {#each users as user, index}
      <li key={index}>
        {user} <button on:click={() => removeUser(index)}>Quitar</button>
      </li>
    {/each}
  </ul>
</div>
