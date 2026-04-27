import { cards as CARDS } from './data/cards.js'
// Constantes y variables
const GRID_LAYOUT_STR = "GRID"
const FEED_LAYOUT_STR = "FEED"

// DOM
const CARDS_CONTAINER = document.getElementById("cards-container")
const GRID_LAYOUT_BTN = document.getElementById("button_grilla")
const FEED_LAYOUT_BTN = document.getElementById("button_feed")
const ORDER_BY_BTN = document.getElementById("orderBy")
const ORDER_BTN = document.getElementById("order")

/**
 * Crea un elemento del DOM a partir de un tag y atributos.
 * @template {keyof HTMLElementTagNameMap} T
 * @param {T} tag - Nombre del tag HTML (ej: 'div', 'img', 'button')
 * @param {Partial<HTMLElementTagNameMap[T]> & Record<string, any>} [attributes={}]
 * Objeto de configuración del elemento:
 * - Propiedades del DOM: innerText, className, textContent, value, checked, etc.
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
 * @returns {HTMLArticleElement}
 */
const createCard = (card) => {
    const { id, img, title, desc, creationDate, likes } = card
    const article = createNode('article', {
        id, className: 'card'
    })

    const imgWrapper = createNode('div', { className: 'card__media' })
    const imgElement = createNode('img', { className: 'card__image', src: img.url, alt: img.alt })
    imgWrapper.append(imgElement)


    const contentWrapper = createNode('div', { className: 'card__content' })
    const cardTitle = createNode('h2', {
        className: 'card__title',
        innerText: title
    })
    const cardDesc = createNode('p', {
        className: 'card__description',
        innerText: desc
    })
    const cardDate = createNode('time', {
        className: 'card__date',
        dateTime: creationDate,
        innerText: new Date(creationDate).toLocaleDateString()
    })

    const actionsWrapper = createNode('div', { className: 'card__actions' })
    const likesButton = createNode('button', {
        className: 'card__like-button',
        type: 'button',
        'aria-label': 'Dar me gusta',
        innerText: '🤍'
    })
    const likesCounter = createNode('span', {
        className: 'card__likes-count',
        innerText: String(likes)
    })

    const handleClick = () => {
        card.likes++
        likesCounter.innerText = String(card.likes)
    }

    likesButton.addEventListener('click', handleClick)

    actionsWrapper.append(likesButton, likesCounter)
    contentWrapper.append(cardTitle, cardDesc, cardDate, actionsWrapper)
    article.append(imgWrapper, contentWrapper)

    return article
}

/**
 * @param {Card[]} cards
 * @returns {Card[]}
 */
const orderCards = (cards) => {
    const order = ORDER_BTN.value == "ASC" ? 1 : -1
    const orderBy = ORDER_BY_BTN.value
    return cards.slice().sort((a, b) => {
        if (a[orderBy] > b[orderBy]) {
            return order;
        }
        if (a[orderBy] < b[orderBy]) {
            return -order;
        }
        return 0;
    });
}

const renderCards = () => {
    CARDS_CONTAINER.innerHTML = ''
    const cardsToRender = orderCards(CARDS)
    cardsToRender.forEach(card => {
        CARDS_CONTAINER.append(createCard(card))
    })
}

ORDER_BTN.addEventListener("change", (e) => {
    localStorage.setItem("order", e.target.value)
    renderCards();
})
ORDER_BY_BTN.addEventListener("change", (e) => {
    localStorage.setItem("orderBy", e.target.value)
    renderCards();
})

GRID_LAYOUT_BTN.addEventListener("click", () => {
    GRID_LAYOUT_BTN.classList.add('btn_active')
    FEED_LAYOUT_BTN.classList.remove('btn_active')
    CARDS_CONTAINER.className = "layout-flex__cards"
    localStorage.setItem("layoutType", GRID_LAYOUT_STR)
    renderCards()
})

FEED_LAYOUT_BTN.addEventListener("click", () => {
    GRID_LAYOUT_BTN.classList.remove('btn_active')
    FEED_LAYOUT_BTN.classList.add('btn_active')
    CARDS_CONTAINER.className = "layout-feed__cards"
    localStorage.setItem("layoutType", FEED_LAYOUT_STR)
    renderCards()
})

/**
 * Maneja el render inicial del sitio evaluando la persistencia de filtros y layout
 * @returns {void}
 */
const init = () => {
    const LAYOUT_TYPE_LS = localStorage.getItem("layoutType")
    const ORDER_BY_LS = localStorage.getItem("orderBy")
    const ORDER_LS = localStorage.getItem("order")

    if (ORDER_BY_LS) ORDER_BY_BTN.value = ORDER_BY_LS;
    if (ORDER_LS) ORDER_BTN.value = ORDER_LS;

    if (LAYOUT_TYPE_LS == GRID_LAYOUT_STR) {
        GRID_LAYOUT_BTN.click()
    } else if (LAYOUT_TYPE_LS == FEED_LAYOUT_STR) {
        FEED_LAYOUT_BTN.click()
    } else {
        // default status
        FEED_LAYOUT_BTN.classList.add('btn_active')
        renderCards()
    }
}

init()
