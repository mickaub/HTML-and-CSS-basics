const cardArray = [
    {
        name: 'dog',
        img: 'images/dog.png'
    },
    {
        name: 'donut',
        img: 'images/donut.png'
    },
    {
        name: 'fish',
        img: 'images/fish.png'
    },
    {
        name: 'flower',
        img: 'images/flower.png'
    },
    {
        name: 'house',
        img: 'images/house.png'
    },
    {
        name: 'tree',
        img: 'images/tree.png'
    },
    {
        name: 'dog',
        img: 'images/dog.png'
    },
    {
        name: 'donut',
        img: 'images/donut.png'
    },
    {
        name: 'fish',
        img: 'images/fish.png'
    },
    {
        name: 'flower',
        img: 'images/flower.png'
    },
    {
        name: 'house',
        img: 'images/house.png'
    },
    {
        name: 'tree',
        img: 'images/tree.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/background.png')
        card.setAttribute('data-id', i)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function flipcard() {
    //41.50
}