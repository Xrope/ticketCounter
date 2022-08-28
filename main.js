const savebutton = document.getElementById("save");
const drawButton = document.getElementById("drawNumber");
const winningNumberH1 = document.querySelector(".winningNumber");
const numberDrawnList = document.querySelector(".numberDrawn");
let winningNumber = 0;

let ticketsLeft = [];

savebutton.addEventListener("click", saveNumber);
drawButton.addEventListener("click", drawNumber);

function saveNumber(event) {
    winningNumberH1.innerHTML = "";
    numberDrawnList.innerHTML = "";
    winningNumber = 0;
    ticketsLeft = [];

    const input = document.querySelector(".numberOfTickets")
    let numberOfTickets = input.value;
    // input.classList.add('invisible')
    // input.parentElement.parentElement.removeChild(input.parentElement);
    // savebutton.parentElement.removeChild(savebutton);
    // savebutton.classList.add('invisible')

    let label = document.querySelector('label')
    label.innerHTML = `Det är ${numberOfTickets} lotter sparat`

    for (let index = 1; index < numberOfTickets; index++) {
        ticketsLeft.push(index);  
    }
}

function drawNumber(event){
    if (winningNumber != 0){
        let li = document.createElement('li');
        li.innerHTML = winningNumber;
        li.classList.add('list-group-item')
        numberDrawnList.prepend(li);
    }
    let indexOfWinningNumber = Math.floor(Math.random() * ticketsLeft.length);
    winningNumber = ticketsLeft[indexOfWinningNumber];
    winningNumberH1.innerHTML = winningNumber;
    ticketsLeft.splice(indexOfWinningNumber, 1);
    
}
