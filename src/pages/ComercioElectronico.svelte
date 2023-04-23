<script>
    import Card from "../Card.svelte";
    import Referencias from "../Referencias.svelte";
    import Imagen from "../Imagen.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        document.querySelector('title').innerHTML = 'Tema 2: Teleasistencia, teletrabajo, telemedicina, teleeducación y comercio electrónico - Comercio Electrónico';
    });

    const referencias = [
        {
            'autor': 'Higuerey, E.',
            'titulo': 'Comercio electrónico: conoce todo sobre este modelo de negocios y cuáles son sus ventajas',
            'url': 'https://rockcontent.com/es/blog/comercio-electronico/',
            'fecha': '1 de junio del 2019',
            'ubicacion': 'Estados Unidos',
            'empresa': 'Rock Content'
        },
        {
            'autor': 'Clavijo, C.',
            'titulo': 'Qué es el comercio electrónico: características, ventajas y ejemplos',
            'url': 'https://blog.hubspot.es/sales/comercio-electronico',
            'fecha': '3 de abril del 2023',
            'ubicacion': 'Estados Unidos',
            'empresa': 'HubSpot'
        },
    ];
</script>

<div class="row">
    <div class="col-12">
        <Card titulo="Comercio Electrónico">
            <div class="row align-self-center" slot="contenido">
                <div class="col-12 text-justify">
                    <h5>¿Qué es el Comercio Electrónico?</h5>
                </div>
                <div class="col-12 text-center">
                    <Imagen alt="" url="https://www.hostinger.es/tutoriales/wp-content/uploads/sites/7/2022/07/Tipos-de-eCommerce-1.jpeg" subtitulo="Fuente: Hostinger. (n.f)" width="600" height="600" shadow={true} />
                </div>
                <div class="col-12 text-justify">
                    <p>El comercio electrónico, también conocido como E-Commerce, es un modelo de negocios que permite ofrecer la compra y venta de productos o servicios a través de internet: esto a través de redes sociales, páginas web dedicadas al comercio u otro medio electrónico.</p>
                    <p>Por medio de internet, los usuarios pueden observar los artículos que más les llamen la atención, y solicitar el envío de dicho artículo desde cualquier lugar del mundo, esto por plataformas como Amazon, eBay, Mercadolibre, OLX, entre muchas otras.</p>
                    <p>Gracias a la innovaciones de internet, cada vez el e-commerce ha tomado un espacio más central en el proceso de compra/venta, a tal punto que ciertas empresas no tienen sedes físicas, sino que se basan en el comercio electrónico para subsistir y ofrecer sus servicios a los clientes. Este nivel de acceso desde internet permite a las empresas tener un mayor rango de posibles clientes.</p>
                </div>
                <div class="col-12 text-justify">
                    <h5>¿Qué tipos de Comercio Electrónico existen?</h5>
                    <p>Se puede categorizar al Comercio Electrónico en los siguientes tipos:</p>
                    <ul>
                        <li>Business to Consumer (B2C): conocido como comercio electrónico minorista, todo el proceso es digital, excepto la logística de entrega.</li>
                        <li>Direct to Consumer (D2C): la fábrica realiza las ventas directamente a los consumidores, eliminando a los intermediarios de venta.</li>
                        <li>Business to Business (B2B): proceso de compra/venta efectuado por dos entidades jurídicas a nivel mayorista. </li>
                        <li>Consumer to Consumer (C2C): proceso de compra/venta efectuado entre dos personas naturales. Para esta forma de comercio electrónico, se disponen múltiples plataformas como eBay, Craigslist, Mercadolibre o OLX.</li>
                    </ul>
                </div>
                <div class="col-12 text-justify">
                    <h5>¿Qué plataformas existen para crear un Comercio Electrónico?</h5>
                    <p>En la actualidad, existen múltiples formas de crear un comercio electrónico que permiten simplificar el diseño e implementación de una tienda online, como lo son Shopify, WooCommerce o PrestaShop.</p>
                </div>
            </div>
            <div slot="referencias">
                <Referencias {referencias} />
            </div>
        </Card>
    </div>
</div>