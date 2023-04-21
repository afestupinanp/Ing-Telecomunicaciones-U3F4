<script>
    import Imagen from "./Imagen.svelte";

    const year = new Date().getFullYear();
</script>

<footer class="footer">
    <div class="row">
        <div class="col-12 text-center">
            <Imagen shadow={false} width="100" height="100" click={() => window.open("https://www.unad.edu.co", '_blank')} url="https://upload.wikimedia.org/wikipedia/commons/9/90/Logo_de_la_UNAD.svg" />
            Andrés Felipe Estupiñán Peláez<br/>
            Universidad Nacional Abierta y a Distancia, {year}
        </div>
    </div>
</footer>