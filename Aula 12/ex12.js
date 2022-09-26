var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas.`)
if (hora < 12) {
    console.log("Bom dia!")
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else if (hora > 18 || hora == 0) {
    console.log('Boa noite!')
} else if (hora < 6 || hora > 0){
    console.log('Boa Madrugada! Deus ajuda quem cedo madruga :)')
}