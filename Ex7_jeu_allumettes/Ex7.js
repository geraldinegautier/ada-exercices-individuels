//Jeu des allumettes

let nbAllumettes = 50;
let numPlayer = 0
let i = 1

function askNumberPlayer(){
    numPlayer = prompt("Combien de joueurs êtes-vous ?");
    console.log("numPlayer ", numPlayer)
    choicePlayer();
}

function choicePlayer(){
    alert(`Joueur ${i}.`)
    console.log("fonction choicePlayer")
    askNumber()
}

function askNumber(){
    askNum = prompt(`Joueur n°${i}. Vous avez ${nbAllumettes} allumettes. Choisissez un nombre entre 1 et 6`);
    //on vérifie que le nombre choisi est inférieur au nombre d'allumettes restantes
    console.log("askNum ", askNum)
    if (nbAllumettes>=askNum){
        //on vérifie que le nombre choisi est bien compris entre 1 et 6
        if (askNum>=1 && askNum<=6){
            takeAllumettes(askNum)
        }
        //si le joueur choisit un nombre sup à 6
        else{
            alert ("Choisissez un nombre entre 1 et 6")
            askNumber()  
        } 
    }
    else {
        alert ("Votre nombre est trop grand, vous devez choisir un nombre plus petit.")
        askNumber() 
    }
}

//fonction qui prend en paramètre le nombre d'allumettes à enlever du reste
function takeAllumettes(num){
    if (nbAllumettes>0 && nbAllumettes<=50){
        nbAllumettes -= num
        if (nbAllumettes>0){
            if(i==numPlayer){
                console.log("numPlayer1, valeur i : ", i)
                i=1;
                choicePlayer()
            }
            else {
                console.log("numPlayer2 ", numPlayer)
                i++
                choicePlayer()
            }
        }
        else{
            alert (`Bravo, joueur n°${i}, vous avez gagné !`) 
        }   
}
}

askNumberPlayer()
