<script>
    export let url;
    export let alt;
    export let width = '';
    export let height = '';
    export let subtitulo;
    export let click = null;
    export let shadow = true;
</script>

<div class="row">
    <div class="col-12">
        <img on:click={click} {width} {height} src={url} {alt} class="img-fluid {shadow ? 'shadow-sm' : ''} {click ? 'clickeable' : ''}" />
    </div>
    {#if subtitulo}
        <div class="col-12 text-center py-3">
            <small>{subtitulo}</small>
        </div>
    {/if}
</div>