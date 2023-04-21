<script>
    export let url;
    export let alt;
    export let width = '';
    export let height = '';
    export let subtitulo;
    export let click = null;
    export let shadow = true;
</script>

<div class="text-center py-3">
    <img on:click={click} {width} {height} src={url} {alt} class="img-fluid {shadow ? 'shadow-sm' : ''} {click ? 'clickeable' : ''}" />
    {#if subtitulo}
        <small>{subtitulo}</small>
    {/if}
</div>