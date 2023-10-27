<!-- ! Routes with dynamic parameter optional -->
<!-- 
    Optional Parameter 
        It can be created [[folder Name]] but if it is done 
		directly in route folder then it will create error 
		The "/" and "/[[lang]]" routes conflict with each other
		To get rid of this another folder had to be created 
		in route then put it [[lang]] in that folder 
		In URL put
			http://localhost:5173/optionalRouting/es
			and then can be accessed 
-->
<script>
	import { page } from '$app/stores';
	const greet = {
		en: 'Hello',
		es: 'Hola',
		fr: 'Bonnjour!'
	};

	const { lang ="en" } = $page.params; // making lang = "en" means it will be default
	const greeting = greet[lang];
</script>
<h3>{greeting}</h3>