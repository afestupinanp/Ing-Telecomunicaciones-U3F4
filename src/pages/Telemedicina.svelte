<script>
    import Card from "../Card.svelte";
    import Referencias from "../Referencias.svelte";
    import Imagen from "../Imagen.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        document.querySelector('title').innerHTML = 'Tema 2: Teleasistencia, teletrabajo, telemedicina, teleeducación y comercio electrónico - Telemedicina';
    });

    const referencias = [
        {
            'autor': 'Equipo Editorial El Hospital',
            'titulo': '¿Qué es la Telemedicina?',
            'url': 'https://www.elhospital.com/es/noticias/que-es-la-telemedicina',
            'ubicacion': 'Colombia',
            'fecha': '23 de febrero del 2023',
            'empresa': 'El Hospital'
        },
        {
            'autor': 'Ministerio de Salud',
            'titulo': 'Dos años de posicionamiento de la telemedicina en Colombia',
            'url': 'https://www.minsalud.gov.co/Paginas/Dos-anos-de-posicionamiento-de-la-telemedicina-en-Colombia.aspx',
            'ubicacion': 'Colombia',
            'fecha': '22 de marzo del 2022',
            'empresa': 'Ministerio de Salud'
        },
        {
            'autor': 'Prados, J.',
            'titulo': 'Telemedicina, una herramienta también para el médico de familia',
            'url': 'https://www.elsevier.es/es-revista-atencion-primaria-27-articulo-telemedicina-una-herramienta-tambien-el-S0212656712003484',
            'ubicacion': 'España',
            'fecha': '2013',
            'empresa': 'Sociedad Española de Medicina de Familia y Comunitaria'
        },
    ];
</script>

<div class="row">
    <div class="col-12">
        <Card titulo="Telemedicina">
            <div class="row align-self-center" slot="contenido">
                <div class="col-12">
                    <h5>¿Qué es la telemedicina?</h5>
                </div>
                <div class="col-12 text-justify">
                    <p>La telemedicina es cualquier acto médico realizado mediante las Tecnologías de la Información y la Comunicación. Los servicios de telecomunicación permiten llegar a sitios lejanos, como lo pueden ser zonas rurales o aisladas, lo que permite brindar una atención sanitaria general a los usuarios de comunidades alejadas de sitios de fácil acceso, todo esto gracias a tecnologías como las llamadas, videollamadas e internet.</p>
                    <p>La telemedicina permite a los doctores diagnosticar a los pacientes de manera más eficiente, lo que reduce los traslados y remisiones innecesarias, ahorrando costos y, al mismo tiempo, aumentando el comfort y la accesibilidad de los usuarios a servicios de salud de alta calidad.</p>
                </div>
                <div class="col-12 text-center">
                    <Imagen alt="Imagen descriptiva de la telemedicina." subtitulo="Fuente: AARP.org. (31 de agosto del 2020)" shadow={true} url="https://cdn.aarp.net/content/dam/aarp/health/conditions_treatments/2020/08/1140-telehealth-get-started-esp.jpg" width="400" height="400" />
                </div>
                <div class="col-12 text-justify">
                    <h5>¿Por qué implementar la telemedicina?</h5>
                </div>
                <div class="col-12 text-justify">
                    <p>La distancia de lugares de fácil acceso o más habitados y la carencia de tiempo son los elementos que más influyen en la creación y viabilidad de la telemedicina. Adicionalmente, existen múltiples beneficios que permiten ver a la telemedicina como un complemento fundamental a la medicina in-situ, algunos de ellos son:</p>
                    <ul>
                        <li>Ahorro de costos en remisión de pacientes: es más fácil poder remitir directamente a un paciente mediante una aplicación que ofrezca servicios de telecomunicación.</li>
                        <li>Aumento de cobertura del servicio médico: gracias a la facilidad de acceso para los servicios de internet, es posible aumentar la cobertura de la medicina de alta calidad, para que los usuarios de comunidades lejanas puedan tener acceso a un servicio de alta disponibilidad, calidad y eficiencia.</li>
                        <li>Disminución de esparcimiento de enfermedades: puesto a que no se visita el consultorio médico, el paciente evita el posible contacto con una superficie contaminada.</li>

                    </ul>
                </div>
                <div class="col-12 text-justify">
                    <h5>¿Cómo ha sido la implementación de la telemedicina en Colombia?</h5>
                    <p>Colombia ha contado con la legislación para la telemedicina, sin embargo, durante el marco de la emergencia sanitaria de COVID-19, Colombia adoptó a la telemedicina como una de las herramientas más fundamentales para dar continuidad a los servicios sanitarios, mediante teleconsultas y asesorías. El Ministerio de Salud busca dar continuidad a los procesos de la telemedicina, manteniendo los logros adquiridos y formalizando algunos aspectos aprendidos durante la pandemia.</p>
                </div>
            </div>
            <div slot="referencias">
                <Referencias {referencias} />
            </div>
        </Card>
    </div>
</div>