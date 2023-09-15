var menu = window.document.getElementById('menu')
var itens = window.document.getElementById('itens')
function clickMenu(){
    itens.style.display = 'block'
    menu.style.display = 'none'
}

function sairMenu(){
    itens.style.display = 'none'
    menu.style.display = 'flex'
}