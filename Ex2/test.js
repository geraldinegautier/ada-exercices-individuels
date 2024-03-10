let givenNumber

function getValue(){
    let numberAsk = document.getElementById("numberAsk")
    givenNumber = numberAsk.value
    givenNumber = Number(givenNumber);  
    console.log("fonction getvalue " + givenNumber);
}
getValue()
