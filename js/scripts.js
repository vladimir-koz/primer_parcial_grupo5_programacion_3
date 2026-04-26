<<<<<<< HEAD

=======
import { cards } from './data/cards.js'
>>>>>>> deabe83bda313093738c36fdef555b98ab719cd8
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

/** @type {Card} */
<<<<<<< HEAD
const mockCard = {
    id: '1',
    img: { url: './assets/images/gatito-arte-cyberpunk.webp', alt: 'Realistic art' },
    title: 'Cyberpunk',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    creationDate: '2026-04-19',
    likes: 28
}
=======
const mockCards = [
    {
        id: '1',
        img: { url: './assets/images/gatito-arte-cyberpunk.webp', alt: 'Cyberpunk art' },
        title: 'Cyberpunk',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        creationDate: '2026-04-15',
        likes: 12
    },
];
>>>>>>> deabe83bda313093738c36fdef555b98ab719cd8


/**
 * Crea un elemento del DOM a partir de un tag y atributos.
 * @template {keyof HTMLElementTagNameMap} T
 * @param {T} tag - Nombre del tag HTML (ej: 'div', 'img', 'button')
 * @param {Partial<HTMLElementTagNameMap[T]> & Record<string, any>} [attributes={}]
 * Objeto de configuración del elemento:
 * - Propiedades del DOM: innerText, textContent, value, checked, etc.
 * - Atributos HTML: aria-*, data-*, id, class, etc.
 * @returns {HTMLElementTagNameMap[T]} Elemento HTML creado
 * @example
 * const img = createNodeElement('img', {
 *   src: '/img.png',
 *   alt: 'preview'
 * })
 */
const createNode = (tag, attributes = {}) => {
    const element = document.createElement(tag)

    Object.entries(attributes).forEach(([key, value]) => {
        if (key in element) {
            element[key] = value
        } else {
            element.setAttribute(key, String(value))
        }
    })

    return element
}

/**
 * Crea una tarjeta (article) con contenido y botón de likes.
 * @param {Card} card
 * Objeto tipo tarjeta:
 * - { id, img, title, desc, creationDate, likes }
 * @param {HTMLElement} node
 * Nodo HTML donde renderizar la tarjeta creada.
 * @returns {void} 
 */
<<<<<<< HEAD
const renderCard = (card, node) => {
    const { id, img, title, desc, creationDate, likes } = card
    const article = createNode('article', {
        id, class: 'card'
    })

    const imgWrapper = createNode('div', { class: 'card__media' })
    const imgElement = createNode('img', { class: 'card__image', src: img.url, alt: img.alt })
    imgWrapper.append(imgElement)


    const contentWrapper = createNode('div', { class: 'card__content' })
    const cardTitle = createNode('h2', {
        class: 'card__title',
        innerText: title
    })
    const cardDesc = createNode('p', {
        class: 'card__description',
        innerText: desc
    })
    const cardDate = createNode('time', {
        class: 'card__date',
        dateTime: creationDate,
        innerText: new Date(creationDate).toLocaleDateString()
    })

    const actionsWrapper = createNode('div', { class: 'card__actions' })
    const likesButton = createNode('button', {
        class: 'card__like-button',
        type: 'button',
        'aria-label': 'Dar me gusta',
        innerText: '🤍'
    })
    const likesCounter = createNode('span', {
        class: 'card__likes-count',
        innerText: likes
    })

    const handleClick = () => {
        card.likes++
        likesCounter.innerText = card.likes
    }

    likesButton.addEventListener('click', handleClick)

    actionsWrapper.append(likesButton, likesCounter)
    contentWrapper.append(cardTitle, cardDesc, cardDate, actionsWrapper)
    article.append(imgWrapper, contentWrapper)

    node.appendChild(article)
}

const CARDS_CONTAINER = document.getElementById('cards-container')

renderCard(mockCard, CARDS_CONTAINER)
=======
const renderCards = () => {

    const node = document.getElementById('cards-container')
    node.innerHTML = ""
    let cards = orderedCards() 

    cards.forEach(card => {
        const { id, img, title, desc, creationDate, likes } = card
        const article = createNode('article', {
            id, class: 'card'
        })

        const imgWrapper = createNode('div', { class: 'card__media' })
        const imgElement = createNode('img', { class: 'card__image', src: img.url, alt: img.alt })
        imgWrapper.append(imgElement)


        const contentWrapper = createNode('div', { class: 'card__content' })
        const cardTitle = createNode('h2', {
            class: 'card__title',
            innerText: title
        })
        const cardDesc = createNode('p', {
            class: 'card__description',
            innerText: desc
        })
        const cardDate = createNode('time', {
            class: 'card__date',
            dateTime: creationDate,
            innerText: new Date(creationDate).toLocaleDateString()
        })

        const actionsWrapper = createNode('div', { class: 'card__actions' })
        const likesButton = createNode('button', {
            class: 'card__like-button',
            type: 'button',
            'aria-label': 'Dar me gusta',
            innerText: '🤍'
        })
        const likesCounter = createNode('span', {
            class: 'card__likes-count',
            innerText: likes
        })

        const handleClick = () => {
            card.likes++
            likesCounter.innerText = card.likes
        }

        likesButton.addEventListener('click', handleClick)

        actionsWrapper.append(likesButton, likesCounter)
        contentWrapper.append(cardTitle, cardDesc, cardDate, actionsWrapper)
        article.append(imgWrapper, contentWrapper)

        node.appendChild(article)
    })
}

function orderedCards () {

    let order = document.getElementById("order").value == "ASC" ? 1 : -1
    let orderBy = document.getElementById("orderBy").value
    return cards.sort((a, b) => {
        if (a[orderBy] > b[orderBy]) {
                return 1 * order;
            }
            if (a[orderBy] < b[orderBy]) {
                return -1 * order;
            }
            return 0;
        });
}
        
renderCards()

document.getElementById("order").addEventListener("change", renderCards)
document.getElementById("orderBy").addEventListener("change", renderCards)

document.getElementById("button_grilla").addEventListener("click", () => {
    document.getElementById("cards-container").className = "layout-flex__cards"
})

document.getElementById("button_feed").addEventListener("click", () => {
    document.getElementById("cards-container").className = "layout-feed__cards"
})

const renderContent = (cards, node) => {
    node.innerHTML= ''

    cards.forEach ((card) => {
        renderCard(card,node)
    })
}
>>>>>>> deabe83bda313093738c36fdef555b98ab719cd8
