var prompt = require("prompt-sync")()

var nota1 = Number(prompt(" Digite a sua 1º nota: "))
var nota2 = Number(prompt(" Digite a sua 2º nota: "))
var nota3 = Number(prompt(" Digite a sua 3º nota: "))
var nota4 = Number(prompt(" Digite a sua 4º nota: "))

var media = (nota1 + nota2 + nota3 + nota4) / 4

if (media < 6){
  console.log(`Sua média é ${media}`)
  console.log("Reprovado")
} else if (media >= 6){
  console.log(`Sua média é ${media}`)
  console.log("Aprovado")
}