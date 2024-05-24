function tryWord(word, base) {
	// TODO: fix jeu sensible à la casse.
    let wellPlaced = [];
    let notInWord = [];
    let missplaced = [];
    
  	let arrayBase = base.split('');
    let arrayWord = word.split('');
	if (word === base) {
    return { wellPlaced: arrayWord, missplaced: "", notInWord: "" }

		//return true
    } 
    else {
  	let wellPlaced = [];
    let notInWord = [];
    let missplaced = [];
    
  	let arrayBase = base.split('');
    let arrayWord = word.split('');
    
	for (let i = 0; i < arrayBase.length; i++) {
        if (arrayBase[i] === arrayWord[i]) {
            wellPlaced.push(arrayWord[i]);
        }	
        else {
            missplaced.push(arrayWord[i])
        }
    }
    
    for (const char of arrayWord) {
    	if (arrayBase.includes(char) === false) {
      	    notInWord.push(char)
        }
    }
    
    return { wellPlaced: wellPlaced, missplaced: missplaced, notInWord: notInWord }
  }
}

function guess() {
	let base = 'dictionnaire'
	let word = document.getElementById("word").value.toLowerCase()
	let result = tryWord(word, base)
  console.log("result ", result)
  document.getElementById("word").value = ''
 	document.getElementById("try").innerText = ("Mot proposé : " + word)
    
    if (result.wellPlaced.length === base.length) {
	    document.getElementById("win").innerText = "Bravo, vous avez gagné !"
      document.getElementById("well").innerText = ''
      document.getElementById("miss").innerText = ''
      document.getElementById("not").innerText = ''
      
    }
    else {
        document.getElementById("win").innerText = ''
        document.getElementById("well").innerText = 'Lettres bien placée(s) : ' + result.wellPlaced.join(', ')
        document.getElementById("miss").innerText = 'Lettres mal placée(s) : ' + result.missplaced.join(', ')
        document.getElementById("not").innerText = 'Lettres qui ne sont pas dans le mot : ' + result.notInWord.join(', ')
      
    }
    console.log(tryWord(word, base))
}