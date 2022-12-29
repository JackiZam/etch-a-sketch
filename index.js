// Variables
const pad = document.querySelector('.container');
let numDivsPerSide = 16;
let totalDivs = numDivsPerSide * numDivsPerSide;

const userChoiceTrigger = document.createElement('button');
userChoiceTrigger.textContent = "Change pixel size";
document.body.appendChild(userChoiceTrigger);
userChoiceTrigger.addEventListener('click', () => {
    createNewGrid();
});

// Styling
const padStyle = {
    backgroundColor: 'aliceblue',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '600px',
    width: '600px',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 'auto'
}
Object.assign(pad.style, padStyle);

const boxStyle = {
    width: 600 / numDivsPerSide + 'px',
    height: 600 / numDivsPerSide + 'px',
}

// Functions
function createFirstGrid(totalDivs) {
    for (let i = 0; i < totalDivs; i++)
    {
        let box = document.createElement('div');
        box.setAttribute('class', 'pixel');
        box.addEventListener('mouseover', function(e) {
            box.style.backgroundColor = 'black';
        });
        Object.assign(box.style, boxStyle);
        pad.appendChild(box);
    }
}

function getUserInput() {
    numDivsPerSide = prompt("How many pixels would you like per side in the pad?", "16")
    if (numDivsPerSide > 100 || numDivsPerSide < 0)
    {
        alert("You must enter a number from 1 to 100.");
        return;
    }
    return numDivsPerSide;
}

function createNewGrid() {
    const deletedEls = document.querySelectorAll('.pixel');
    deletedEls.forEach((block) => {
        block.remove();
    })
    numDivsPerSide = getUserInput();
    totalDivs = numDivsPerSide * numDivsPerSide;
    for (i = 0; i < totalDivs; i++)
    {
        let newBox = document.createElement('div');
        newBox.setAttribute('class', 'pixel');
        newBox.style.width = 600 / numDivsPerSide + 'px';
        newBox.style.height = 600 / numDivsPerSide + 'px';
        pad.appendChild(newBox);
        newBox.addEventListener('mouseover', () => {
            newBox.style.backgroundColor = 'black';
        });
    }
}
createFirstGrid(256);