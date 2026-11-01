# CESI 2025 — Guía de curaduría y mantenimiento multimedia

**Estado (1 de noviembre de 2026):** los archivos se incorporaron a `cesi/assets/`. La página `cesi/index.html` muestra fotografías, prensa, afiches y dos videos mediante un catálogo de datos, sin desplazar ni duplicar archivos originales.

## Dónde está cada cosa

- **Archivos originales:** `cesi/assets/` (tal como los subiste, incluidos nombres con espacios y mayúsculas).
- **Catálogo de imágenes y descripciones:** `cesi/assets/fotos.json`.
- **Página pública prevista:** https://nglmnz.github.io/portafolio/cesi/
- **Vista del sitio en GitHub:** https://github.com/nglmnz/portafolio/blob/main/cesi/index.html

El catálogo mantiene una organización lógica por categorías: `hero` (portada), `branding` (identidad), `programacion` (actividades y paneles), `exhibicion` (muestra artística), `congreso` (delegaciones), `equipo` y `prensa`. No es necesario mover los archivos físicos a las subcarpetas ya creadas: los enlaces actuales dependen de su ubicación original.

## Montaje actual

1. **Hero:** `Imagen principal tortuga con logos.webp` (imagen principal), con `hero-main.webp` como variante elegible desde la propia portada.
2. **Origen del proyecto:** afiche general, programación de una jornada y tote bag.
3. **Programa:** charla de Esteban Torres, panel de memoria y DD. HH., panel de género y ponencia.
4. **Arte:** imágenes de la exhibición, Eleodoro Calderón y mediación de obra; lineup de 19 artistas.
5. **Video del arte:** `exhibicion_video_felisan.mp4` y `video_exhibicion_tortuga_eleodoro.mp4`, ambos con carga bajo demanda (`preload="none"`).
6. **Evaluación y equipos:** retrato final, equipo directivo y comitiva de la UAI.
7. **Cobertura externa:** capturas de prensa de UAH, UC y Valparaíso; botones a las fuentes externas.
8. **Galería:** fotografías filtrables con ampliación, créditos provisionales, botones para ver más e idiomas ES/EN/PT.

Se seleccionaron **42 fotografías o piezas gráficas** para el catálogo. Los nombres alternativos con idéntico SHA se conservaron en el repositorio, pero se omitieron de la galería para no repetir contenidos. No se inventaron títulos de obras, autores de fotografías ni identidades de asistentes.

## Cómo incorporar o corregir una imagen

1. Sube el archivo a `cesi/assets/` desde GitHub (**Add file → Upload files**).
2. Abre `cesi/assets/fotos.json` y pulsa el lápiz de edición.
3. Agrega un objeto al arreglo `photos`. Usa **ruta relativa URL-encoded** cuando existan espacios: `assets/Mi%20foto.webp`.
4. Mantén las tres versiones de `alt` y `caption`, una categoría válida, `credit`, `permission` y `source_file` con el nombre exacto.
5. Guarda el cambio (**Commit changes**). La galería se actualiza al recargar; si quieres destacar esa foto en el recorrido editorial, hay que añadirla a la selección `renderFeatured()` de la página.

Ejemplo:
```json
{
  "src": "assets/exhibicion_nueva.webp",
  "category": "exhibicion",
  "alt": {
    "es": "Vista de la exhibición CESI 2025",
    "en": "View of the CESI 2025 exhibition",
    "pt": "Vista da exposição CESI 2025"
  },
  "caption": {
    "es": "Exhibición artística CESI 2025",
    "en": "CESI 2025 art exhibition",
    "pt": "Exposição artística CESI 2025"
  },
  "credit": "Nombre de la persona fotógrafa",
  "permission": "Uso autorizado",
  "source_file": "exhibicion_nueva.webp"
}
```

## Derechos y créditos

Las imágenes se recibieron para presentarlas en el portafolio, pero **su mera subida a GitHub no demuestra que estén resueltos los derechos de fotografía, retrato o reproducción de obras**. Por ahora el catálogo advierte «Autoría fotográfica por confirmar». Revisa créditos y consentimientos antes de difundir ampliamente. El contenido de archivos con títulos ambiguos se trató con descripciones conservadoras.

## Videos y rendimiento

Los dos MP4 originales pesan aproximadamente **3,0 MB y 4,1 MB**. Se pueden mostrar en el sitio porque ya están disponibles en el repo. Su reproducción usa controles nativos y no precarga el archivo completo. Si posteriormente subes grabaciones mayores, preferiremos un alojamiento audiovisual externo y un reproductor incrustado.

## Publicación

Confirma en GitHub **Settings → Pages → Deploy from branch → main → /(root)**, y revisa la web desde teléfono y escritorio. Mientras la publicación no esté verificada, conserva el portafolio anterior en `vitrina-piloto/perfil/` para no romper los QR distribuidos.
