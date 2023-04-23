<script>
    import Card from "../Card.svelte";
    import Referencias from "../Referencias.svelte";
    import Imagen from "../Imagen.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        document.querySelector('title').innerHTML = 'Tema 2: Teleasistencia, teletrabajo, telemedicina, teleeducación y comercio electrónico - Teleducación';
    });

    const referencias = [
        {
            'autor': 'Telerad',
            'titulo': 'Educación y Tecnología: teleeducación',
            'url': 'http://innovation.teleradweb.com.ar/teleducaci%C3%B3n-beneficios-de-la-educaci%C3%B3n-a-distancia-en-salud',
            'ubicacion': 'Argentina',
            'empresa': 'Telerad'
        },
        {
            'autor': 'Arango, T.',
            'titulo': 'Cómo nació la teleeducación y otros datos cocteleros sobre este modelo de enseñanza',
            'url': 'https://www.larepublica.co/empresas/como-nacio-la-teleeducacion-y-otros-datos-cocteleros-sobre-este-modelo-3016798',
            'ubicacion': 'Colombia',
            'fecha': '11 de junio del 2020',
            'empresa': 'La República'
        },
    ];
</script>

<div class="row">
    <div class="col-12">
        <Card titulo="Teleeducación">
            <div class="row align-self-center" slot="contenido">
                <div class="col-12">
                    <h5>¿Qué es la teleeducación?</h5>
                </div>
                <div class="col-12 text-justify">
                    <p>La teleeducación, o también conocida en ciertos sitios como educación a distancia, es la alternativa de adquisición de conocimientos mediante medios electrónicos y digitales. Gracias a los avances tecnológicos y a la internet, es posible llevar la educación a lugares poco habitados, llevando educación de alta calidad con alta accesibilidad.</p>
                    <p>La teleeducación permite a los estudiantes tener una alta flexibilidad en su capacitación, esto mediante el acompañamiento asincrónico y sincrónico de los docentes, así como la decisión por parte del estudiante cuando desea capacitarse, siempre y cuando cumpla con la serie de actividades que se le asignan.</p>
                </div>
                <div class="col-12 col-lg-8 text-justify">
                    <h5>¿Qué tecnologías son usadas en la teleeducación?</h5>
                    <p>En sus inicios, la teleeducación ha usado la radio, videocintas, casettes, servicios de telefonía y la televisión como medios para distribuir los contenidos educativos, o para impartir clases. Gracias a los avances tecnológicos de la internet, es mucho más accesible y de mucha más alta calidad, permitiendo usar aplicaciones VoIP para realizar clases sincrónicas y asincrónicas, así como para la distribución de los recursos educativos.</p>
                    <p>Además, con los avances tecnológicos en las aplicaciones web, se usan campuses virtuales como Moodle o Blackboard para hacer el cargue de las actividades y tareas, y sirve como medio de interacción entre estudiantes y docentes.</p>
                </div>
                <div class="col-12 col-lg-4 text-center">
                    <Imagen alt="Imagen de Blackboard y Moodle" url="https://www.insidehighered.com/sites/default/files/media/torn1.jpg" subtitulo="Fuente: Inside Higher Ed. (n.f)" shadow={true} />
                </div>
                <div class="col-12 text-justify">
                    <h5>¿Qué universidades han implementado la teleeducación?</h5>
                    <p>
                        Cuando se comenzó a formar el concepto de teleeducación, existían pocas universidades que ofrecían este estilo de aprendizaje, sin embargo, universidades como Stanford University o University of Wisconsin-Madison desarrollaron cursos redes de formación universitaria mediante telefonía y redes televisivas. El primer campus virtual fue creado por la Uni
                    </p>
                    <p>
                        Múltiples universidades a nivel mundial están empezando a adoptar estos estilos de enseñanza, lo que permite brindar accesibilidad a la educación superior en zonas alejadas. Algunas universidades que han implementado la educación a distancia son la Universidad Santiago de Cali, Universidad del Quindio y la Universidad del Tolima. Sin embargo, una de las universidades que
                        se fundaron con este principio ha sido la Universidad Nacional Abierta y a Distancia en Colombia, cuyo principal énfasis ha sido la accesibilidad de la educación superior a distancia, de alta calidad.
                    </p>
                </div>
            </div>
            <div slot="referencias">
                <Referencias {referencias} />
            </div>
        </Card>
    </div>
</div>