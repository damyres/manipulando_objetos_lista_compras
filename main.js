let listaDeItens = []

const form = document.getElementById("form-itens")
const itensInput = document.getElementById("receber-item")

form.addEventListener("submit", function (evento) {
    event.preventDefault()
    salvarItem()
})

function salvarItem() {
    const comprasItem = itensInput.value

    listaDeItens = {
        valor: comprasItem
    }
    console.log(listaDeItens)
}
