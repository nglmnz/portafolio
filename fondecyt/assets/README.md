# Hilvanar · Archivo visual integrado

Proyecto científico: **FONDECYT Regular N.º 1220508**, dirigido por **Macarena Trujillo Cristoffanini**, Universidad de Playa Ancha. Exposición **Hilvanar: contar, narrar, resistir** (2026). En el portafolio, Ángel Muñoz informa su rol como **colaborador externo (2025–2026)**: mediación de una actividad pública y explicación al público de las metodologías de la investigación.

## Estado actual (1 noviembre 2026)

Se verificó la presencia de **67 archivos de imagen** subidos directamente a `fondecyt/assets/` y se organizó una selección editorial de **27 fotografías visibles**. Otros **40 archivos** figuran en el manifiesto como material no exhibido en espera de revisión (principalmente primeros planos de testimonios manuscritos, tableros y materiales que requieren especial cuidado). Los archivos originales no fueron renombrados ni movidos.

El manifiesto `galeria.json` organiza visualmente los archivos con `category`, `visibility`, `sensitive`, `alt`, `caption`, `credit` y `permission` en ES/EN/PT. Las fotografías solicitadas se muestran en el sitio bajo una solicitud explícita del responsable del portafolio; esto **no equivale a permiso acreditado de fotógrafos, artistas ni personas retratadas**.

### Portada: tres fotografías exactas, en este orden

1. `auditorio upla.webp`
2. `auditorio-academicas-presentando2.webp`
3. `auditorio-academicas-presentando3.webp`

Se reproducen en un carrusel de transición suave, separado visualmente del texto; tiene selección manual, reproducción/pausa, parada al salir del área visible y compatibilidad con `prefers-reduced-motion`.

### Mediación personal

Se destacan tres fotografías identificadas en el archivo con «Ángel»; las demás aparecen en la galería. El texto editorial procede de la declaración directa del colaborador: «Realicé la mediación de esta actividad y expliqué el apartado de metodologías del proyecto de investigación FONDECYT Regular 1220508». No se adjudica curaduría, dirección científica ni autoría del diseño metodológico.

### Galería y secuencia narrativa

- `auditorio`: cinco imágenes, incluidas las de portada
- `mi-mediacion`: seis imágenes del colaborador, identificadas por el autor
- `recorrido`: cinco imágenes del tránsito entre el auditorio y la exposición
- `exposicion`: siete imágenes del espacio y sus visitantes
- `actividades`: cuatro registros de actividades públicas

La página presenta filtros, un botón para cargar más fotografías y una vista ampliada. Se utilizan rutas locales `assets/<archivo>` con codificación de nombres que contienen espacios.

### Criterios de publicación pendientes

- Identificar fotógrafo/a y fecha real de cada imagen y, en la medida necesaria, verificar autorización de publicación por terceros.
- Revisar con el equipo FONDECYT la posibilidad de republicar testimonios, cartografías corporales y obras participativas.
- Evitar inferir identidades o circunstancias personales de quienes aparecen o escribieron materiales.
- Evaluar si las imágenes de actividades públicas con rostros reconocibles requieren una revisión adicional de consentimiento en el contexto de este portafolio.

## Mantenimiento

Para añadir una imagen nueva, subirla a `fondecyt/assets/`, agregar registro en `galeria.json` y marcar `visibility: "public_event"` únicamente cuando sea apropiada para publicación. `visibility: "review_required"` impide que la página la muestre. No marcar `sensitive: false` a un material de testimonio personal sin revisión específica.

Código: `assets/fondecyt.js` · `assets/fondecyt.css` · `assets/fondecyt-datos.json`. La página pública es `fondecyt/index.html`.
