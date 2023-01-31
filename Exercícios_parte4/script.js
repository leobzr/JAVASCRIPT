function contar() {
    var inicio = document.getElementById('in')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        window.alert("ERRO - Faltam DADOS!")
        res.innerHTML = 'Impossível Contar!'
    } else {
        res.innerHTML = "Contando: "
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Número Invalido, Considerando como 1')
            p = 1
        }
        if (i < f) {
            //contagem progressiva
            for ( let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }

        }
        res.innerHTML += `\u{1F3C1}`
    }
}