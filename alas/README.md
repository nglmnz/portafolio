# ALAS 2026 · Corresponsalía institucional UAH

Sitio: https://nglmnz.github.io/portafolio/alas/

## Alcance

Entre el **26 y el 31 de julio de 2026**, en Río de Janeiro, se realizó el **XXXV Congreso Latinoamericano de Sociología**, bajo el lema «Entre la policrisis y las alternativas: horizontes de la sociología crítica latinoamericana». La convocatoria estuvo respaldada por la Asociación Latinoamericana de Sociología (ALAS), la Sociedade Brasileira de Sociologia, CLACSO, ISA e International Science Council. La programación incluyó **27 grupos de trabajo**, mesas redondas, diálogos magistrales, foros y actividades culturales, en la UFRJ y la UNIRIO (campus Praia Vermelha). Fuente: https://www.clacso.org/xxxv-congreso-latinoamericano-de-sociologia/ .

## Participación del autor

Rol declarado: **corresponsal institucional del Departamento de Sociología UAH**. Actividades: entrevistas, fotografías, contenido audiovisual y redacción de comunicación científica sobre la delegación UAH. Personas mencionadas directamente por el autor:

- Nicolás Fleet Oyarce, decano de Facultad de Ciencias Sociales UAH en 2026.
- Gabriela Mardones, tesista de pregrado; ponencia aún no identificada.
- Alexis Cortés, académico, director del Doctorado en Sociología UAH.
- Kenneth Fowler, doctorando en Sociología UAH; tema específico de su presentación en ALAS no acreditado.
- Juan Pablo Rodríguez, director Departamento de Sociología UAH.

Los perfiles institucionales externos documentan cargos y trayectorias. **La crónica original de Ángel Muñoz preparada para Sociología UAH aporta** los títulos de las ponencias de Juan Pablo Rodríguez, Nicolás Fleet y Gabriela Mardones, así como una síntesis de la conversación con Breno Bringel; se identifican como contenido de un borrador periodístico aportado por el autor y no como verificación independiente del programa académico. Las frases textuales de entrevistas deben cotejarse con grabaciones antes de su reproducción.

## Crónica original del corresponsal · nueva base editorial

Se ha incorporado la nota original de **13 páginas** enviada por el autor: «XXXV Congreso de la Asociación Latino Americana de Sociología (ALAS) 2026: Río de Janeiro fue el epicentro de la sociología latinoamericana y Sociología UAH estuvo presente». Termina con la autoría **«Informó desde Río de Janeiro: Ángel Muñoz»** y referencia de edición al Departamento de Comunicaciones UAH. Que haya sido preparada para comunicaciones no prueba su publicación oficial.

Las síntesis de la página incluyen:

- **Juan Pablo Rodríguez** (29 julio, Sesión 13, Sala 111 UFRJ/ECO): «¿Cooptación o estrategia? Institucionalización de movimientos sociales en Chile (2020–2026)»; discusión sobre movimientos sociales y Estado.
- **Nicolás Fleet** (31 julio, Sesión 29): «Nuevos profesionalismos y tecnocracias postneoliberales: articulación, conocimiento y capacidad estatal en el gobierno de Boric en Chile».
- **Gabriela Mardones** (Sesión 33): «Cuando el movimiento feminista no representa: jóvenes electoras de la nueva derecha en las elecciones presidenciales de 2025 en Chile», investigación cualitativa guiada por Alexis Cortés, con **15 entrevistas semiestructuradas a mujeres de 18–28 años** según el borrador. Se evita atribuir generalizabilidad a la muestra.
- **Breno Bringel:** la nota relata una conversación sobre policrisis, sociología latinoamericana y giro ecoterritorial. La entrevista tiene video y audio externo aún sin sincronizar. **No se han reproducido citas directas en el portafolio hasta cotejarlas con el registro audiovisual**.

El JSON `assets/alas-datos.json` incluye `reportage`, su atribución, las tres fichas y una síntesis de Bringel. Los temas y métodos consignados proceden de **la nota aportada**, no de una revisión independiente de las grabaciones.

## Fuentes / límites

`assets/alas-datos.json` contiene toda la ficha trilingüe, síntesis de ejes temáticos y siete enlaces. Los artículos sobre Sociología UC se incluyen solo como **cobertura de otra delegación**; no son un registro de la delegación UAH. Los posts de Instagram, LinkedIn y la página personal de Modonesi se conservan como enlaces facilitados con verificación parcial o pendiente, según corresponda.

## Archivo visual · primera integración de fotografías

Se confirmaron **33 imágenes** en `alas/assets/` (incluidos el afiche oficial y la imagen de portada) y se integraron al manifiesto `alas/assets/galeria.json`. La página pública presenta:

- Hero editorial restaurado con líneas multicolor abstractas. Las fotografías ya no forman parte del encabezado: se distribuyen en una secuencia editorial interna y en la galería. Los archivos `HEAD PORTADA.JPG` y `alas flyer oficial.jpg` se conservan en el archivo fotográfico.
- Galería filtrable en seis categorías: **delegación y encuentros UAH** (7), **serie documental pendiente de descripción individual** (18), **sesiones y ponencias** (2), **gráfica y materiales** (2), **portada y corresponsalía** (2) y **vida del congreso** (2).
- Carga inicial de nueve fotografías, botón «Ver más», imágenes diferidas (`loading=lazy`) y visualización ampliada.
- Descripción y texto alternativo provisional en ES/EN/PT. Las etiquetas proceden de los nombres de archivo, **no identificaciones de personas por su imagen**.

Se conservó el nombre de cada archivo. Las 18 imágenes `20260806_*` forman una serie clasificada por identificador; el prefijo **no se trata como fecha de la fotografía**, dado que el congreso fue del 26 al 31 de julio de 2026.

**Revisión pendiente:** examinar individualmente las fotografías de mayor tamaño (varias entre 1,5 y 3,2 MB, con previsualización limitada), darles un pie de foto específico y verificar los créditos de fotógrafos/as y autorizaciones de terceros. Para mejorar rendimiento, crear versiones WebP optimizadas antes de convertir esta selección en una galería definitiva.

## Entrevista a Breno Bringel · por editar

El corresponsal ya publicó un **video corto de la entrevista a Breno Bringel** en [YouTube Shorts](https://www.youtube.com/shorts/yuRdUqAh87I). Se integró a la página mediante un reproductor en formato vertical y dominio `youtube-nocookie.com`, que solo se carga después de una acción explícita del visitante. Se conserva un enlace directo alternativo. Las citas del reportaje deben seguir cotejándose con las grabaciones completas antes de reproducirse como transcripciones verificadas.

El archivo original de video pesa aproximadamente 350 MB y **no debe subirse al repositorio de GitHub Pages**. El flujo recomendado es:
1. Conservar video y audio originales localmente.
2. Sincronizar mediante las formas de onda de audio en un editor como Shotcut o mediante FFmpeg con el desfase calculado.
3. Silenciar el audio de cámara y reemplazarlo por el audio cercano; comprobar lipsync al inicio, medio y final.
4. Crear un master con video sin recomprimir y audio AAC, luego una versión web y subtítulos con créditos.
5. Publicar en una plataforma apropiada únicamente después de verificar permisos y edición; incorporar después el enlace a `alas/assets/galeria.json` o el dato editorial de la entrevista.

No se han subido ni sincronizado los dos originales de la entrevista.


Código: `assets/experiencias.js` y `assets/experiencias.css` (compartidos con cine); entrada `alas/index.html`.

## Rediseño visual del hero y ubicación del reportaje fotográfico (noviembre 2026)

Se restauró la composición abstracta **ALAS / 75** con cuatro líneas multicolor del hero inicial, con texto e identidad visual independientes del archivo fotográfico. Las fotos se trasladaron a la sección «Del debate académico al encuentro», donde aparecen en una composición editorial de tres fotografías y luego la galería filtrable de 33 archivos, que mantiene carga gradual y fotos ampliables. Los archivos originales no fueron eliminados ni renombrados. La página sigue siendo trilingüe.

## Video publicado de Breno Bringel · 2 noviembre 2026

El video corto proporcionado por el autor está en https://www.youtube.com/shorts/yuRdUqAh87I y se muestra en la sección «Breno Bringel: policrisis y giro ecoterritorial» mediante un reproductor vertical de YouTube en modo de privacidad mejorada. La conexión con YouTube se realiza únicamente cuando el visitante pulsa «Reproducir», y existe enlace directo al video. No se presenta como transcripción completa ni se atribuyen citas no cotejadas. Fuente de URL: corresponsal.
