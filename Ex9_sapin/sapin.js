let baseSapin = "+<br>/*\\"

function addLigns(n){
    let stringBlock = ""
    let y = 1
    let count = 1
    let i = 1
    let countTronc = 0

     for (let i=0; i<=n+1; i++){   
        for (count; ((count<3) && (i<=n+1)); count ++){
            stringBlock += "/"
            y = y+2
            i++

            for (let j=1; j<=y; j++){
                stringBlock += "*"
            }
            stringBlock += "\\<br>"        
        }        
        count = 0
        y = y-2
        countTronc ++
        
    }
    for (let x=1; x<=countTronc; x++){
        stringBlock += "##<br>"
    }
    return stringBlock
}

function affichage(n){
    let affichageSapin = document.getElementById("sapin")
    let lignsBlock = addLigns(n)
    affichageSapin.innerHTML = (`${baseSapin}<br>${lignsBlock}`)
}   
affichage(5)