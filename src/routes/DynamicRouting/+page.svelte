<h1>Dynamic Routing</h1>

<!-- Dynamic Routing of all product is created -->
<script>
    export let productId = 100
</script>
<h1>Product List</h1>
<h1><a href="/DynamicRouting/1">Product 1</a></h1>
<h1><a href="/DynamicRouting/2">Product 2</a></h1>
<h1><a href="/DynamicRouting/3">Product 3</a></h1>
<h1><a href="/DynamicRouting/4">Product 4</a></h1>
<h1><a href={`/DynamicRouting/${productId}`}>Product - {productId}</a></h1>