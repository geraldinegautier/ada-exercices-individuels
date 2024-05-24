let date1 = new Date();
let currentMonth = date1.getMonth();
let currentYear = date1.getFullYear();

function askName() {
    let firstName = prompt("Quel est votre prénom ?");
    let responseName = (`Bonjour ${firstName}.`);

    document.getElementById("resName").innerHTML += responseName;
}

function askBirthYear() {
    let year = prompt("En quelle année êtes-vous né ?");
    let month = prompt("En quel mois êtes-vous né ?");
    let responseMonth = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
    let J = responseMonth.indexOf(month);

    if (J <= currentMonth) {
        let calculAge = (currentYear - year)
        let responseAge = (`Vous avez ${calculAge} ans.`);

        document.getElementById("resAge").innerHTML += responseAge;
    }

    else {
        let calculAge = ((currentYear - 1) - year)
        let responseAge = (`Vous avez ${calculAge} ans.`);

        document.getElementById("resAge").innerHTML += responseAge;
    }

}

askName();
askBirthYear();
