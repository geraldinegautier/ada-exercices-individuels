const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..',
	'/':'/'
}

const morseToLatin = {
	'-': "T",
	'--': "M",
	'---': "O",
	'--.': "G",
	'--.-': "Q",
	'--..': "Z",
	'-.': "N",
	'-.-': "K",
	'-.--': "Y",
	'-.-.': "C",
	'-..': "D",
	'-..-': "X",
	'-...': "B",
	'.': "E",
	'.-': "A",
	'.--': "W",
	'.---': "J",
	'.--.': "P",
	'.-.': "R",
	'.-..': "L",
	'..': "I",
	'..-': "U",
	'..-.': "F",
	'...': "S",
	'...-': "V",
	'....': "H",
	'/':'/',
	' ':''
  }

let texte = "";
let output = "";
let output2 = "";
let output3 = "";
let output4 = "";
let string2 = "";

function getValue1(){
	console.log("texte1 : ", texte)
    texte = document.querySelector("#saisie1").value;  
    encode(texte);
	console.log("texte2 : ", texte)

}

function getValue2(){
    texte = document.querySelector("#saisie1").value;  
    decode(texte);
}

function getLatinCharacterList(string){
    
	for (let i=0; i<string.length; i++){
		if (string[i]==" "){
			string2 += "/";
		}
		else {
			string2 += string[i];
		}
	}
	output = string2.split('');
	return output;
}

function translateLatinCharacter(char){
    output2 = latinToMorse[char];
        return output2;
}

function encode(input){
	output3 = getLatinCharacterList(input)
	output4 = ""
	console.log("output3", output3)
	for (let i=0; i<output3.length; i++){
		if (i==output3.length-1){
			output4 += translateLatinCharacter(output3[i])
		}
		else{
			output4 += (translateLatinCharacter(output3[i]) + " ")
		}
	}
	console.log("output4", output4)
	document.getElementById("saisie2").innerHTML = output4
}

function getMorseCharacterList(string){
	output = string.split(" ")
    return output;
}

function translateMorseCharacter(char){
    output2 = morseToLatin[char];
    return output2;
}

function decode(input){
	output3 = getMorseCharacterList(input)
	output4 = ""
	for (let i=0; i<output3.length; i++){
		output4 += translateMorseCharacter(output3[i])
	}
	document.getElementById("saisie2").innerHTML = output4
	output4 = ""
}

function refresh(){
	document.getElementById("saisie1").value="";
	document.getElementById("saisie2").innerHTML = "";
	texte = "";
	output = "";
	output2 = "";
	output3 = "";
	output4 = "";
	string2 = "";
}

//getLatinCharacterList("HELLO WORLD")
// translateLatinCharacter("A")
//encode("HELLO WORLD")
//getMorseCharacterList(".- -... .-")
//translateMorseCharacter("-.-")
//decode(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")

document.querySelector("#bouton1").addEventListener("click",getValue1);
document.querySelector("#bouton2").addEventListener("click",getValue2);
document.querySelector("#bouton3").addEventListener("click",refresh);