let listaDeItens = []

const form = document.getElementById("form-itens")
const itensInput = document.getElementById("receber-item")
const ulItens = document.getElementById("lista-de-itens")

form.addEventListener("submit", function (evento) {
    evento.preventDefault()
    salvarItem()
})

function salvarItem() {
    const comprasItem = itensInput.value
    const checarDuplicado = listaDeItens.some((elemento) => elemento.valor.toUpperCase() === comprasItem.toUpperCase());

    if (checarDuplicado) {
        alert("Item já exite!")
    } else {
        listaDeItens.push({
            valor: comprasItem
        })
    }
    mostrarItens()
    
    console.log(listaDeItens)
}
function mostrarItens() {
    ulItens.innerHTML = ''
    listaDeItens.forEach((elemento, index) => {
        ulItens.innerHTML += 
        `<li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
            <div>
                <input type="checkbox" class="is-clickable" />
                <input type="text" class="is-size-5" value="${elemento.valor}"></input>
            </div>
                <div>
                    <i class="fa-solid fa-trash is-clickable deletar"></i>
                </div>
        </li>`
    })
}
