<script>
    import Card from "../Card.svelte";
    import Referencias from "../Referencias.svelte";
    import Imagen from "../Imagen.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        document.querySelector('title').innerHTML = 'Tema 2: Teleasistencia, teletrabajo, telemedicina, teleeducación y comercio electrónico - Teleasistencia';
    });

    const referencias = [
        {
            'autor': 'Atenzia',
            'titulo': '¿Qué es la teleasistencia? Todo lo que debes saber',
            'fecha': '18 de septiembre de 2020',
            'url': 'https://teleasistencia.es/es/blog/asesoramiento-para-la-tercera-edad/que-es-la-teleasistencia-todo-lo-que-debes-saber',
            'ubicacion': 'España',
            'empresa': 'Atenzia'
        },
        {
            'autor': 'Mecohisa',
            'titulo': 'Teleasistencia: Servicios, Funciones y Tipos',
            'url': 'https://mecohisa.com/teleasistencia-servicios-funciones-tipos/',
            'ubicacion': 'España',
            'empresa': 'Mecohisa'
        }
    ];
</script>

<div class="row">
    <div class="col-12">
        <Card titulo="Teleasistencia">
            <div class="row align-items-center" slot="contenido">
                <div class="col-12">
                    <h5>¿Qué es la teleasistencia?</h5>
                </div>
                <div class="col-12 col-lg-8 order-2 order-lg-1 text-justify">
                    <p>
                        La teleasistencia es un servicio de atención integral e inmediata, cuya función se especializa en brindar las ayudas necesarias a los usuarios. Los usuarios que usan este servicio son variados, y van desde mujeres embarazadas hasta adultos mayores, con una disponibilidad de 24 horas. 
                    </p>
                    <p>
                        Este servicio permite a los usuarios solicitar ayuda en caso de emergencia o situaciones adversas, y recibir apoyo inmediato por medio de diferentes servicios de telecomunicación, sin embargo, su orientación es principalmente preventiva.
                    </p>
                    <p>
                        Los servicios de teleasistencia permiten mantener un cierto nivel de independencia, y además garantizan la seguridad del afiliado, y brindan una sensación de comfort tanto a los familiares del usuario, como al mismo usuario.
                    </p>
                    <p>
                        Los servicios de telecomunicación usados principalmente para la prestación del apoyo requerido son vía telefónica y vía aplicaciones de mensajería instantánea (ej: WhatsApp, Telegram), o por medio de botones de pánico instalados en el domicilio, o en alguna aplicación instalada en los dispositivos.
                    </p>
                </div>
                <div class="col-12 col-lg-4 order-1 order-lg-2">
                    <Imagen url="https://www.cuidadomayor.com/wp-content/uploads/2021/05/mecanismo-teleasistencia.png" alt="Imagen descriptiva del cuidado al adulto mayor." subtitulo="Fuente: Cuidado Mayor. (n.f)" />
                </div>
            </div>
            <span slot="referencias">
                <Referencias {referencias} />
            </span>
        </Card>
    </div>
</div>
