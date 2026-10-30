# Portafolio profesional | Ángel Muñoz Rañiman

Portafolio independiente de **Vitrina**, orientado a oportunidades de prácticas, investigación aplicada, análisis de datos, sostenibilidad e innovación en Bilbao/Euskadi.

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
