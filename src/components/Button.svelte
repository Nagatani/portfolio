<script lang="ts">
  export let label: string = 'Click me';
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<button on:click={handleClick}>
  {label} ({count})
</button>
