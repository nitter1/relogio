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
    img.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxGnz4904OjwcusQYL7l8RpAp0kLDn3zkSnsaNpKEGON74YRyHnoOOFyGGTfoO3IQtB2FR1VrXDEdEFDJxLWiXsCQ1AiTlasNstbowchNJOFNObMXi28YSFM8MusZ8DxI5LzPa_rxUtZL-VTFwjNVv-OlxYVIGZW9fNy4br5wrZQ3Y1JtDhn59DqzPhQ/s1600/fotoamanhecer.png'
    document.body.style.background = '#EB8F08'
} else if (hora > 7 && hora < 12) {
    // Bom Dia das 7h às 12h
    img.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDIgQZHujqZuoWFMV0ZtZs84EEXfYgvss74p10FWCR0h63Uj9CvgxagOahhcdXS8nt-t_bW4W0ew_ViAz4qwQ7140VlaEZ4Hlaw7Vbd9_AfBqihtMjKtKyNFKfGuD3Q4n4ZgBFPEu58CFHqlhv5ryTk1W0BWCG2TXp1dT-2EphTWn_NVRdgO2bAurggw/s1600/fotomanha.png'
    document.body.style.background = '#F9F08B'
} else if (hora >= 12 && hora <= 16) {
    //Boa Tarde das 12h às 15h
    img.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhi1NO3McMkPmT668Ov_3iUX1RAq3P7w5_F2SJOr1lMhVrJI-_oRFWEqD8wIAfolRLMOn57BiPVrcekLNxCNjBaUlx5swTDLp78Ila5ZIidGgU-901g_xITfiHf8JNdjQHMz4VzBndUKAmhLfs9SfxF0KPIRawcE-Dfbu6GXA_gL9EGHYcYQ7-k-pQ3zQ/s16000/fototarde.png'
    document.body.style.background = '#FFD700'
} else if (hora > 16 && hora < 18) {
    //Boa Tarde das 15h às 17h
    img.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKBfNt-KQSLFjya94K1sdRHVi_DHnaY7aMAcyXBHgn3l1rWOa5_XXq9P-lJA4LPT2TpF9MoNhSCWUFpTnpRc6CW7Hs80rlZn1c4GAniYLin51809dVN6bkBc1UX4PXS1neeKIfX-UCtqqO6f5RU_2kJc0sTpd5040wTnCexGdBJs9sWafu55NLlV3ffQ/s1600/fotofimdetarde.png'
    document.body.style.background = '#9D444C'
} else if (hora >= 18 && hora < 20) {
    //Boa Noite das 20 às 00
    img.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitZ0s32Usa9WCHy5eY_UBkQxgLThjF91JYiONj6za7kRhsCub5l8JxBr8FjIg-NiReJGidB0wwyY635yjYUSasUf_7-9aL5okFKed4gFlGatk_ykaobdZTmPBUaQBakntuBHqZrI5Ct7O1NGkWBwWzoutLtWYCxDnmWyZpWNCfvhdHd-hB8DJaJOD62g/s1600/fotonoite.png'
    document.body.style.background = '#1f2130'
} else if (hora >= 20 && hora <= 23) {
    img.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhiVatEQBVZ3RkrtsAu9bqfAH5koYqtu4LdWSh4sYom84xKXyS0WCT6QcxghD54UfRVRTNbgV-_99orxjvj-SsHIGAZACbtEVo89hzXlgF9GM-a881kAANZDb-mi0BHCe5UVewesJZ7UA27Ehf8q5_xrXFFcno5u1XqMJgjIjWvP1LxlUhuCpzmOQC87w/s1600/fotonoite2.png'
    document.body.style.background = '#0e1017'
} else if (hora >= 0 && hora < 6) {
    img.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7oy7YadCGcstcSGea4aVhSA-_hFEz41Xeq32HNNmdAYjxZdZ7hDoQgO0DLeDYtG8794lC-B1my-kvDlx2NVk9TfUO62qAnspfPgZv3RRWNvO9y2Xltx_Ysz_i2TUuyfWlTDJGLP5DqJMfYf48srDhKogV2Q0WWu0-X0fy33U3foGjZ4x0GhKs1mw8cA/s1600/fotonoite3.png'
    document.body.style.background = 'black'
}

}
function Atualizar() {
    window.location.reload();
}
