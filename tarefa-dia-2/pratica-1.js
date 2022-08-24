let nome = "Andre"
let email = "andrerabelom@gmail.com"
let profissao = "Analista de Processos"
let idade = 26
let lugarDosSonhos = "Suiça"


let lista = [nome, email, profissao, idade, lugarDosSonhos]

console.log("Meu nome é " + nome);

console.log("Meu e-mail é: " + email);

console.log("Minha profissão é: "+profissao)

console.log("Eu tenho "+idade+ " anos de idade")


for (i in lista) {
console.log(lista[i])
}


console.log("Olá," + nome + ". Somos aqui da agência de turismo Viagem dos Sonhos. Estamos te escrevendo este email, pois acabamos de confirmar as compras das passagens aéreas para" + lugarDosSonhos +  ". Confirma pra gente alguns dados? A sua idade é" + idade + ", você é " + profissao + " e o seu email é" + email + "? Ficamos no aguardo. Muito obrigado e boa viagem! :D");