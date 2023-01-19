var idade = 78
console.log(`Você tem ${idade} anos. Verificando:`)
if (idade < 16){
    console.log('Você ainda não vota.')
} else if (idade < 18 || idade > 65) {
    console.log ('Voto Opcional')
} else {
    console.log ('Voto Obrigatório')
}