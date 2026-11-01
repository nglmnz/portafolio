# Hilvanar · archivo visual por incorporar

Este directorio está preparado para fotografías y material **autorizado** vinculado a la exposición `Hilvanar: contar, narrar, resistir`, Universidad de Playa Ancha (2026), FONDECYT Regular 1220508. El rol declarado en el portafolio es **colaborador externo en mediación y comunicación pública (2025–2026)**. La investigación y curaduría de Hilvanar corresponden a Macarena Trujillo Cristoffanini y al trabajo de su equipo.

## Cómo incorporar imágenes

1. Subir copias optimizadas (preferentemente `.webp`, alrededor de 1600 px en el lado largo) a `fondecyt/assets/images/`.
2. Actualizar `fondecyt/assets/galeria.json`: añadir a `images` un registro con `src` (ruta relativa `images/fotografia.webp`), `category`, `alt` y `caption` en español, inglés y portugués; `credit`, `permission`, `date` y `sensitive`.
3. El archivo se incorpora automáticamente a la galería del caso cuando la página encuentra el manifiesto actualizado.
4. Para publicaciones institucionales y videos ya difundidos, preferir enlazar a su sitio original; no descargar ni volver a subir material audiovisual ajeno sin permiso.

## Propuesta de selección fotográfica

- `apertura`: fotografía del espacio expositivo / montaje **con permiso** y crédito.
- `exposicion`: vistas generales de Hilvanar que no expongan detalles sensibles.
- `mediacion`: registros autorizados de recorridos o conversaciones públicas.
- `equipo`: retratos o foto grupal aprobada de personas vinculadas a la actividad.
- `prensa`: capturas o imágenes de publicaciones oficiales, conforme a condiciones de uso.

## Principios editoriales

Las obras y registros de investigación incluyen relatos de violencias, imágenes producidas por participantes y cartografías corporales; su exhibición en UPLA o en prensa pública **no implica automáticamente autorización para republicación** en un sitio personal. No publicar fotografías identificables de participantes de investigación sin autorización expresa y revisión del equipo responsable. Evitar descontextualizar imágenes sensibles o presentar detalles personales para aumentar impacto visual.

**Créditos todavía pendientes:** fotografía de montaje; autoría de imágenes de actividad; fechas; nombres de personas cuando exista consentimiento para identificarlas; descripción exacta de tareas realizadas por el colaborador externo.

## Arquitectura técnica

- `fondecyt/index.html`: ruta pública.
- `assets/fondecyt-datos.json`: relato editorial multilingüe, las fuentes verificadas y los recursos facilitados pendientes de cotejar.
- `assets/fondecyt.js`: selector de los cuatro ejes, filtros de fuentes y galería.
- `assets/fondecyt.css`: diseño editorial con motivo abstracto original de hilos; no utiliza imágenes de investigación de terceros.
- `fondecyt/assets/galeria.json`: fotografías y permisos.
