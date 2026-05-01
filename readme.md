## Sobre este portafolio

Este portafolio personal muestra proyectos frontend desarrollados con tecnologías modernas (HTML, CSS, JavaScript y frameworks como React). Incluye descripciones, capturas y enlaces al código fuente. Está pensado para presentar habilidades y proyectos a reclutadores o clientes.
## Guía de colaboración: flujo de Pull Requests

Objetivo: ofrecer una guía práctica para trabajar en proyectos grandes usando ramas y pull requests.

Flujo paso a paso:

1. Crear una rama por tarea/feature

`ash
git checkout -b feature/descripcion-corta
`

2. Mantener tu rama actualizada con main (rebase o merge según la política del equipo):

`ash
git fetch origin
git rebase origin/main
# o: git merge origin/main
`

3. Hacer cambios pequeños, agregar pruebas y linters locales. Evitar cambios no relacionados.

4. Mensajes de commit claros y atómicos (ej.: eat(auth): añadir login).

5. Subir la rama al remoto:

`ash
git push -u origin feature/descripcion-corta
# Si reescribes historial con rebase y es necesario:
git push --force-with-lease
`

6. Abrir el Pull Request:

- CLI (recomendado):

`ash
gh pr create --title "Breve título" --body "Descripción: qué, por qué, cómo probar" --base main
`

- Web: ir a la página del repo y usar "Compare & pull request".

7. Estructura recomendada del PR:

- Resumen corto
- Qué cambia y por qué
- Pasos para probar localmente
- Referencias a issues (ej.: Closes #123)
- Capturas o GIFs si aplica

8. Solicitar revisores y etiquetas, responder comentarios y subir commits adicionales en la misma rama.

9. Esperar checks/CI; corregir errores según resultados.

10. Merge según la estrategia del proyecto (squash, rebase o merge commit). Borrar la rama remota y local después:

`ash
gh pr merge <numero-o-url> --squash --delete-branch
git branch -d feature/descripcion-corta
git push origin --delete feature/descripcion-corta
`

Buenas prácticas rápidas:

- PRs pequeños y enfocados
- Incluir tests y documentación cuando aplique
- Usar Draft PRs para trabajo en progreso
- Usar --force-with-lease en vez de --force
- Respetar la guía de estilo y las plantillas del repo

Comandos útiles:

`ash
git checkout -b ...
git fetch origin && git rebase origin/main
git add . && git commit -m "mensaje claro"
git push -u origin <rama>
gh pr create --web
gh pr view --web
gh pr merge <id> --squash --delete-branch
`

Si quieres, adapto esta guía al flujo concreto de tu equipo o la convierto en una plantilla de Pull Request.

