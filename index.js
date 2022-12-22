const pad = document.createElement('div');
const padStyle = {
    backgroundColor: 'aliceblue',
    height: '600px',
    width: '600px',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 'auto'
}
const numDivs = 16;
const divWidth = 600 / numDivs;
const divHeight = divWidth;

// Array.from(numDivs).forEach((div) => {
//     document.createElement('div');
//     div.style.height = divHeight;
//     div.style.width = divWidth;
//     div.style.backgroundColor = "yellow";
//     document.body.appendChild(div);
// });

Object.assign(pad.style, padStyle);
document.body.appendChild(pad);