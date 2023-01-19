function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('Imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos. `
    //As imagens ficaram uma bosta, mas serve pra eu poder aprender, eu não sei mexer no Gimp e muito menos tenho photoshop
    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'img/manha.png'
        document.body.style.background = '#F5EC45'
    } else if (hora  >= 12 && hora < 18) {
        //tarde
        img.src = 'img/tarde.png'
        document.body.style.background = '#F5A345'
    } else {
        //noite
        img.src = 'img/noite.png'
        document.body.style.background = '#380086'
    }
}
