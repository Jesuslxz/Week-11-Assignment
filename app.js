let boxes = document.getElementsByClassName('col');
let turnHeading = document.getElementById('turn');

let turnOrder = 0;// turn 0 means its x's turn. 1 if its circle first




for(let i=0 ; i < boxes.length; i++){
    boxes[i].addEventListener('click', () =>{
            if (boxes[i].innerHTML !== "X" && boxes[i].innerHTML !== "O") 
            {
                if (turnOrder == 0){
                    boxes[i].innerHTML = 'X';
                    turnOrder = 1;
                    turnHeading.innerHTML = "O's Turn"
                    determineWinner();
                }
                else{
                    boxes[i].innerHTML = 'O';
                    turnOrder = 0;
                    turnHeading.innerHTML = "X's Turn"
                    determineWinner();
                }
                
            }
            
    })
}


function determineWinner(){
    //top row
    if ( boxes[0].innerHTML !== "-" && boxes[0].innerHTML === boxes[1].innerHTML && boxes[0].innerHTML === boxes[2].innerHTML){
        turnHeading.innerHTML = boxes[0].innerHTML + ' is the winner';
        createAlert(boxes[0].innerHTML);
        
    }
    //middle row
    if ( boxes[3].innerHTML !== "-" && boxes[3].innerHTML === boxes[4].innerHTML && boxes[3].innerHTML === boxes[5].innerHTML){
        turnHeading.innerHTML = boxes[3].innerHTML + ' is the winner';
        createAlert(boxes[3].innerHTML);
    }
    //bottom row
    if ( boxes[6].innerHTML !== "-" && boxes[6].innerHTML === boxes[7].innerHTML && boxes[6].innerHTML === boxes[8].innerHTML){
        turnHeading.innerHTML = boxes[6].innerHTML + ' is the winner';
        createAlert(boxes[6].innerHTML);
    }
    //left column
    if ( boxes[6].innerHTML !== "-" && boxes[0].innerHTML === boxes[3].innerHTML && boxes[0].innerHTML === boxes[6].innerHTML){
        turnHeading.innerHTML = boxes[0].innerHTML + ' is the winner';
        createAlert(boxes[0].innerHTML);
    }
    //middle column
    if ( boxes[4].innerHTML !== "-" && boxes[1].innerHTML === boxes[4].innerHTML && boxes[1].innerHTML === boxes[7].innerHTML){
        turnHeading.innerHTML = boxes[1].innerHTML + ' is the winner';
        createAlert(boxes[1].innerHTML);
    }
    //right column
    if ( boxes[5].innerHTML !== "-" && boxes[2].innerHTML === boxes[5].innerHTML && boxes[2].innerHTML === boxes[8].innerHTML){
        turnHeading.innerHTML = boxes[2].innerHTML + ' is the winner';
        createAlert(boxes[2].innerHTML);
    }
    //left diagonal
    if ( boxes[8].innerHTML !== "-" && boxes[0].innerHTML === boxes[4].innerHTML && boxes[0].innerHTML === boxes[8].innerHTML){
        turnHeading.innerHTML = boxes[0].innerHTML + ' is the winner';
        createAlert(boxes[0].innerHTML);
    }
    //right diagonal
    if ( boxes[2].innerHTML !== "-" && boxes[2].innerHTML === boxes[4].innerHTML && boxes[2].innerHTML === boxes[6].innerHTML){
        turnHeading.innerHTML = boxes[2].innerHTML + ' is the winner';
        createAlert(boxes[2].innerHTML);
    }
    
}

$('button').on('click', () =>{
    for(let i = 0; i< boxes.length; i++){
        boxes[i].innerHTML = "-";
        turnOrder = Math.round(Math.random());
        if(turnOrder == 0){
            turnHeading.innerHTML = "X's Turn";
        }
        else{
            turnHeading.innerHTML = "O's Turn";
        }
    }
    let alertBox = document.getElementById('insert');
    let child = document.getElementById('alert');
    alertBox.removeChild(child);
})


function createAlert (winner){
    let alert = document.createElement('div');
    alert.className = 'alert alert-success';
    alert.innerHTML = winner + ' WINS THE GAME';
    alert.id = 'alert'
    document.getElementById('insert').appendChild(alert)
    console.log('working');
}


