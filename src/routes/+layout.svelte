<!--
    By default slot is layout for this application and all html pages will replaces 
        slot tag 
    This layout will applied to all pages 
    we an do it even in nested dynamic layout for this +layout.svelte had to be created 
    in that dynamic folder 
-->
<script>
    import Header from './header.svelte'
    import "../app.css";
    import Footer from './footer.svelte'
</script>
  
<Header/>
<slot/> 
<Footer/>