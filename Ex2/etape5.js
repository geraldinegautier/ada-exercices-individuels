let givenNumber
let findNumber
let bool2
let count = 1


function askNumberFind(){
    findNumber = prompt("Joueur 1 - Choisissez un nombre entre 0 et 50");
    findNumber = Number(findNumber)
}

function getValue(){
    document.getElementById("count").innerText = (`Tentative n°${count}`)
    givenNumber = document.querySelector("#saisie").value;
    givenNumber = Number(givenNumber);  
    gamePlay();
}

function tryAgain(){
    alert("Essayez encore")
    document.querySelector("saisie").value = ""
    document.querySelector("#bouton").addEventListener("click",getValue);

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

    do{
        
        count ++
        
        if (givenNumber < findNumber){
            alert("Trop petit \n");
            tryAgain()
        }
        else if (givenNumber > findNumber){
            alert("Trop grand");
            tryAgain()
        }
    
        bool = didIWin(givenNumber, findNumber)
        console.log(bool)   
     

    } while (bool !== true)

    alert("Bravo ! Vous avez deviné le nombre");

}
askNumberFind();
document.querySelector("#bouton").addEventListener("click",getValue);

