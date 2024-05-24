let givenNumber
let findNumber


function askNumberFind(){
    findNumber = prompt("Joueur 1 - Choisissez un nombre entre 0 et 50");
    findNumber = Number(findNumber)
}

function getValue(){
    givenNumber = prompt("Joueur 2 - Choisissez un nombre entre 0 et 50");
    givenNumber = Number(givenNumber);    
 }

function didIWin(numberX, numberY){
    console.log("debut didIWin" + numberX)
    if (numberX === numberY){
        console.log("boucle true" + numberX)

        return true
    } 
        console.log("boucle false" + numberX)

        return false
        
}
function gamePlay(){
    let bool = false

    askNumberFind()
    getValue()

    do{
        
        if (givenNumber < findNumber){
            alert("Trop petit \n");
            getValue()
        }
        else if (givenNumber > findNumber){
            alert("Trop grand");
            getValue()
        }
    
        bool = didIWin(givenNumber, findNumber)
        console.log(bool)   
     

    } while (bool !== true)

    alert("Bravo ! Vous avez deviné le nombre");

}
gamePlay();