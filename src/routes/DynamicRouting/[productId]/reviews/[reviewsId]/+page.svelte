<script>
	import { page } from '$app/stores';
	const {productId,reviewsId} = $page.params;
</script>

<h1>Dynamic Routing of product And its review as nesting then its dynamic nested review</h1>
<h3>
	Review {reviewsId} for product {productId}
</h3>
