document.body.onload = addElement;

function addElement() {
    const contenedorProductos = document.querySelector(".listaDeProductosCompletaPrincipal")

    fetch("Lista.json")
        .then((response) => response.json())
        .then((json) => {
            json.forEach((elemento) => {
                let html = `<div class="productoIndividual">
                <div class="imagenProductoIndividual">
                <img src=${elemento.imagen} />
                <i class="fa-regular fa-heart corazonProductoIndividual"></i>
                </div>
                <div class="informacionProductoIndividual">
                <span>${elemento.nombre}</span>
                <span>£${elemento.precio} / m²</span>
                </div>
                </div>`

                contenedorProductos.insertAdjacentHTML("afterbegin", html)
            })
        })
}


var botonesProductos = document.querySelectorAll(".corazonProductoIndividual")

botonesProductos.forEach((boton) => {
    boton.addEventListener("click", function () {
        if (boton.classList.contains("fa-regular")) {
            boton.classList.remove("fa-regular")
            boton.classList.add("fa-solid")
        } else {
            boton.classList.add("fa-regular")
            boton.classList.remove("fa-solid")
        }
    })
});