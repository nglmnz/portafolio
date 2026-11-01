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

Los perfiles institucionales externos documentan cargos y trayectorias, no prueban de manera independiente que dichas personas presentaran ponencias determinadas en ALAS. Las entrevistas no se transcriben hasta recibir grabaciones, autorizaciones y contexto.

## Fuentes / límites

`assets/alas-datos.json` contiene toda la ficha trilingüe, síntesis de ejes temáticos y siete enlaces. Los artículos sobre Sociología UC se incluyen solo como **cobertura de otra delegación**; no son un registro de la delegación UAH. Los posts de Instagram, LinkedIn y la página personal de Modonesi se conservan como enlaces facilitados con verificación parcial o pendiente, según corresponda.

## Archivo visual · primera integración de fotografías

Se confirmaron **33 imágenes** en `alas/assets/` (incluidos el afiche oficial y la imagen de portada) y se integraron al manifiesto `alas/assets/galeria.json`. La página pública presenta:

- Hero editorial con `HEAD PORTADA.JPG`, y el afiche oficial `alas flyer oficial.jpg` como material complementario.
- Galería filtrable en seis categorías: **delegación y encuentros UAH** (7), **serie documental pendiente de descripción individual** (18), **sesiones y ponencias** (2), **gráfica y materiales** (2), **portada y corresponsalía** (2) y **vida del congreso** (2).
- Carga inicial de nueve fotografías, botón «Ver más», imágenes diferidas (`loading=lazy`) y visualización ampliada.
- Descripción y texto alternativo provisional en ES/EN/PT. Las etiquetas proceden de los nombres de archivo, **no identificaciones de personas por su imagen**.

Se conservó el nombre de cada archivo. Las 18 imágenes `20260806_*` forman una serie clasificada por identificador; el prefijo **no se trata como fecha de la fotografía**, dado que el congreso fue del 26 al 31 de julio de 2026.

**Revisión pendiente:** examinar individualmente las fotografías de mayor tamaño (varias entre 1,5 y 3,2 MB, con previsualización limitada), darles un pie de foto específico y verificar los créditos de fotógrafos/as y autorizaciones de terceros. Para mejorar rendimiento, crear versiones WebP optimizadas antes de convertir esta selección en una galería definitiva.

## Entrevista a Breno Bringel · por editar

El corresponsal reporta una entrevista grabada con **Breno Bringel** y un audio externo de mejor calidad, grabado cerca de su voz. La página presenta una ficha **«grabación realizada · edición de audio pendiente»**, sin reproducir aún el material ni citar declaraciones no verificadas.

El archivo original de video pesa aproximadamente 350 MB y **no debe subirse al repositorio de GitHub Pages**. El flujo recomendado es:
1. Conservar video y audio originales localmente.
2. Sincronizar mediante las formas de onda de audio en un editor como Shotcut o mediante FFmpeg con el desfase calculado.
3. Silenciar el audio de cámara y reemplazarlo por el audio cercano; comprobar lipsync al inicio, medio y final.
4. Crear un master con video sin recomprimir y audio AAC, luego una versión web y subtítulos con créditos.
5. Publicar en una plataforma apropiada únicamente después de verificar permisos y edición; incorporar después el enlace a `alas/assets/galeria.json` o el dato editorial de la entrevista.

No se han subido ni sincronizado los dos originales de la entrevista.


Código: `assets/experiencias.js` y `assets/experiencias.css` (compartidos con cine); entrada `alas/index.html`.
