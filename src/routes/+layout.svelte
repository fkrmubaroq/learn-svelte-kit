<script>
    import "../app.css";
    const { children } = $props();
</script>

<div class="max-w-[500px] mx-auto flex flex-col gap-4 mt-10 ">
    {@render children()}
</div>