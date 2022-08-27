

let numero = 17

let i=1

let divisoes = 0;

while(i<(numero)) {
    if (numero % i == 0) {
        divisoes++;
        i++
    }
    else {
        i++;
    }
}

if  (divisoes >=2) {
    console.log(`Não, o número ${numero} não é primo!`)
}
else {
    console.log(`Sim, o número ${numero} é primo!`)
}