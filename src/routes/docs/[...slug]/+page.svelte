<h2>Docs Page that can be accessed using any URL </h2>

<script>
    import { page } from "$app/stores";
    console.log($page.params.slug)
    // for accessing routing part in code in as routing according to slug length
    const slugArr = $page.params.slug.split('/')
</script>

<!-- printing page according to slug no  -->

{#if slugArr.length===1}
    <h1>Viewing docs for feature {slugArr[0]}</h1>
{:else if slugArr.length === 2}
    <h1>Viewing docs for feature {slugArr[0]} and concept {slugArr[1]}</h1>
{/if}