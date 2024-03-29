function parseDate(date){
    let date2 = date.split("/")
    let newDate = {};
        newDate.jour = date2[0]
        newDate.mois = date2[1]
        newDate.annee = date2[2]
    console.log("newDate ", newDate)
    console.log("newDate.value ", Object.values(newDate))
    return newDate
}

function maxDaysInMonth(mois){

    if (mois == 1 || mois == 3 || mois == 5 || mois == 7 || mois == 8 || mois == 10 || mois == 12) return jourmax = 31
    else if (mois == 4 || mois == 6 || mois == 9 || mois == 11) return jourmax = 30
    else if (mois == 2) return jourmax = 28
}

function isValidDate(date){
    let objDate = parseDate(date)
    if (objDate.jour<=maxDaysInMonth(objDate.mois) 
        && objDate.mois<=12 
        && objDate.annee>999 
        && objDate.annee<9999){
        return true
    }
        return false

}

function isDatePalindrome(date){
    //console.log("date ", date)
    let dateArray = []
    for (let i = 0; i < date.length; i++) {
        if (date[i] !== "/") {
            dateArray += date[i]
        }
        console.log("dateArray ", dateArray)
    }
    let result = isPalindrome(dateArray)
    return result
}

function isPalindrome(string){
    let stringArray = []
    stringArray = string.split("").reverse().join("")
    
    if (string == stringArray){
        return true
    }
    return false
}

function getNextPalindromes(x){
    let today = new Date();
    let now = today.toLocaleDateString('fr-FR');
    let now2 = now.split("/")
    let arrTotal = []
    
    while (arrTotal.length <= x){
        
        //du mois en cours jusqu'à décembre
        for (let m=now2[1]; m<=12; m++){
            
            //du jour en cours jusquà la fin du mois
            for(let i=now2[0]; i<=maxDaysInMonth(now2[1]); i++){
                let testDate = `${checkNumberDigits(i)}/${checkNumberDigits(m)}/${now2[2]}`
                
                if (isDatePalindrome(testDate) == true) {
                    arrTotal.push(testDate)
                }
            }
            now2 = [1, now2[1], now2[2] ]
        }
        now2 = [checkNumberDigits(1), checkNumberDigits(1), Number(now2[2])+1 ]   
    }
    return arrTotal
}

function checkNumberDigits(myNumber)
{
    return (myNumber < 10 ? "0" : "") + myNumber;
}

//parseDate("03/01/2001")
//console.log(isValidDate("28/02/2001"))
console.log(isDatePalindrome("11/02/2011"))
//console.log(getNextPalindromes(8))
//console.log(isPalindrome("kayak"))