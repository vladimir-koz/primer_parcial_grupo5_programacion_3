# Galería de Tarjetas - Primer Parcial Grupo 5

Proyecto de galería interactiva con tarjetas con likes, ordenamiento y dos layouts diferentes (grilla y feed).

## Qué está hecho

**Estructura base (HTML + CSS)**
- Maquetado responsivo con Flexbox: 3 columnas desktop → 2 tablet → 1 mobile
- Tarjetas con imagen, título, descripción y botón de like
- CSS modular (variables, componentes separados) + sistema de 4px para spacing
- Dos layouts: grilla (Flex) y feed (por hacer)
- Botones de control: cambiar layout, ordenar por likes, ordenar por fecha

**Lo que viene (JavaScript)**
- Renderizar tarjetas desde JSON (sin tocar HTML)
- Contador de likes con click, persistencia temporal
- Ordenamiento dinámico
- Cambiar entre layouts sin recargar

## Cómo va a funcionar

En vez de hardcodear el HTML con cada tarjeta, tenemos un JSON con los datos y una función que genera el HTML. Si necesitan cambiar contenido o agregar tarjetas, es só editar JSON y el renderizador.

```js
// Estructura básica
const data = [
  { id: 1, title: "Cyberpunk", description: "...", image: "...", likes: 12 },
  // ...
]

function renderCards(cards) {
  return cards.map(card => `
    <article class="card">
      <div class="card__media">
        <img class="card__image" src="${card.image}" />
      </div>
      // ...
    </article>
  `).join('')
}
```

Ambos layouts (grilla y feed) van a usar el mismo renderizador. La diferencia va a ser el contenedor afuera y el CSS que lo acompaña. Así cualquier cambio en los datos se refleja automático en los dos.

## Estructura del proyecto

```
├── index.html          (estructura base, JS lo reemplaza)
├── css/
│   ├── style.css       (importa todo)
│   ├── variables.css   (colores, espacios, sombras)
│   ├── general.css     (resets, estilos globales)
│   └── components/
│       ├── controls.css      (botones de control)
│       ├── card-flex.css     (estilos de tarjeta)
│       └── layout-flex.css   (contenedor grilla)
├── js/
│   └── scripts.js      
└── assets/
    ├── favicon/
    └── images/
```

## Cosas importantes

- **Clases CSS**: BEM (`.card__title`, `.card__actions`, etc.) — No las cambien o rompe el renderizador
- **Espacios**: 4px base (8, 12, 16, 24, 40, 48px) — Mantener esto
- **Variables**: Todo en `variables.css` (colores, sombras, espacios)

---

## Integrantes

- Vladimir Kozik
- Conrado Lanusse
- Laureano Kronemberger
- Santino Aloisio
- Francisco Jaszczuk
