function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var title = document.getElementsByClassName('.title')
var footer = document.getElementsByClassName('.ft')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
var segundos = data.getSeconds()
msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`
if (hora >= 6 && hora <= 7) {
    // Bom Dia das 06h às 7h
    img.src = '/relogio/img/fotoamanhecer.png'
    document.body.style.background = '#EB8F08'
} else if (hora > 7 && hora < 12) {
    // Bom Dia das 7h às 12h
    img.src = '/relogio/img/fotomanha.png'
    document.body.style.background = '#F9F08B'
} else if (hora >= 12 && hora <= 16) {
    //Boa Tarde das 12h às 15h
    img.src = '/relogio/img/fototarde.png'
    document.body.style.background = '#FFD700'
} else if (hora > 16 && hora < 18) {
    //Boa Tarde das 15h às 17h
    img.src = '/relogio/img/fotofimdetarde.png'
    document.body.style.background = '#9D444C'
} else if (hora >= 18 && hora < 20) {
    //Boa Noite das 20 às 00
    img.src = '/relogio/img/fotonoite.png'
    document.body.style.background = '#1f2130'
} else if (hora >= 20 && hora <= 23) {
    img.src = '/relogio/img/fotonoite2.png'
    document.body.style.background = '#0e1017'
} else if (hora >= 0 && hora < 6) {
    img.src = '/relogio/img/fotonoite3.png'
    document.body.style.background = 'black'
}

}
function Atualizar() {
    window.location.reload();
}
