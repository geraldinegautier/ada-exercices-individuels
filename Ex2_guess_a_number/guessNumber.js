let givenNumber
let findNumber


function askNumberFind(){
    findNumber = prompt("Joueur 1 - Choisissez un nombre entre 0 et 50");
    findNumber = Number(findNumber)
}

function valider(){
    // si la valeur du champ numberAsk est non vide
    if(document.formSaisie.numberAsk.value !== "") {
      // les données sont ok, on peut envoyer le formulaire    
      return true;
    }
    else {
      // sinon on affiche un message
      alert("Saisissez un nombre");
      // et on indique de ne pas envoyer le formulaire
      return false;
    }
  }

function getValue(){

    //let trueFalse = valider()
      //button.innerHTML = `Nombre de tentatives : ${event.detail}`;
    //if (trueFalse == true){}
        givenNumber = document.getElementById("numberAsk").value;   
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
    
    // let el = document.getElementById("buttonValidate");
    // el.addEventListener("click", getValue())
    askNumberFind();

    getValue()
    do{

        givenNumber = Number(givenNumber)
        findNumber = Number(findNumber)
        
        console.log("givenNumber " + givenNumber)
        console.log("findNumber " + findNumber)
        if (givenNumber < findNumber){
            //alert("Trop petit \n");
            document.getElementById("smaller").innerHTML = givenNumber;
            // el.addEventListener("click", getValue())
            getValue()

        }
        else if (givenNumber > findNumber){
            //alert("Trop grand");
            document.getElementById("taller").innerHTML = givenNumber;
            //el.addEventListener("click", getValue())
            getValue()
        }
    
        bool = didIWin(givenNumber, findNumber)
        console.log(bool)
        // document.getElementById("numberAsk").value = ""
        

    } while (bool !== true)

    alert("Bravo ! Vous avez deviné le nombre");

}
gamePlay();