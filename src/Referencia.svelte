<script>
    export let url = '';
    export let autor = 'n.a';
    export let fecha = 'n.f';
    export let titulo = '';
    export let ubicacion = '';
    export let empresa = '';
</script>

<li>
    {autor} ({fecha}). <i>{titulo}</i>. {empresa}{ubicacion ? `: ${ubicacion}` : ''}. Recuperado de: <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
</li>