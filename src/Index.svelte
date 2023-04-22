<script>
    import Router from 'svelte-spa-router';
    import routes from './routes';

    import Navbar from './Navbar.svelte';
    import Footer from './Footer.svelte';

</script>

<Navbar />
<main class="container-fluid">
    <div style="padding-top: 80px; padding-bottom: 80px;">
        <Router {routes} />
    </div>
    <Footer />
</main>