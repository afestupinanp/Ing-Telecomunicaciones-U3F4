import { wrap } from "svelte-spa-router/wrap";
import LoadingComponent from './Loading.svelte';

const routes = {
    '/': wrap({'asyncComponent': () => import('./pages/Home.svelte'), 'loadingComponent': LoadingComponent}),
    '/teleasistencia': wrap({'asyncComponent': () => import('./pages/Teleasistencia.svelte'), 'loadingComponent': LoadingComponent}),
    '/teletrabajo': wrap({'asyncComponent': () => import('./pages/Teletrabajo.svelte'), 'loadingComponent': LoadingComponent}),
    '/telemedicina': wrap({'asyncComponent': () => import('./pages/Telemedicina.svelte'), 'loadingComponent': LoadingComponent}),
    '/teleeducacion': wrap({'asyncComponent': () => import('./pages/Teleeducacion.svelte'), 'loadingComponent': LoadingComponent}),
    '/comercio-electronico': wrap({'asyncComponent': () => import('./pages/ComercioElectronico.svelte'), 'loadingComponent': LoadingComponent})
};

export default routes;