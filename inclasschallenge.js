let exarray = [20,10,-15,-12,-5];
let result = exarray.filter(negativeCounter)

function negativeCounter(a){
    return a >= 0;


}

console.log(result);