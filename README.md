# Portafolio profesional | Ángel Muñoz Rañiman

Portafolio independiente de **Vitrina**, orientado a oportunidades de prácticas, investigación aplicada, análisis de datos, sostenibilidad e innovación en Bilbao/Euskadi.


## Dos casos nuevos: investigación y Sustancia (2026-11-01)

**Investigación de grado** → `/tesis/` — [Ver en la web](https://nglmnz.github.io/portafolio/tesis/)

- Introducción, problema, marco conceptual, metodología, resultados, discusión y conclusiones basados en `sg_final_v01(1).docx` (seminario UAH, julio de 2026).
- Visualización de tres perfiles k-means y barras de resultados por tema, tabla de asociaciones del modelo de regresión, límites y cautelas.
- 4 referencias principales con sus fichas bibliográficas y portadas de Open Library (con alternativa textual si la cubierta no está disponible).
- Muestra no probabilística por conveniencia (N=276 válidos). La web no presenta relaciones causales; la nota editorial señala que los tamaños válidos por ítem del original requieren una revisión antes de publicación científica.
- **No se ha publicado en el repositorio el manuscrito original ni la base de datos.** La calificación 6,8/7,0 corresponde al dato compartido para el portafolio, no a un certificado adjunto al estudio.
- Datos y traducciones: `assets/tesis-datos.json`.

**Sustancia** → `/sustancia/` — [Ver en la web](https://nglmnz.github.io/portafolio/sustancia/)

- Caso de proyecto de innovación pedagógica basado en el repositorio [nglmnz/sustancia](https://github.com/nglmnz/sustancia), especialmente `index.qmd`, `piloto.qmd`, `pedagogia.qmd`, `como-funciona.qmd` y `fundamentacion.qmd`.
- Niveles interactivos de interpretación N1–N4, arquitectura propuesta, ejemplos didácticos y estado documentado de cada componente.
- Diferencia **prototipo R Shiny + web Quarto existentes** de **motor adaptativo y vector de maestría pendientes**; ningún ejemplo simulado se presenta como evaluación de aprendizaje.
- Identidad visual en azul cobalto relacionada con la web original; enlace directo al sitio y al piloto.
- Datos y traducciones: `assets/sustancia-datos.json`.

Ambas páginas comparten `assets/casos.js`, `assets/casos.css` y `assets/cases-ui.json` para la navegación y las traducciones ES/EN/PT. La navegación interna conserva el idioma por `?lang=es|en|pt`. Están enlazadas desde la portada, junto con el caso CESI. Los enlaces de libros son externos; las miniaturas se solicitan a Open Library solo al abrir la página (pueden variar según disponibilidad).

La relación editorial **tesis → Sustancia** significa que las preguntas sobre autonomía y delegación intelectual motivaron una **línea pedagógica de desarrollo**, no que la tesis validase el producto ni que Sustancia fuese una intervención de salud mental.

## CESI 2025 · Identidad y archivo institucional (actualización 2026-11-01)

La página `cesi/index.html` adopta la paleta extraída de la identidad original CESI: verde turquesa `#00C892`, menta clara `#99D7C9`, tinta oscura y blanco. Incluye:

- **19 biografías** breves ES/EN/PT en `cesi/assets/artistas.json`, con referencias y nivel de verificación para evitar atribuciones inventadas. Los perfiles se muestran en las tarjetas del lineup.
- **Misión, visión y 11 valores guía**, **10 componentes de la estructura organizativa** (dirección, comisiones y comité asesor) y **cuatro unidades patrocinadoras**, con enlaces oficiales, a partir del Informe CESI 2025, pp. 10–16.
- **Red interactiva de 57 instituciones**, transcrita del gráfico aportado `pdf_circular.pdf` y guardada en `cesi/assets/instituciones.json`. El radial animado permite identificar los nodos y se acompaña de un listado filtrable y buscador accesible.
- **Patrocinio no es afiliación de asistentes.** Los 57 nombres describen procedencia/representación institucional según el gráfico de la organización, sin suponer convenios, aportes o patrocinios.
- **Enlace directo al sitio original**: https://csociales.uahurtado.cl/cesi2025/.
- Animaciones de muy bajo impacto visual y compatibilidad con `prefers-reduced-motion`; los nombres siguen disponibles en texto, para evitar depender del color.

Las biografías marcadas como basadas en datos de la organización requieren comprobación documental adicional antes de ampliar sus afirmaciones. Los vínculos de algunos artistas son enlaces proporcionados que pueden cambiar con el tiempo.

## Publicación

- Repositorio: https://github.com/nglmnz/portafolio
- Dirección prevista (tras habilitar GitHub Pages): **https://nglmnz.github.io/portafolio/**
- CESI: https://nglmnz.github.io/portafolio/cesi/

En GitHub: **Settings → Pages → Build and deployment → Deploy from a branch → main → /(root) → Save**. Aguarda la confirmación de GitHub Pages y abre las dos direcciones desde el móvil o una ventana privada para verificarlo. Si el sistema de páginas no está activo, estos enlaces aún pueden mostrar 404.

## Funciones

- Sitio adaptable a ordenador y móvil.
- Español, inglés y portugués (selector ES / EN / PT y parámetro `?lang=es|en|pt`).
- Filtros interactivos por tipo de proyecto.
- Selector de áreas profesionales que muestra capacidades y evidencias.
- CESI: documentación histórica, resultados auditables, fuentes, galería por categorías, visor de fotos y talleres en video (carga al pulsar).
- Portada CESI preparada para la escultura *Agua, Tierra y Aire* de Eleodoro Calderón, cuando exista una fotografía con permiso y crédito.

## Estructura

```text
portafolio/
├── index.html                    # Portafolio ES/EN/PT
├── cesi/
│   ├── index.html               # Caso CESI ES/EN/PT
│   └── assets/
│       ├── fotos.json           # Manifiesto para la galería
│       ├── hero/                # Escultura e identidad visual
│       ├── branding/            # Afiches y gráficas
│       ├── programacion/        # Ponencias y paneles
│       ├── exhibicion/          # Arte
│       ├── congreso/            # Público y ambiente
│       ├── talleres/            # Talleres de corrupción e INE
│       └── equipo/              # Equipo y voluntariado
├── assets/perfil/               # Otras fotos de perfil
└── docs/GUIA_IMAGENES.md
```

Los directorios vacíos contienen un `.gitkeep`. La guía explica el flujo de selección, optimización, autoría y permisos: [docs/GUIA_IMAGENES.md](docs/GUIA_IMAGENES.md).

## Cómo agregar fotos

1. Subir fotos optimizadas a `cesi/assets/<categoria>/` usando la interfaz de GitHub.
2. Abrir `cesi/assets/fotos.json`.
3. Añadir al arreglo `photos` un objeto con `src`, `category`, `alt` y `caption` en los tres idiomas, `credit` y `permission` (ej. `"Publicación autorizada"`).
4. Confirmar los cambios. La página lee el archivo automáticamente al abrirse.

El archivo ya incluye un **ejemplo inactivo**; no basta subir la foto, hay que registrarla en el manifiesto. Las imágenes sin permiso explícito no deben publicarse.

## Migración segura desde Vitrina

El antiguo `nglmnz/vitrina-piloto/perfil/` permanece sin borrar para no romper los QR ya impresos. Tras verificar que la nueva web funciona, se puede cambiar esa ruta antigua por una página de redirección hacia el nuevo portafolio. Vitrina permanecerá como proyecto independiente.

## Fuentes y rigor

El caso CESI se basa en el informe de resultados y rendición de cuentas, y enlaza documentación institucional. Se distinguen el conteo de asistentes únicos, las 88 propuestas recibidas (80 aceptadas) y el total de recursos efectivamente ejecutados (CLP 3.448.060). Los videos de talleres y la conferencia de Daniel Chernilo están enlazados a los registros externos originales.


### Actualización: evaluación académica y contexto internacional (1 noviembre 2026)

La ruta `/tesis/` incorpora dos nuevas secciones cuyos datos están en `assets/tesis-evaluacion.json`:

- **Evaluación UAH**: Claudio Ramos Zincke (profesor guía, pauta del 15-07-2026, 7,0) y Cristóbal Bonelli (profesor informante, pauta del 21-07-2026, 6,6). La **media simple 6,8** se identifica como operación aritmética, *no como certificado de calificación final oficial*. Se presentan fortalezas y críticas metodológicas documentadas. Las pautas PDF privadas no se publican.
- **Fotografía de Claudio**: se usa una fotografía académica de la Universidad de Chile, enlazada a la fuente, donde aparece junto a otra persona. No es un retrato individual y depende de la disponibilidad de la imagen original.
- **Fotografía de Bonelli**: aún **no hay una URL directa verificada**; por tanto la tarjeta usa iniciales de identidad y un vínculo a su perfil institucional. Para sustituirla con seguridad, subir una fotografía autorizada a `assets/` y actualizar `reviewers[1].photo` (src, source, credit) en el JSON.
- **Contexto internacional**: OMS 2024, UNICEF Innocenti 2025, UNESCO GEM 2023 y OCDE 2025. Las fuentes aportan contexto externo; **no se usan como pruebas de replicación ni de causalidad**. Todos los textos están en ES/EN/PT.
- **Trayectoria intelectual**: los enlaces de Claudio incluyen el artículo de Alexis Cortés, «El relato sociológico de Claudio Ramos», *Estudios Públicos* 181 (2026), además de su libro UAH.
- **Títulos del manuscrito**: se conserva la portada «Habitus tecnológico y conexión cuerpo-mente» del archivo aportado y se deja constancia del título alternativo consignado en las dos pautas: «La compulsividad, no el tiempo: habitus tecnológico y deterioro de la salud mental en estudiantes universitarios de primer año».
