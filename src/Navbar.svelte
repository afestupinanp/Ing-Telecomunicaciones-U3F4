<script>
    import { link } from "svelte-spa-router";
</script>

<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
        <a class="navbar-brand" use:link={{ href: "/" }}>Unidad 3 Fase 4</a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarMenu">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" use:link={{ href: "/teleasistencia" }}>Teleasistencia</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" use:link={{ href: "/teletrabajo" }}>Teletrabajo</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" use:link={{ href: "/telemedicina" }}>Telemedicina</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" use:link={{ href: "/teleeducacion" }}>Teleeducación</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" use:link={{ href: "/comercio-electronico" }}>Comercio electrónico</a>
                </li>
            </ul>
        </div>
    </div>
</nav>