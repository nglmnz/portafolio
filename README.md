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
- Distingue **explorador interactivo del vector de maestría ya existente (dos perfiles simulados, t0/t2)** de la **estimación longitudinal operativa aún no implementada**. El vector contempla seis dimensiones; el radar de ejemplo grafica siete operaciones, mientras el marco conceptual identifica ocho familias.
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

### Estado y mapa documental de Sustancia (noviembre 2026)

Esta revisión sustituye la presentación centrada exclusivamente en la rúbrica N1–N4. Se relevaron las **siete páginas actualmente documentadas** de la web de Sustancia, el JavaScript del simulador y el código del prototipo accesible por enlace:

| Página de origen | Qué incorpora ahora el portafolio |
|---|---|
| `index.qmd` | Propósito, comparación N1/N3, cuatro contextos de simulación, estado y ciclo de aprendizaje. |
| `fundamentacion.qmd` | Bourdieu, Simondon y la decisión entre arquitectura delegativa e incorporativa. |
| `pedagogia.qmd` | Seis dimensiones del vector, ocho familias de operaciones, N1–N4, taxonomía de errores y preguntas epistemológicas. |
| `como-funciona.qmd` | Siete fases proyectadas desde diagnóstico a nuevo desafío; responsabilidad de estudiantes, docentes, agentes y motor. |
| `universidades.qmd` | Estadística I, cinco módulos curriculares y tres perspectivas institucionales: estudiante, docente, universidad. |
| `equipo.qmd` | Origen, equipo interdisciplinario y preguntas de investigación sobre error y revisión. |
| `piloto.qmd` | Enlace al Shiny experimental (reproductor incrustado; funcionamiento depende de alojamiento). |
| `assets/sustancia-interactions.js` | Datos exactos del radar interactivo: perfiles A/B, momento inicial t0 y escenario hipotético t2; secuencias de cuatro contextos. |

**Evidencia existente:** web Quarto, piloto R Shiny, explorador interactivo del vector con siete operaciones, selector de seis dimensiones, ejemplos de revisión y modelos conceptuales. **Pendientes de implementar y evaluar:** diagnóstico basado en estudiantes reales, vector longitudinal calibrado, banco curricular conectado a motor adaptativo, selección de actividades por evidencia y paneles docentes. El perfil mostrado es ficticio y no mide resultados educativos.

El caso se sirve en los idiomas ES, EN y PT mediante `assets/sustancia-datos.json` y `assets/casos.js`. Todas las traducciones del portafolio son síntesis editoriales de los textos fuente; la disponibilidad de páginas en otros idiomas dentro del proyecto original depende de ese repositorio.


## Actualización editorial CESI + investigación aplicada en Pedagogías UAH — noviembre de 2026

### CESI: portada separada de la fotografía

Se eligió la **opción B**: primero se lee el texto de presentación del proyecto, luego, al desplazarse, aparece una sección fotográfica independiente con la imagen de la escultura. La fotografía no compite con el título inicial y la sección incluye selector de imágenes, crédito y una transición de aparición respetuosa con las preferencias de movimiento reducido. Se actualizó `cesi/index.html` sin eliminar contenidos ni el vínculo al sitio original UAH. Todos los textos añadidos tienen ES/EN/PT.

### Caso: Mediación digital e IA en la formación inicial docente

Ruta: [`/pedagogias/`](https://nglmnz.github.io/portafolio/pedagogias/).

- **Fuente principal:** `Informe_v8(5).docx`, proporcionado por el investigador; septiembre de 2026; 190 cuestionarios válidos, seis carreras, 49 preguntas, aplicación presencial entre junio y septiembre.
- **Origen del encargo:** conexión con el seminario de grado, solicitud de ampliación de la decanatura y apoyo logístico de la Facultad. La cronología resume documentalmente esa solicitud y la coordinación, sin publicar citas textuales de la correspondencia ni los correos originales.
- **Comisión IA:** se distingue la propuesta del acta de junio (tres momentos formativos, ética e inclusión) del informe entregado en septiembre. La documentación no acredita la adopción formal de política institucional.
- **Proceso técnico:** facsímil impreso, ingreso codificado con R Shiny, base Google Sheets, visor de consistencia, limpieza y armonización Android/iOS, cinco escalas con alfa crudo y ordinal y redacción del informe.
- **Resultados:** explorador de cinco bloques con porcentajes por ítem; media de pantalla 6,23 horas/día; herramientas IA; diferencias muestrales entre carreras; líneas sugeridas para formación docente.
- **Visualización:** figuras reconstruidas con HTML/CSS desde los datos publicados en el texto del informe, con etiquetas y porcentajes que no dependen solamente del color. Identidad azul marino, blanco y turquesa inspirada en el informe; vínculo al sitio UAH y su Facultad de Educación. No se presentan como reproducciones literales de figuras originales.
- **Procedencia y límites:** muestreo no probabilístico, datos parcialmente autorreportados, estudio transversal, denominadores variables; no inferir causalidad o prevalencia poblacional. El conjunto de 190 es diferente de los 276 del seminario y no deben sumarse.
- **Equipo:** nombres acreditados en el informe separados de Karla Medina, cuya colaboración fue mencionada directamente por el autor y no figura en los agradecimientos del documento.
- **Foto de reunión:** el archivo `pedagogias/assets/comision-ia.webp` está incorporado a la página con pie de foto, contexto y crédito de archivo. Siguen pendientes los datos de autoría fotográfica y autorización de difusión.

Archivos: `assets/pedagogias-datos.json` (datos), `assets/pedagogias.js` (interactividad y traducciones ES/EN/PT), `assets/pedagogias.css` (estilos), `pedagogias/index.html` (entrada), `pedagogias/assets/README.md` (guía visual).

### Mejora de escalas y fotografía de la comisión · 1 noviembre 2026

Se retiraron las dos citas textuales de correos privados que aparecían destacadas en la sección de origen (la cronología documentada permanece). El apartado de cinco escalas ahora explica para público no especialista el fenómeno que observa cada eje, ofrece una situación cotidiana, una cifra ilustrativa extraída del informe y una implicación docente; las métricas alfa se conservan en desplegables opcionales. Se aclara que los porcentajes se refieren a **ítems individuales** y no son prevalencias de una escala, que los resultados no acreditan causalidad y que el indicador de rechazo al reemplazo docente se analiza por separado de la escala de aceptación.

Se confirmó la imagen subida por el autor a `pedagogias/assets/comision-ia.webp`; la interfaz le asigna pie de foto e identificación del archivo del proyecto sin atribuir nombres por apariencia. Procedencia: informe de septiembre de 2026 y documentación de trabajo proporcionada por el autor.

## FONDECYT Regular 1220508 · Hilvanar (2025–2026)

- **Ruta:** [`/fondecyt/`](https://nglmnz.github.io/portafolio/fondecyt/), enlazada desde el cargo de **colaborador externo** en la sección de experiencia.
- **Objeto de la investigación:** violencia de género en relaciones de (ex)pareja desde una perspectiva interseccional, atendiendo a experiencias de agencia y resistencia en Valparaíso y Santiago. Proyecto científico ANID/FONDECYT Regular 1220508 (2022–2026), liderado por Macarena Trujillo Cristoffanini (UPLA).
- **Exposición:** «Hilvanar: contar, narrar, resistir», UPLA, 15 de abril al 15 de mayo de 2026; curaduría documentada de Macarena Trujillo. Hilos editoriales: cartografía del femicidio y memoria, fotografía participativa, relatos y sonidos, cartografías corporales. La segmentación en cuatro hilos es una **síntesis editorial para la web**, no una afirmación de que la muestra tuviese exactamente cuatro salas con esa nomenclatura.
- **Proyección:** seminario en la UAB, 12 de junio de 2026, presentado por la investigadora principal, sin atribuir al autor del portafolio esa presentación.
- **Participación personal:** colaborador externo (2025–2026); según el testimonio directo del autor, realizó la mediación de una actividad pública vinculada a Hilvanar en UPLA y explicó el apartado de metodologías del proyecto FONDECYT 1220508. No se le atribuyen responsabilidades científicas o curatoriales ajenas.
- **Archivos:** `assets/fondecyt-datos.json`, `assets/fondecyt.js`, `assets/fondecyt.css`, `fondecyt/index.html` y `fondecyt/assets/galeria.json`.
- **Fuentes:** 13 enlaces entre proyecto, UPLA, UPLA TV, Universidades Estatales, UAB y materiales adicionales. Un campo `verified` distingue las fuentes revisadas del material facilitado sin cotejo independiente (ciertos reels, un blog y un video de YouTube).
- **Galería:** 67 imágenes aportadas a `fondecyt/assets/`, de las cuales 27 se distribuyen por auditorio, mediación personal, recorrido y exposición; otras 40 permanecen no publicadas a la espera de revisión de materiales con testimonios o mensajes personales. Tres fotografías específicas del auditorio integran el hero; hay sección destacada de mediación de metodologías y galería accesible con filtros, paginación y ampliación. El manifiesto `fondecyt/assets/galeria.json` conserva categorías, descripciones trilingües y notas de atribución; permisos de terceros por verificar.
- **Identidad:** diseño editorial propio basado en hilos abstractos CSS; no copia ni presupone la autoría o derechos sobre fotografías, obras o materiales generados por participantes de investigación.

## FONDECYT Chile–España y CEDEUS · noviembre 2026

### FONDECYT Regular 1220508 · Chile → España

El caso `/fondecyt/` incluye un nuevo bloque de **circulación internacional Chile–España**. La investigación y la exposición Hilvanar se desarrollaron en Chile, y la investigadora principal **Macarena Trujillo Cristoffanini** presentó las metodologías feministas visuales y participativas en la Universitat Autònoma de Barcelona, el **12 de junio de 2026**. La UAB publicó su crónica el 16 de junio. El encabezado se reforzó con una etiqueta Chile → España. El sitio distingue difusión internacional de un convenio de financiamiento binacional, que no se encuentra documentado. Se añadió contexto de la trayectoria académica de la investigadora (doctorado en Barcelona y Senior Fellow CALAS 2025 según su perfil profesional público), además de un enlace CALAS aportado por el usuario cuya página no fue accesible para comprobación directa.

Referencia: https://webs.uab.cat/geografia-genere/es/2026/06/16/seminario-sobre-violencias-de-genero-espacio-y-resistencias-cotidianas-con-macarena-trujillo-cristoffanini/

### CEDEUS / UC · Encuestador en terreno (2024)

- **Nueva ruta:** `/cedeus/`, enlazada desde la experiencia profesional del portafolio.
- **Investigación específica:** estudio doctoral de Emilio Berríos Álvarez, «Rol de espacios colectivos en la cohesión social urbana: aproximación multiescalar en el Gran Santiago», acreditado por CEDEUS en agosto de 2024.
- **Participación declarada:** encuestas presenciales, recolección, verificación, control de calidad y preparación de respuestas entre mayo y agosto de 2024. Comunas citadas: Recoleta, Independencia, Las Condes, Providencia, Santiago Centro, Maipú, Estación Central y Ñuñoa. No se inventan recuentos ni resultados del estudio.
- **Presentación didáctica:** cuatro lentes conceptuales de sociabilidad, pertenencia, escalas y desigualdad, diferenciadas de variables observadas y resultados efectivos.
- **Contexto de política pública:** se refiere por separado a la presentación en enero de 2026 de **otro** estudio sobre pobreza de transporte, llevado por Ignacio Tiznado-Aitken. Juan Carlos Muñoz, ministro de Transportes en ese momento, participó como comentarista en Santiago. No se atribuyen los resultados ni el estudio de 2026 al encuestador del proyecto 2024, y no se afirma que se haya aprobado política gubernamental como consecuencia directa.
- **Archivos:** `cedeus/index.html`, `cedeus/README.md`, `assets/cedeus-datos.json`, `assets/cedeus.js`, `assets/cedeus.css`.
- **Idiomas:** español, inglés y portugués. Visualización abstracta de red urbana, sin fingir coordenadas ni puntos muestrales reales.

Fuentes originales: https://www.cedeus.cl/blog/2024/08/23/conoce-los-trabajos-de-tesistas-y-investigadores-postdoctorales-de-cedeus/ ; https://redeus.org/el-rol-de-los-espacios-colectivos-en-la-cohesion-social-urbana-aproximacion-multiescalar-en-el-gran-santiago/ ; https://www.cedeus.cl/pobreza-de-transporte-una-brecha-pendiente-que-chile-debe-disminuir/ .

## Correspondencia ALAS 2026 y cine UAH (2022 y 2025)

Se publicaron dos nuevas experiencias, cada una con página propia, diseño adaptable e idiomas ES/EN/PT. Ambas tienen galerías vacías preparadas para cargar fotografías posteriores mediante manifiestos JSON con descripciones, autorías y permisos.

### `/alas/` — corresponsal institucional en Río de Janeiro

- Contexto: XXXV Congreso Latinoamericano de Sociología, 26–31 de julio de 2026, sedes UFRJ y UNIRIO, tema «Entre la policrisis y las alternativas: horizontes de la sociología crítica latinoamericana». Se documentan 27 grupos de trabajo y la conmemoración de 75 años de ALAS, según CLACSO y fuentes oficiales.
- Labor personal **informada directamente por el autor**: cobertura de la delegación del Departamento de Sociología UAH mediante entrevistas, fotografía, contenidos audiovisuales y escritos.
- Personas de la delegación UAH según el autor: Nicolás Fleet, Gabriela Mardones, Alexis Cortés, Kenneth Fowler y Juan Pablo Rodríguez. Los perfiles públicos acreditan formación/cargos institucionales; **no se fabrican títulos de ponencias o citas de entrevistas**.
- La noticia del Instituto de Sociología UC es una fuente de contexto, correspondiente a **otra delegación académica**, y no una confirmación de las ponencias UAH. Enlaces a Instagram, LinkedIn y blog de Modonesi se conservan con grados de verificación indicados.
- Archivos: `alas/index.html`, `alas/README.md`, `alas/assets/galeria.json`, `assets/alas-datos.json`.
- Fotografías pendientes: subir a `alas/assets/`, luego agregar registros y créditos al manifiesto.

### `/cine-disidencias/` — proyecciones, conversación y mediación cultural

- Jornada 2022: proyección de *Naomi Campbel* (2013, Camila José Donoso y Nicolás Videla), encuentro con Paula Dinamarca y alrededor de 50 asistentes (según relato del organizador).
- Jornada 2025: proyección de *Las criaturas que se derriten bajo el sol* (cortometraje de **2022** de Diego Céspedes), conversación con Paula Dinamarca y colaboración de Fundación Poderes, Sindicato Amanda Jofré y Quijote Films, según relato del organizador.
- **Premios correctamente diferenciados:** *La misteriosa mirada del flamenco* (largometraje de 2025 de Diego Céspedes, con Paula Dinamarca en el elenco) ganó el Premio Un Certain Regard de Cannes 2025; no fue un premio individual a la actriz, ni al cortometraje exhibido en la UAH.
- Se mantienen la fecha exacta de las jornadas UAH, autorías de fotografías y evidencia de participación de organizaciones como detalles a completar. No se inventan entrevistas ni citas.
- Archivos: `cine-disidencias/index.html`, `cine-disidencias/README.md`, `cine-disidencias/assets/galeria.json`, `assets/cine-disidencias-datos.json`.
- Fotografías pendientes: subir a `cine-disidencias/assets/` y actualizar el manifiesto por año, película y actividad.

**Interfaz compartida:** `assets/experiencias.js` y `assets/experiencias.css`. La portada del portafolio enlaza ambos casos en la sección de trayectoria.

Fuentes principales: https://www.clacso.org/xxxv-congreso-latinoamericano-de-sociologia/ ; https://sociologia.uc.cl/noticias/alas-2026/ ; https://www.retinalatina.org/peliculas/naomi-campbel/ ; https://www.semainedelacritique.com/en/edition/2022/movie/las-criaturas-que-se-derriten-bajo-el-sol ; https://www.festival-cannes.com/en/f/la-misteriosa-mirada-del-flamenco/ .
