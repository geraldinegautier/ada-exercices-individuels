function add(num1, num2) {
    return num1 + num2
}

function add_array(array, num) {
    let res_array = []
    for (let i = 0; i < array.length; i++) {
        res_array += array[i] + num
        return res_array
    }
}

function factoriel(num) {
    res = 1
    for (let i = 1; i < num + 1; i++) {
        res *= i
    }
    return res
}

let temps_inital = performance.now()
// let tableau = add_array([3, 4, 1, 10], 1)
let resultat = factoriel(19)
let temps_final = performance.now()
let temps_ecoule = temps_final - temps_inital
console.log("L'éxécution a duré " + temps_ecoule)