

let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};




dadosProduto = produtoC;

if (dadosProduto.internacional == true) {
console.log("O produto é um(a) " +dadosProduto.nome+ " e o custo é " +((dadosProduto.valor)*1.2)+ " reais")
}
else {
    console.log("O produto é um(a) " +dadosProduto.nome+ " e o custo é " +((dadosProduto.valor)*1.12)+ " reais")
}