// Variables
const pad = document.querySelector('.container');
let numDivsPerSide = 16;
let totalDivs = numDivsPerSide * numDivsPerSide;
let defaultBackgroundColor = 'aliceblue';
let rainbowModeMarker = 0;

// Change Pixels 
const changePixButton = document.createElement('button');
changePixButton.textContent = "Change pixel size";
changePixButton.addEventListener('click', () => {
    numDivsPerSide = getUserInput();
    totalDivs = numDivsPerSide * numDivsPerSide;
    createNewGrid(totalDivs);
});

// Reset Pixels
const resetPadButton = document.createElement('button');
resetPadButton.textContent = "Reset Pad";
resetPadButton.addEventListener('click', () => {
    rainbowModeMarker = 0;
    resetGrid();
})

// Reset Size & Pixels
const resetSizeButton = document.createElement('button');
resetSizeButton.textContent = "Reset Pad & Pixel Size";
resetSizeButton.addEventListener('click', () => {
    rainbowModeMarker = 0;
    resetGrid();
    numDivsPerSide = 16;
    totalDivs = numDivsPerSide * numDivsPerSide;
    createNewGrid(totalDivs, "click", rainbowModeMarker);
})

// Draw on Hover
const hoverDraw = document.createElement('button');
hoverDraw.textContent = "Draw on hover";
hoverDraw.addEventListener('click', () => {
    totalDivs = numDivsPerSide  * numDivsPerSide;
    createNewGrid(totalDivs, "hover", rainbowModeMarker);
})

// Draw on click
const clickDraw = document.createElement('button');
clickDraw.textContent = "Draw on click";
clickDraw.addEventListener('click', () => {
    createNewGrid(totalDivs, "click", rainbowModeMarker);
})


// Rainbow mode button
const rainbowMode = document.createElement('button');
rainbowMode.textContent = "Rainbow Mode";
rainbowMode.addEventListener('click', () => {
    rainbowModeMarker = 1;
    console.log(rainbowModeMarker);
    createNewGrid(totalDivs, 'click', rainbowModeMarker);
})


// Appending the body with all of the buttons
buttonContainer = document.createElement('div');
buttonContainer.setAttribute('class', 'buttonContainer');

buttonContainer.appendChild(changePixButton);
buttonContainer.appendChild(resetPadButton);
buttonContainer.appendChild(resetSizeButton);
buttonContainer.appendChild(hoverDraw);
buttonContainer.appendChild(clickDraw);
buttonContainer.appendChild(rainbowMode);
document.body.appendChild(buttonContainer);

allButtons = document.querySelectorAll('button');
allButtons.forEach((button) => {
    button.setAttribute('class', 'padEditButton');
})

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

const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'no wrap',
}

const buttonStyling = {
    margin: 'auto',
    marginTop: '60px',
    border: 'none',
    borderRadius: '15px',
    fontSize: '18px',
    backgroundColor: 'aliceblue',
}

Object.assign(buttonContainer.style, containerStyle);
Object.assign(pad.style, padStyle);
allButtons.forEach((button) => {
    Object.assign(button.style, buttonStyling);
})
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
                if (box.classList.contains('rainbowMode')) {
                    box.style.backgroundColor = randColor;
                    box.classList.toggle('boxNotFilled');
                }
                else {
                    box.style.backgroundColor = 'black';
                    box.classList.toggle('boxNotFilled');
                }
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
        /*if (rainbowModeMarker == 1) {
            newBox.setAttribute('class', 'rainbow');
        }*/
        pad.appendChild(newBox);
        if (penType == "hover") {
            if (rainbowModeMarker != 0) {
                newBox.addEventListener('mouseover', () => {
                    newBox.style.backgroundColor = randColor;
                })
                // newBox.addEventListener('click', ()=> {
                //     if (newBox.classList.contains('boxNotFilled')) {
                //         if (newBox.classList.contains('rainbowMode')) {
                //             newBox.style.backgroundColor = randColor;
                //             newBox.classList.toggle('boxNotFilled');
                //         }
                //         else {
                //             newBox.style.backgroundColor = 'black';
                //             newBox.classList.toggle('boxNotFilled');
                //         }
                //     }
                //     else {
                //         newBox.style.backgroundColor = defaultBackgroundColor;
                //         newBox.classList.toggle('boxNotFilled');
                //     }
                // }
                // )
            }
            else {
                newBox.addEventListener('mouseover', () => {
                    newBox.style.backgroundColor = 'black';
                })
            }
        }
        else {
            newBox.addEventListener('click', () => {
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