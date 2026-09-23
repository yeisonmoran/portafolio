# Portafolio de Yeison Lara

Portafolio profesional de **Yeison Lara**, desarrollador web junior full stack. La página presenta su formación, proyectos, experiencia en soporte TI y formas de contacto.

La web está hecha con **HTML, CSS y JavaScript**, sin frameworks. Esto permite que sea ligera, fácil de publicar y sencilla de mantener.

---

## Ver el portafolio

No necesitas instalar nada.

1. Abre la carpeta del proyecto.
2. Haz doble clic en `index.html`.
3. El sitio se abrirá en tu navegador.

También puedes usar la extensión **Live Server** de Visual Studio Code. Con esa extensión, haz clic derecho sobre `index.html` y selecciona **Open with Live Server**.

---

## ¿Qué contiene la página?

El contenido sigue un orden pensado para que un reclutador entienda tu perfil en pocos segundos:

1. **Inicio:** nombre, puesto objetivo, presentación y enlaces principales.
2. **Perfil:** formación, enfoque y tecnologías.
3. **Proyectos:** evidencia práctica de lo que has construido.
4. **Experiencia:** resultados reales obtenidos en soporte técnico.
5. **Contacto:** correo, CV, GitHub y LinkedIn.

---

## ¿Qué hace cada archivo?

```text
portafolio/
├── index.html
├── readme.md
├── assets/
│   ├── css/
│   │   └── estilos.css
│   ├── img/
│   │   ├── Logo.png
│   │   ├── favicon-32.png
│   │   ├── portafolio-social.jpg
│   │   └── yeison-lara.jpg
│   └── js/
│       └── main.js
└── documentos/
    └── soporte-tecnico-cv.pdf
```

### `index.html`

Contiene todo el texto y la estructura de la página.

- `<header>`: encabezado y menú.
- `<main>`: contenido principal.
- `<section>`: cada bloque de la página.
- `<nav>`: enlaces para moverse entre secciones.
- `<a>`: enlaces internos y externos.
- `<img>`: fotografías y logotipo.

### `assets/css/estilos.css`

Contiene la apariencia del sitio.

- **Variables:** colores, tipografía y medidas principales.
- **Diseño adaptable:** optimización para celular, tablet y computadora.
- **Componentes:** botones, tarjetas, etiquetas, menú y pie de página.
- **Accesibilidad:** estados de foco y soporte para reducir animaciones.

### `assets/js/main.js`

Contiene las funciones interactivas.

- Abre y cierra el menú en celular.
- Cierra el menú al seleccionar una sección.
- Actualiza el enlace activo según dónde se encuentra la persona.
- Muestra los bloques suavemente al entrar en pantalla.
- Actualiza el año del pie de página.

El código está dentro de una función para que sus variables y funciones no se mezclen con el resto de la página. Tampoco usa librerías externas.

### `assets/img`

Guarda las imágenes que utiliza el sitio:

- `yeison-lara.jpg`: fotografía optimizada de la portada.
- `Logo.png`: logotipo de By Marnin usado en la vista previa del proyecto.
- `favicon-32.png`: icono pequeño del navegador.
- `portafolio-social.jpg`: imagen que se muestra al compartir el portafolio en redes sociales.

### `documentos`

Guarda el CV en PDF. El botón **Descargar CV** abre este archivo.

---

## Cambiar el contenido más fácilmente

### 1. Cambiar textos personales

Abre `index.html` y busca el texto que quieras cambiar. Los bloques están identificados con comentarios como:

```html
<!-- 1. Presentación -->
<!-- 2. Perfil -->
<!-- 3. Proyectos -->
```

### 2. Cambiar un proyecto

Cada proyecto está dentro de un elemento `<article class="project-card">`.

En ese bloque puedes modificar:

- El título.
- La descripción.
- La descripción de tu aporte al proyecto.
- Las tecnologías en `<li>`.
- El enlace de la demo.
- El enlace del código en GitHub.

### 3. Cambiar la foto

Sustituye el archivo:

```text
assets/img/yeison-lara.jpg
```

Mantén el mismo nombre y no necesitas cambiar el código. Después abre la página de nuevo.

### 4. Cambiar colores

Abre `assets/css/estilos.css` y modifica las variables al inicio:

```css
:root {
  --color-bg: #07111f;
  --color-surface: #0b1828;
  --color-text: #f7fafc;
  --color-primary: #48d7c5;
}
```

- `--color-bg`: fondo principal.
- `--color-surface`: fondo de las secciones alternas.
- `--color-text`: color principal del texto.
- `--color-primary`: color de detalles y enlaces.

Estas variables forman la paleta base del sitio. Al cambiarlas puedes adaptar rápidamente el aspecto general sin repetir colores en todo el CSS.

### 5. Cambiar el CV

Sustituye el PDF y conserva el nombre:

```text
documentos/soporte-tecnico-cv.pdf
```

Si cambias también el nombre del archivo, actualiza el enlace que aparece dos veces en `index.html`.

---

## Tecnologías usadas en el proyecto

### Portafolio

- HTML5 semántico.
- CSS3 moderno con variables, Flexbox y Grid.
- JavaScript moderno con `const`, `let`, funciones y eventos.
- Diseño adaptable a celular, tablet y computadora.
- Mejoras de accesibilidad y SEO.

### Proyectos que se presentan

- React y Vite.
- Node.js y Express.
- MySQL y Prisma.
- APIs REST y Postman.
- PowerShell, WMI/CIM y Active Directory.

---

## Reglas básicas para futuros cambios

Para mantener el código ordenado:

1. Usa nombres descriptivos: `.button` es más fácil de entender que `.b`.
2. No agregues estilos dentro de `index.html`; todo debe estar en `estilos.css`.
3. No uses colores nuevos si puedes reutilizar una variable de `:root`.
4. Mantén las etiquetas HTML correctamente cerradas.
5. Después de hacer cambios, abre la consola del navegador y confirma que no aparezcan errores.
6. Revisa la página en un celular y en una computadora.

---

## Publicar con GitHub Pages

1. Sube los cambios al repositorio de GitHub.
2. Abre **Settings → Pages** en GitHub.
3. En **Source**, selecciona la rama `main` y la carpeta `/ (root)`.
4. Guarda los cambios y espera a que GitHub genere la dirección pública.

La URL tendrá una estructura parecida a:

```text
https://yeisonmoran.github.io/portafolio/
```

---

## Contacto profesional

- **Email:** [yeison.lara.ti@gmail.com](mailto:yeison.lara.ti@gmail.com)
- **GitHub:** [github.com/yeisonmoran](https://github.com/yeisonmoran)
- **LinkedIn:** [linkedin.com/in/yemoran12](https://www.linkedin.com/in/yemoran12/)
