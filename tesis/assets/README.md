# Recursos visuales de la tesis · Habitus tecnológico

Estas fotografías fueron aportadas al repositorio por el responsable del portafolio y se trasladaron a subcarpetas sin modificar sus bytes (Git mueve los objetos mediante sus SHA).

## Secuencia fotográfica

`secuencia/DSC_0022.JPG` → fotograma 01  
`secuencia/DSC_0023.JPG` → fotograma 02  
`secuencia/DSC_0024.JPG` → fotograma 03  
`secuencia/DSC_0025.JPG` → fotograma 04  
`secuencia/DSC_0026.JPG` → fotograma 05  

La página `/tesis/` los usa en ese orden, con cortes propios de una secuencia stop motion (no se interpola ni inventan fotogramas). La portada emplea el primero como fondo editorial.

**Este material visual es ilustrativo y no constituye una visualización de datos empíricos.** El autor/título/derechos de la obra numérica, así como los créditos de fotografía, deben documentarse antes de presentarlo como una obra de autoría identificada.

## Retratos académicos

- `revisores/ramos_claudio.jpg` — fotografía de Claudio Ramos Zincke, cuyo original fue facilitado por el usuario desde DEMRE: https://demre.cl/images/noticias-361-claudio-ramos-uah-entrevista.jpg
- `revisores/bonelli.jpg` — fotografía de Cristóbal Bonelli, cuyo original fue facilitado por el usuario desde ICSOH-UDP: https://icsoh.udp.cl/cms/wp-content/uploads/2025/04/CRISTOBAL-BONELLI-UDP-scaled.jpg

El archivo `/assets/tesis-evaluacion.json` conserva el enlace institucional de cada académico y atribuye la fuente de su retrato. Alojar copias facilita la carga, pero **no sustituye el permiso de reutilización de terceros**.

## Comportamiento accesible

- Al llegar a la secuencia, la web inicia un bucle de cinco fotogramas si no se ha solicitado reducir el movimiento ni ahorrar datos.
- Se detiene cuando la sección deja de verse o la pestaña se oculta.
- Hay controles para **pausar/reproducir**, avanzar/retroceder, escoger fotograma y cambiar entre ritmo contemplativo/dinámico.
- La animación utiliza los JPEG originales, que suman ~12,6 MB. El hero usa el primero; las otras cuatro imágenes se solicitan conforme avanza la secuencia. Para optimizar más adelante, conviene convertir copias de presentación a WebP manteniendo los JPG originales para archivo.

## Archivos de la aplicación

- `/assets/casos.js`: lógica de secuencia y renderizado trilingüe.
- `/assets/casos.css`: estilos visuales, fondo de hero y controles.
- `/assets/tesis-evaluacion.json`: información y fuentes de los retratos.

## Revisión final deseable

Comprobar personalmente encuadre, secuenciación y autoría; la revisión automática comprobó estructura y rutas, pero no pudo visualizar en detalle las cinco fotografías binarias del repositorio.
