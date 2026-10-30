# Guía para incorporar fotografías al portafolio — CESI 2025

## 1. Estructura
- `cesi/assets/hero/`: **identidad visual principal**. Archivo preferido `hero-eleodoro-calderon.webp`.
- `cesi/assets/branding/`: carteles, gráfica del evento y programa.
- `cesi/assets/programacion/`: conferencias, paneles y ponencias.
- `cesi/assets/exhibicion/`: inauguración, obras y recorridos.
- `cesi/assets/congreso/`: público, acreditación y espacios.
- `cesi/assets/talleres/`: taller de corrupción y taller del INE.
- `cesi/assets/equipo/`: organización, voluntariado y colaboraciones.
- `assets/perfil/`: fotografías generales del portafolio profesional.

## 2. Cómo subir
En GitHub abre la carpeta, pulsa **Add file → Upload files**, arrastra fotos y confirma **Commit changes**. Sugerencia: primero entre 10 y 20 fotos seleccionadas y optimizadas.
Usa nombres descriptivos, en minúscula, sin espacios ni tildes; p. ej. `cesi/assets/arte/exhibicion-apertura-01.webp` (usa la carpeta real `exhibicion`).
**No subas fotografías sin permiso, especialmente retratos, ni materiales sujetos a derechos ajenos sin autorización.**

## 3. Optimización
- Hero: anchura preferida 1800–2200 píxeles, WebP de calidad 78–85, generalmente menos de 600 KB.
- Galería: 1200–1600 píxeles, WebP, generalmente menos de 350 KB por imagen.
- Fotografía vertical: conserva orientación, preferiblemente 3:4.
- Evita imágenes borrosas y duplicadas.

## 4. Cómo se conectan con la página
En `cesi/assets/fotos.json`, agrega una entrada por fotografía en el arreglo `photos`. La web ya está preparada para leer ese archivo.

Ejemplo:
```json
{
  "src": "assets/exhibicion/exhibicion-apertura-01.webp",
  "category": "exhibicion",
  "alt": {
    "es": "Asistentes recorren la exposición CESI 2025",
    "en": "Visitors at the CESI 2025 exhibition",
    "pt": "Visitantes na exposição CESI 2025"
  },
  "caption": {
    "es": "Inauguración de la exposición, 30 de julio de 2025",
    "en": "Exhibition opening, 30 July 2025",
    "pt": "Abertura da exposição, 30 de julho de 2025"
  },
  "credit": "Nombre de la persona fotógrafa",
  "permission": "Publicación autorizada"
}
```
Categorías válidas: `hero`, `branding`, `programacion`, `exhibicion`, `congreso`, `talleres`, `equipo`.

## 5. Identidad visual de la portada
La imagen de la escultura **Agua, Tierra y Aire** de **Eleodoro Calderón** será el fondo del hero **cuando esté cargada con su crédito y permiso**. La web utilizará la foto marcada con `category: "hero"`. Sin imagen, conserva un fondo editorial elegante, sin links rotos.

## 6. Curaduría
Elige: 1 imagen hero, 2–3 de la exposición, 2 de ponencias/paneles, 2 de talleres, 2 generales, 1 del equipo y 1 de identidad gráfica. La galería muestra filtros, descripciones y ampliación interactiva. Cada cambio de idioma mantiene pies de foto cuando estén registrados en los tres idiomas.

## 7. Enlaces y QR
Nuevo sitio: https://nglmnz.github.io/portafolio/ — tras configurar Settings → Pages → Deploy from a branch, main, /(root).
No elimines el sitio anterior `vitrina-piloto/perfil/` antes de colocar una redirección y validar la URL nueva.
