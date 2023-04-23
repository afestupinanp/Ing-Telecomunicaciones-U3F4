<script>
    import Card from "../Card.svelte";
    import Referencias from "../Referencias.svelte";
    import Imagen from "../Imagen.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        document.querySelector('title').innerHTML = 'Tema 2: Teleasistencia, teletrabajo, telemedicina, teleeducación y comercio electrónico - Teletrabajo';
    });

    const referencias = [
        {
            'autor': 'Ministerio de Tecnologías de la Información y las Comunicaciones',
            'titulo': 'Qué es el Teletrabajo y cuáles son sus modalidades',
            'url': 'https://www.teletrabajo.gov.co/622/w3-article-75151.html',
            'ubicacion': 'Colombia',
            'empresa': 'Ministerio de Tecnologías de la Información y las Comunicaciones'
        },
    ];
</script>

<div class="row">
    <div class="col-12">
        <Card titulo="Teletrabajo">
            <div class="row align-self-center" slot="contenido">
                <div class="col-12">
                    <h5>¿Qué es el teletrabajo?</h5>
                </div>
                <div class="col-12 col-lg-4 text-center">
                    <Imagen alt="Imagen descriptiva del teletrabajo." subtitulo="Fuente: Blog Yunbit. (30 de junio del 2020)" shadow={true} url="https://www.yunbitsoftware.com/blog/wp-content/uploads/2020/06/3641599-scaled-e1593532828313.jpg" width="400" height="400" />
                </div>
                <div class="col-12 col-lg-8 text-justify">
                    <p>El teletrabajo es una forma de organización laboral que consiste en la realización de las actividades laborales mediante el uso de las Tecnologías de Información y Comunicación para realizar el contacto entre el trabajador y la empresa. Gracias al uso de tecnologías como la internet, esta modalidad permite al trabajador desempeñar sus actividades desde cualquier sitio, siempre y cuando cuente con una conexión activa.</p>
                    <p>En Colombia, se clasifica al Teletrabajo tres posibles modalidades:</p>
                    <ul>
                        <li>Teletrabajo Autónomo: Se refiere a los trabajadores independientes que realizan sus labores desde cualquier sitio deseado.</li>
                        <li>Teltrabajo Suplementario: Consiste en la modalidad híbrida de teletrabajo, en el que el trabajador asistente principalmente de manera física al espacio de trabajo, pero realiza sus labores desde otro sitio al menos dos días a la semana.</li>
                        <li>Teletrabajo Móvil: Son los trabajadores totalmente ausentes del espacio físico de la oficina. Usan principalmente dispositivos móviles para realizar sus labores, como lo pueden ser portátiles y celulares.</li>
                    </ul>
                </div>
                <div class="col-12 text-justify">
                    <p>Durante la pandemia del COVID-19, esta modalidad se usó de manera significativa para dar continuidad a la mayoría de los procesos. Gracias a los servicios de telecomunicación, muchas empresas pudieron continuar brindando sus productos a los clientes. A partir de la pandemia, esta modalidad de trabajo se hizo bastante popular en muchos países del mundo.</p>
                </div>
                <div class="col-12">
                    <h5>¿Qué tecnologías son usadas en el teletrabajo?</h5>
                </div>
                <div class="col-12 text-justify">
                    <p>Existen muchas tecnologías y aplicaciones que son usadas para permitir el teletrabajo. Una de las herramientas más fundamentales son los servicios de redes privadas (VPNs - Virtual Private Networks). Esta tecnología permite acceder a la red privada de una empresa, lo cual posibilita el trabajo desde cualquier sitio del mundo, siempre y cuando se posea una conexión de internet.</p>
                    <p>Adicionalmente, las aplicaciones de comunicación VoIP son usadas para que los colaboradores de las empresas puedan comunicarse con otros miembros de la organización. Para esto, se usan aplicaciones como Microsoft Teams, Slack, Skype, Discord, TeamSpeak, entre muchas otras.</p>
                </div>
            </div>
            <div slot="referencias">
                <Referencias {referencias} />
            </div>
        </Card>
    </div>
</div>