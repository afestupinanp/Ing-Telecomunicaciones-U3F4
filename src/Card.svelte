<script>
    export let titulo = '';
</script>

<div class="card">
    <h5 class="card-header">{titulo}</h5>
    <div class="card-body">
        <p class="card-text">
            <slot name="contenido"></slot>
            <slot name="referencias"></slot>
        </p>
        <slot name="botones"></slot>
    </div>
</div>
