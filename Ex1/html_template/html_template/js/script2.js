let date1 = new Date();
let currentMonth = date1.getMonth();
let currentYear = date1.getFullYear();

function askName(){
   let firstName = prompt("Quel est votre prénom ?");
   let responseName = (`Bonjour ${firstName}.`);

   document.getElementById("truc1").innerHTML += responseName;
}

function askBirthYear(){
    let year = prompt("En quelle année êtes-vous né ?");
    let month = prompt("En quel mois êtes-vous né ?");
    let responseMonth = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];  

    for(let i = 0; i < reponseMois.length; i++) {
        if(reponseMois[i] == mois){
            if (i <= month){
            let calculAge = (year - age)
            let reponseAge = (`Vous avez ${calculAge} ans.`);
        
           document.getElementById("truc2").innerHTML += reponseAge;
            return 0 ;
            }    
    
            else {
            let calculAge = ((year - 1) - age)
            let reponseAge = (`Vous avez ${calculAge} ans.`);

            document.getElementById("truc2").innerHTML += reponseAge;
            }

        }      
    }
}

askName();
askBirthYear();
