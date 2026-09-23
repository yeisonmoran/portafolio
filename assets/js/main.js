(() => {
  "use strict";

  // Esta clase permite que el CSS active animaciones solo cuando JavaScript funciona.
  document.documentElement.classList.add("js");

  // ================================================================
  // MENÚ MÓVIL
  // ================================================================
  const botonMenu = document.querySelector(".menu-toggle");
  const navegacionPrincipal = document.querySelector(".main-nav");
  const enlacesNavegacion = [...document.querySelectorAll(".nav-link")];

  function establecerEstadoMenu(estaAbierto) {
    botonMenu.setAttribute("aria-expanded", String(estaAbierto));
    botonMenu.setAttribute(
      "aria-label",
      estaAbierto ? "Cerrar menú" : "Abrir menú",
    );
    navegacionPrincipal.classList.toggle("is-open", estaAbierto);
    document.body.classList.toggle("menu-open", estaAbierto);
  }

  function cerrarMenu(devolverElFoco = false) {
    establecerEstadoMenu(false);

    if (devolverElFoco) {
      botonMenu.focus();
    }
  }

  botonMenu.addEventListener("click", () => {
    const menuEstaAbierto = botonMenu.getAttribute("aria-expanded") === "true";
    establecerEstadoMenu(!menuEstaAbierto);
  });

  // Al seleccionar una sección, se cierra el menú y el foco llega a esa sección.
  enlacesNavegacion.forEach((enlace) => {
    enlace.addEventListener("click", () => {
      const seccionDestino = document.querySelector(
        enlace.getAttribute("href"),
      );
      cerrarMenu();

      window.setTimeout(() => {
        seccionDestino.focus({ preventScroll: true });
      }, 450);
    });
  });

  // Escape cierra el menú y devuelve el foco al botón si estaba en un enlace.
  document.addEventListener("keydown", (evento) => {
    const menuEstaAbierto = botonMenu.getAttribute("aria-expanded") === "true";
    const focoEstaEnMenu = navegacionPrincipal.contains(document.activeElement);

    if (evento.key === "Escape" && menuEstaAbierto) {
      cerrarMenu(focoEstaEnMenu);
    }
  });

  // ================================================================
  // ENLACE ACTIVO SEGÚN LA SECCIÓN VISIBLE
  // ================================================================
  const encabezado = document.querySelector(".site-header");
  const seccionesPagina = enlacesNavegacion
    .map((enlace) => document.querySelector(enlace.getAttribute("href")))
    .filter(Boolean);

  let alturaEncabezado = 0;
  let posicionesSecciones = [];

  function medirNavegacion() {
    alturaEncabezado = encabezado.offsetHeight;
    posicionesSecciones = seccionesPagina.map((seccion) => ({
      elemento: seccion,
      posicion: seccion.offsetTop,
    }));
  }

  function actualizarEnlaceActivo() {
    const puntoDeRevision =
      window.scrollY + alturaEncabezado + window.innerHeight * 0.25;
    let seccionActual = seccionesPagina[0];

    posicionesSecciones.forEach((datosSeccion) => {
      if (datosSeccion.posicion <= puntoDeRevision) {
        seccionActual = datosSeccion.elemento;
      }
    });

    enlacesNavegacion.forEach((enlace) => {
      const esActual = enlace.getAttribute("href") === `#${seccionActual.id}`;
      enlace.classList.toggle("is-active", esActual);

      if (esActual) {
        enlace.setAttribute("aria-current", "location");
      } else {
        enlace.removeAttribute("aria-current");
      }
    });
  }

  // Se espera a que termine el scroll antes de volver a calcular los enlaces.
  let actualizacionScrollPendiente = false;

  window.addEventListener(
    "scroll",
    () => {
      if (actualizacionScrollPendiente) return;

      actualizacionScrollPendiente = true;
      window.requestAnimationFrame(() => {
        actualizarEnlaceActivo();
        actualizacionScrollPendiente = false;
      });
    },
    { passive: true },
  );

  window.addEventListener("resize", () => {
    medirNavegacion();
    cerrarMenu();
    actualizarEnlaceActivo();

    if (window.innerWidth > 760) {
      document.body.classList.remove("menu-open");
    }
  });

  medirNavegacion();
  actualizarEnlaceActivo();

  // ================================================================
  // APARICIÓN SUAVE DE LOS BLOQUES
  // Primero se comprueba si la persona pidió reducir las animaciones.
  // ================================================================
  const elementosParaMostrar = [...document.querySelectorAll("[data-reveal]")];
  const prefiereMenosMovimiento = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefiereMenosMovimiento || !("IntersectionObserver" in window)) {
    elementosParaMostrar.forEach((elemento) =>
      elemento.classList.add("is-visible"),
    );
  } else {
    const observadorAparicion = new IntersectionObserver(
      (entradas, observador) => {
        entradas.forEach((entrada) => {
          if (!entrada.isIntersecting) return;

          entrada.target.classList.add("is-visible");
          observador.unobserve(entrada.target);
        });
      },
      {
        threshold: 0.14,
      },
    );

    elementosParaMostrar.forEach((elemento) =>
      observadorAparicion.observe(elemento),
    );
  }

  // Mantiene el año del pie de página actualizado.
  document.querySelector("#current-year").textContent =
    new Date().getFullYear();
})();
