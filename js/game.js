const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [{
        id: 1,
        text: 'Navigate your way out of the maze.',
        options: [{
                text: 'Ok',
                nextText: 2
            },
            {
                text: 'No',
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'You are in room 1.',
        options: [{
                text: 'Go left',
                setState: { blueGoo: false, sword: true },
                nextText: 3
            },
            {
                text: 'Go right',
                setState: { blueGoo: false, shield: true },
                nextText: 4
            },
            {
                text: 'Go forward',
                nextText: 5
            }
        ]
    },
    {
        id: 3,
        text: 'You fall into a pit and die. The end.',
        options: [{
            text: 'Restart',
            nextText: 1
        }]
    },
    {
        id: 4,
        text: 'There is a pig in the room.',
        options: [{
            text: 'Eat the pig',
            setState: { atePig: true },
            nextText: 6
        }, {
            text: 'Go snorkeling with the pig.',
            //requiredState: (currentState) => currentState.atePig,
            nextText: 6
        }]
    },
    {
        id: 5,
        text: 'You get swallowed by a whale.',
        options: [{
            text: 'Restart',
            nextText: 1
        }]
    },
    {
        id: 6,
        text: 'You wake up well rested and full of energy ready to explore the nearby castle.',
        options: [{
            text: 'Explore the castle',
            nextText: 7
        }]
    },
    {
        id: 7,
        text: 'While exploring the castle you come across a horrible monster in your path.',
        options: [{
                text: 'Try to run',
                nextText: 8
            },
            {
                text: 'Attack it with your sword',
                requiredState: (currentState) => currentState.sword,
                nextText: 9
            },
            {
                text: 'Hide behind your shield',
                requiredState: (currentState) => currentState.shield,
                nextText: 10
            },
            {
                text: 'Throw the blue goo at it',
                requiredState: (currentState) => currentState.blueGoo,
                nextText: 11
            }
        ]
    },
    {
        id: 8,
        text: 'Your attempts to run are in vain and the monster easily catches.',
        options: [{
            text: 'Restart',
            nextText: -1
        }]
    },
    {
        id: 9,
        text: 'You foolishly thought this monster could be slain with a single sword.',
        options: [{
            text: 'Restart',
            nextText: -1
        }]
    },
    {
        id: 10,
        text: 'The monster laughed as you hid behind your shield and ate you.',
        options: [{
            text: 'Restart',
            nextText: -1
        }]
    },
    {
        id: 11,
        text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
        options: [{
            text: 'Congratulations. Play Again.',
            nextText: -1
        }]
    }
]

startGame()