/**
 * @typedef {Object} CardImage
 * @property {string} url - URL de la imagen
 * @property {string} alt - Texto alternativo (accesibilidad)
 * @typedef {Object} Card
 * @property {string} id
 * @property {CardImage} img - Información de la imagen
 * @property {string} title
 * @property {string} desc
 * @property {string} creationDate - Fecha en formato ISO (YYYY-MM-DD)
 * @property {number} likes
 */

/** @type {Card[]} */
export const cards = [
    {
        id: '1',
        img: { url: './assets/images/gatito-arte-cyberpunk.webp', alt: 'Cyberpunk art' },
        title: 'Cyberpunk',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        creationDate: '2026-04-15',
        likes: 12
    },
    {
        id: '2',
        img: { url: './assets/images/gatito-arte-realista.png', alt: 'Realistic art' },
        title: 'Realista',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        creationDate: '2026-04-16',
        likes: 28
    },
    {
        id: '3',
        img: { url: './assets/images/gattit-arte-pixelart.webp', alt: 'Pixel art' },
        title: 'Pixel Art',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        creationDate: '2026-04-17',
        likes: 7
    },
    {
        id: '4',
        img: { url: './assets/images/gatito-arte-minimalista.png', alt: 'Minimalist art' },
        title: 'Minimalista',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        creationDate: '2026-04-18',
        likes: 7
    },
    {
        id: '5',
        img: { url: './assets/images/gatita-arte-cartoon.webp', alt: 'Cartoon art' },
        title: 'Cartoon',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        creationDate: '2026-04-19',
        likes: 7
    },
    {
        id: '6',
        img: { url: './assets/images/gatito-arte-retro.png', alt: 'Retro art' },
        title: 'Retro',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        creationDate: '2026-04-20',
        likes: 7
    },
]