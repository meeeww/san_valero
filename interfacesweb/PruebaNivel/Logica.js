document.body.onload = addElement;

function addElement() {
    const contenedorProductos = document.querySelector(".listaDeProductosCompletaPrincipal")

    fetch("Lista.json")
        .then((response) => response.json())
        .then((json) => {
            let paginas = Math.round(json.length / 6)
            const paginacionPrincipal = document.querySelector(".paginacionPrincipal")

            for (let i = 0; i < paginas; i++) {
                console.log(i)
                if ((i + 1) == 1) {
                    paginacionPrincipal.insertAdjacentHTML("beforeend", `<span class="paginacionTextoPrincipal paginacionTextoPrincipalActiva">${i + 1}</span>`)
                } else {
                    paginacionPrincipal.insertAdjacentHTML("beforeend", `<span class="paginacionTextoPrincipal">${i + 1}</span>`)
                }
            }
            paginacionPrincipal.insertAdjacentHTML("beforeend", `<i class="fa-solid fa-arrow-right"></i>`)
            

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


const botonesProductos = document.querySelectorAll(".corazonProductoIndividual")

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

const paginasPaginacion = document.querySelectorAll(".paginacionTextoPrincipal")

paginasPaginacion.forEach((pagina) => {//falta la logica

})