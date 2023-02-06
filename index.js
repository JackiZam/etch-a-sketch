// Variables
const pad = document.querySelector('.container');
let numDivsPerSide = 16;
let totalDivs = numDivsPerSide * numDivsPerSide;
let defaultBackgroundColor = 'aliceblue';
let rainbowModeMarker = 0;

// Change Pixels 
const changePixButton = document.createElement('button');
changePixButton.textContent = "Change pixel size";
document.body.appendChild(changePixButton);
changePixButton.addEventListener('click', () => {
    numDivsPerSide = getUserInput();
    totalDivs = numDivsPerSide * numDivsPerSide;
    createNewGrid(totalDivs);
});

// Reset Pixels
const resetPadButton = document.createElement('button');
resetPadButton.textContent = "Reset Pad";
document.body.appendChild(resetPadButton);
resetPadButton.addEventListener('click', () => {
    resetGrid();
})

// Reset Size & Pixels
const resetSizeButton = document.createElement('button');
resetSizeButton.textContent = "Reset Pad & Pixel Size";
document.body.appendChild(resetSizeButton);
resetSizeButton.addEventListener('click', () => {
    resetGrid();
    numDivsPerSide = 16;
    totalDivs = numDivsPerSide * numDivsPerSide;
    createNewGrid(totalDivs);
})

// Draw on Hover
const hoverDraw = document.createElement('button');
hoverDraw.textContent = "Draw on hover";
hoverDraw.addEventListener('click', () => {
    totalDivs = numDivsPerSide  * numDivsPerSide;
    createNewGrid(totalDivs, "hover");
})

// Draw on click
const clickDraw = document.createElement('button');
clickDraw.textContent = "Draw on click";
clickDraw.addEventListener('click', () => {
    createNewGrid(totalDivs, "click");
})
document.body.appendChild(hoverDraw);
document.body.appendChild(clickDraw);

// Rainbow mode button
const rainbowMode = document.createElement('button');
rainbowMode.textContent = "Rainbow Mode";
rainbowMode.addEventListener('click', () => {
    rainbowModeMarker = 1;
    console.log(rainbowModeMarker);
    createNewGrid(totalDivs), rainbowModeMarker;
})
document.body.appendChild(rainbowMode);

const randomRed = Math.floor(Math.random() * 256);
const randomBlue = Math.floor(Math.random() * 256);
const randomGreen = Math.floor(Math.random() * 256);
const randColor = `rgb(${randomRed}, ${randomBlue}, ${randomGreen})`;

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
        box.setAttribute('class', 'boxNotFilled');
        box.setAttribute('id', 'pixel');
        Object.assign(box.style, boxStyle);
        pad.appendChild(box);

        box.addEventListener('click', () => {
            if (box.classList.contains('boxNotFilled')) {
                box.style.backgroundColor = 'black';
                box.classList.toggle('boxNotFilled');
            }
            else {
                box.style.backgroundColor = defaultBackgroundColor;
                box.classList.toggle('boxNotFilled');
            }
        });
    }
}


/* Perhaps build another function like this, but one for hover mode, and the other for click mode, and they depend on rainbowModeMarker*/
function createNewGrid(totalDivs, penType, rainbowModeMarker) {
    const allBoxes = document.querySelectorAll('#pixel');
    allBoxes.forEach((block) => {
        block.remove();
    })
    for (i = 0; i < totalDivs; i++)
    {
        let randomRed = Math.floor(Math.random() * 256);
        let randomBlue = Math.floor(Math.random() * 256);
        let randomGreen = Math.floor(Math.random() * 256);
        let randColor = `rgb(${randomRed}, ${randomBlue}, ${randomGreen})`;

        let newBox = document.createElement('div');
        newBox.setAttribute('class', 'boxNotFilled');
        newBox.setAttribute('id', 'pixel');
        newBox.style.width = 600 / numDivsPerSide + 'px';
        newBox.style.height = 600 / numDivsPerSide + 'px';
        pad.appendChild(newBox);
        if (penType == "hover") {
            if (rainbowModeMarker != 1) {
                newBox.addEventListener('mouseover', () => {
                    newBox.style.backgroundColor = 'black';
                })
                newBox.addEventListener('click', ()=> {
                    if (rainbowModeMarker == 0) {
                        if (newBox.classList.contains('boxNotFilled')) {
                            newBox.style.backgroundColor = 'black';
                            newBox.classList.toggle('boxNotFilled');
                        }
                        else {
                            newBox.style.backgroundColor = defaultBackgroundColor;
                            newBox.classList.toggle('boxNotFilled');
                        }
                    }
                    else {
                        if (newBox.classList.contains('boxNotFilled')) {
                            newBox.style.backgroundColor = randColor;
                            newBox.classList.toggle('boxNotFilled');
                        }
                        else {
                            newBox.style.backgroundColor = defaultBackgroundColor;
                            newBox.classList.toggle('boxNotFilled');
                        }
                    }
            })}
            else {
                newBox.addEventListener('mouseover', () => {
                    newBox.style.backgroundColor = randColor;
                })
            }
        }
        else {
            newBox.addEventListener('click', () => {
                if (rainbowModeMarker != 1) {
                    if (newBox.classList.contains('boxNotFilled')) {
                        newBox.style.backgroundColor = 'black';
                        newBox.classList.toggle('boxNotFilled');
                    }
                    else {
                        newBox.style.backgroundColor = defaultBackgroundColor;
                        newBox.classList.toggle('boxNotFilled');
                    }
                }
                else {
                    if (newBox.classList.contains('boxNotFilled')) {
                        newBox.style.backgroundColor = randColor;
                        newBox.classList.toggle('boxNotFilled');
                    }
                    else {
                        newBox.style.backgroundColor = defaultBackgroundColor;
                        newBox.classList.toggle('boxNotFilled');
                    }
                }
            });
        }
    }
}

function getUserInput() {
    numDivsPerSide = prompt("How many pixels would you like per side in the pad?", "16")
    if (numDivsPerSide > 100 || numDivsPerSide <= 0)
    {
        alert("You must enter a number from 1 to 100.");
        return;
    }
    return numDivsPerSide;
}

function resetGrid() {
    let pixels = document.querySelectorAll('#pixel');
    for (i = 0; i < pixels.length; i++) {
        pixels[i].style.backgroundColor = defaultBackgroundColor;
    }
}

createFirstGrid(256);