<!-- Making Navigation Using Functionality Like real World -->
<!-- After click on button it will got to dynamic routing Home Page and in console
    there will be order placed o/p all these functionality will be done with help of
    ! go to fn of svelte 
    also 
    ! replaceState:true 
    will redirect to last page that is visited 
        goto('/DynamicRouting',{replaceState:true})

    It also hae 2 extra fn 
    ! beforeNavigation and afterNavigation  
        these 2 will help to keep record of from where to where it navigated then 
        again from where to where in 2nd time.
        for this replaceState had to be removed 
-->
<script>
	import { goto, beforeNavigate, afterNavigate } from '$app/navigation';
	function handleClick() {
		console.log('Order Placed');
		goto('/DynamicRouting');
		alert('Order Placed Man redirecting to Dynamic Routing page');
	}
	beforeNavigate((navigation) => {
		console.log({ before: navigation });
	});
	afterNavigate((navigation) => {
		console.log({ after: navigation });
	});
</script>

<h1>Home Page</h1>
<a href="/about">About</a>
<a href="/blog">Blog Page</a>
<button on:click={handleClick}>Place Order</button>
