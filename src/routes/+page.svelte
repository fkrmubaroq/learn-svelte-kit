<script>
  const listTutorial = [
    {
      name: "Form & Validation",
      path: "/form-validation",
    },
  ];
</script>

<h1>Tutorial SvelteKit</h1>
{#each listTutorial as item}
  <a href={item.path}>{item.name}</a>
{/each}

<style>
  h1 {
    @apply text-2xl font-bold text-center;
  }
  a {
    @apply bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700;
  }
</style>
