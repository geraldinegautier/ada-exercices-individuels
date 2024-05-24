let colors = ["bleu", "rouge", "jaune", "vert", "violet", "orange", "noir", "blanc"]
let goodColors
let responseTab
let count = 1
let m = 0
let n = 0
let randomColorTab = []

//fonction qui donne une suite aléatoire de 4 couleurs
function randomColor(){
    let num = 0
    for (let i=0; i<4; i++){
        num = Math.floor(Math.random() * 7)
        console.log("num ", num)
        console.log(colors[num])
        randomColorTab.push(colors[num])
    }
    return randomColorTab  
}

// fonction qui demande de choisir 8 couleurs parmi un choix restreint
function askPlayer(){
    let response = ""
    response = prompt(`Tentative n°${count}/12.\n Choisissez 8 couleurs parmi ${colors}.\n Vous avez ${m} réponse(s) bien placée(s)\n et ${n} réponse(s) correcte(s) mais mal placée(s).`);
    responseTab = response.split(" ")
    console.log("responseTab ", responseTab)
    correctColor(responseTab)
}

// fonction qui vérifie que le proposition est bien composée des 4 couleurs possibles
function correctColor(proposition){
    let boolean = false
    for (let i=0; i<proposition.length; i++){
        console.log("je suis dans la boucle for de correctColor")
        if (colors.includes(proposition[i])){
            console.log("proposition[i] ", proposition[i])
            boolean = true
        }
        else { 
            let badResponse = alert("Vous devez choisir des couleurs parmi celles proposées.")
            askPlayer()
        }   
    }
    if (boolean === true){
        stopContinue()
    }
}

// fonction qui vérifie si la combinaison est correcte
function combinaison(proposition){
    console.log("je suis dans la fonction combinaison")

    if (proposition.every((value, index) => value === goodColors[index])){
        return true
    }
    else {
        return false
    }
}

//fonction qui vérifie si on a gagné ou perdu
function stopContinue(){
    console.log("je suis dans la fonction stopContinue")

    let propositionTest = combinaison(responseTab)
    if (count === 13){
        alert ("Game over !")
        return false
    }
    while ((count <= 12) && (propositionTest === false)){
        count++
        m = 0
        n = 0
        goodResponse(responseTab)
        askPlayer()
    }
    alert ("Bravo vous avez gagné !")
    return false
}

//fonction qui détermine le nb de bonnes réponses
function goodResponse(proposition){
    //let goodResponseTab = []
    console.log("je suis dans la fonction goodResponse")
    console.log("proposition ", proposition)
    for (let i=0; i<proposition.length; i++){
        for (let y=0; y<goodColors.length; y++){
            if (proposition[i] === goodColors[y]){
                console.log("proposition[i] ", proposition[i])
                console.log("goodColors[y] ", goodColors[y])
                if (i === y) {
                    m++
                    console.log("m1 ", m)
                    console.log("proposition[i] ", proposition[i])
                    console.log("goodColors[y] ", goodColors[y])
                }
                else {
                    n++
                    console.log("n1 ", n)
                    console.log("proposition[i] ", proposition[i])
                    console.log("goodColors[y] ", goodColors[y])
                }
            }
        }
    }
    //goodResponseTab = [m,n]
    
    console.log("m2 ", m)
    console.log("n2 ", n)
}

goodColors = randomColor()
console.log("goodColors ", goodColors)
askPlayer()