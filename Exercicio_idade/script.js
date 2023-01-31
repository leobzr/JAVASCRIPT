function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERROR]Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
        img.style.borderRadius = '50%'
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10 ) {
                //criança
                img.setAttribute('src', 'bebem.jpg')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemm.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adultom.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'veiom.jpg')
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 10 ) {
                //criança
                img.setAttribute('src', 'bebef.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemf.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adultaf.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'veiaf.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}