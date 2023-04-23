<script>
    import Router from 'svelte-spa-router';
    import routes from './routes';

    import Navbar from './Navbar.svelte';
    import Footer from './Footer.svelte';

</script>

<Navbar />
<main class="container-fluid">
    <div class="row" style="padding-top: 80px; padding-bottom: 80px;">
        <div class="col-12 col-lg-10 offset-lg-1">
            <Router {routes} />
        </div>
    </div>
    <Footer />
</main>