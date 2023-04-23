<script>
    import { onMount } from "svelte";
    import Card from "../Card.svelte";
    onMount(() => {
        document.querySelector('title').innerHTML = 'Tema 2: Teleasistencia, teletrabajo, telemedicina, teleeducación y comercio electrónico - Inicio';
    });
</script>

<div class="row">
    <div class="col-12">
        <Card titulo="Un saludo de bienvenida">
            <div slot="contenido">
                <h5>Cordial saludo compañeros y tutor</h5>
                <p>En esta página se comparten las temáticas relacionadas a la Unidad 3 - Fase 4: Implementar las soluciones de telecomunicaciones planteadas. Un saludo a todos.</p>
                <h5>Datos</h5>
                <p>
                    Andrés Felipe Estupiñán Peláez<br/>
                    Ingeniería de sistemas<br/>
                    Universidad Nacional Abierta y a Distancia<br/>
                    Grupo 22, Ingeniería de las Telecomunicaciones<br/>
                    Tutor: Harold Emilio Cabrera Meza
                </p>
            </div>
        </Card>
    </div>
</div>