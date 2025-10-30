const input = document.querySelector(".input")
const qrcode = document.querySelector(".qrcode-img")

document.addEventListener("keypress", (e)=>{
    if(e.key === "Enter"){
        genQRcode()
    }
});

function genQRcode(){
    if(!input.value)
        return
    
    const telefone = input.value.trim()
    const dados = `tel:${telefone}`
    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=${encodeURIComponent(dados)}`;
}
