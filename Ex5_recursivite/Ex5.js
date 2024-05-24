let tableau = [2, 7, 56, 4, 13, 8, 9];



function sum1(tab) {
    let result = 0
    for (let i = 0; i < tab.length; i++) {
        result += tab[i]
    }
    console.log("result : ", result)
    return result
}

function sum2(tab, i=0, result=0) {

    if (i == tab.length)
        return result
    //result += tab[i]
    return sum2(tab, i + 1, result+tab[i])
}

function factorial(num, i=num, result=0){
    if (i == 0)
        return result
    return factorial(num, i-1, result+i)
}

function fibonacci(x,result1,result2, fibo=[]){

        if (fibo.length == 0){
            fibo.push(Number(result1),Number(result2), (Number(result1) + Number(result2)))
        }
        while (fibo[fibo.length-1]<x){
            fibo.push((Number(fibo[fibo.length-2]) + fibo[fibo.length-1]))
            return fibonacci(x,result1,result2, fibo)
        }
        return fibo
    }  


//console.log(sum2(tableau))
//console.log(factorial(7))


console.log(fibonacci(354,0,1))