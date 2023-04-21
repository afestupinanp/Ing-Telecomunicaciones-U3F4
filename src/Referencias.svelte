<script>
    import Referencia from "./Referencia.svelte";
    export let referencias = [];
</script>

<div class="row">
    <div class="col-12">
        <h6>Referencias</h6>
        {#if referencias.length}
            <ul>
                {#each referencias as referencia}
                    <Referencia autor={referencia.autor} fecha={referencia.fecha} titulo={referencia.titulo} ubicacion={referencia.ubicacion} url={referencia.url} empresa={referencia.empresa} />
                {/each}
            </ul>
        {:else}
            <p>No hay referencias disponibles.</p>
        {/if}
    </div>
</div>