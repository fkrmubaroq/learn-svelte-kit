<script lang="ts">
  import type { Snippet } from "svelte";
  import type { LayoutData } from "./$types";

  const { children, data }: { children: Snippet; data: LayoutData } = $props();
  console.log("data", data)
</script>

{#snippet menuItem(menuName: string, href: string)}
  <a {href} class="text-white hover:bg-gray-800 px-3 py-2">{menuName}</a>
{/snippet}

<div class="flex bg-gray-600">
  {#each data.headerMenu as item}
    {@render menuItem(item.menuName, item.path)}
  {/each}
</div>

{@render children()}
