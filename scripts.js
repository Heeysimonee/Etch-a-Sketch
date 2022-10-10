const DEFAULT_MODE = 'color'
const DEFAULT_COLOR = '#2b2b2b';
const DEFAULT_SIZE = 16

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;
let board = document.querySelector('.board');
let size = document.querySelector('#range');
let squares = board.querySelectorAll('div');
let slider = document.querySelector('.slider');
let textSize = document.querySelector('.actual-size');
let btnRainbow = document.querySelector('.btn-rainbow');
let btnColor = document.querySelector('.btn-color');
let btnClear = document.querySelector('.btn-clear');

btnColor.onclick = () => setMode('color');
btnClear.onclick = () => clear();
slider.addEventListener('change', changeSize);
textSize.innerHTML= 'Board size: ' + 16 + ' x ' +16;


function setMode(newMode) {
    activateButton(newMode)
    currentMode = newMode
  }

function removeBoard(){
    board.innerHTML='';
}

function createBoard(size){
    removeBoard();
    board.style.gridTemplateColumns =`repeat(${size}, 1fr)` ;
    board.style.gridTemplateRows =`repeat(${size}, 1fr)`;

    let rowcol = size * size;
    for(let i = 0; i < rowcol; i++){
        let square = document.createElement('div');
        square.classList.add('board-square');
        square.addEventListener('mouseover', changeColor)
        square.addEventListener('mousedown', changeColor)
        board.insertAdjacentElement('beforeend', square);
    }
}

createBoard(currentSize);

function changeSize(){
    console.log(slider.value);
    let newSize= size.value;
    createBoard(newSize);
    textSize.innerHTML= 'Board size: ' + size.value + ' x ' + size.value;
}


function changeColor(e){
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)
if (e.type === 'mouseover' && !mouseDown) return
else e.target.style.backgroundColor= 'red';
    
}


function clear(){
    createBoard(currentSize);
}
    
