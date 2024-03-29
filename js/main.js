/** @format */
let productsArray;
let carritoDeCompras = [];
const url = "https://fakestoreapi.com/products";

function addProductsToCarrito(index) {
    productoSeleccionado = productsArray[index];
    carritoDeCompras.push(productoSeleccionado);
    localStorage.setItem("carritoDeCompras", JSON.stringify(carritoDeCompras));

    actualizarCarritoHTML();

    console.log("Producto añadido al carrito:", productoSeleccionado);
}

function actualizarCarsHTML(allProducts) {
    let div = document.getElementById("contenedor-cards");

    if (!div) {
        console.error(
            "El elemento contenedor-productos no se encontró en el DOM."
        );
        return;
    }

    div.innerHTML = "";

    allProducts.forEach(function (producto, index) {
        div.innerHTML += `
            <div
                class="col aos-init aos-animate"
                data-aos="fade-right"
                data-aos-duration="3000">
                <div class="card mb-4 rounded-3 shadow-sm">
                    <div class="card-header py-3">
                        <img class="imagenProducto" src="${producto.image}" />
                        <h3 class="my-0 fw-normal">${producto.title}</h3>
                    </div>
                    <div class="cardProducto">
                        <h4 class="card-title pricing-card-title">$ ${
                            producto.price
                        }</h4>
                        <ul class="list-unstyled mt-3 mb-4">
                                <li>${producto.description}</li>
                        </ul>
                        <button id="btn-add-product-${
                            producto.id - 1
                        }" onclick="addProductsToCarrito(${
            producto.id - 1
        })" class="w-100 btn btn-lg btn-outline-primary">Agregar al carrito</button>
                    </div>
                </div>
            </div>
            `;
    });
    const btnAlert0 = document.getElementById("btn-add-product-0");
    btnAlert0.addEventListener("click", () => {
        Toastify({
            text: "Producto agregado",

            duration: 3000,
        }).showToast();
    });
    const btnAlert1 = document.getElementById("btn-add-product-1");
    btnAlert1.addEventListener("click", () => {
        Toastify({
            text: "Producto agregado",

            duration: 3000,
        }).showToast();
    });
    const btnAlert2 = document.getElementById("btn-add-product-2");
    btnAlert2.addEventListener("click", () => {
        Toastify({
            text: "Producto agregado",

            duration: 3000,
        }).showToast();
    });
    const btnAlert3 = document.getElementById("btn-add-product-3");
    btnAlert3.addEventListener("click", () => {
        Toastify({
            text: "Producto agregado",

            duration: 3000,
        }).showToast();
    });
    const btnAlert4 = document.getElementById("btn-add-product-4");
    btnAlert4.addEventListener("click", () => {
        Toastify({
            text: "Producto agregado",

            duration: 3000,
        }).showToast();
    });
    const btnAlert6 = document.getElementById("btn-add-product-6");
    btnAlert6.addEventListener("click", () => {
        Toastify({
            text: "Producto agregado",

            duration: 3000,
        }).showToast();
    });
    const btnAlert7 = document.getElementById("btn-add-product-7");
    btnAlert7.addEventListener("click", () => {
        Toastify({
            text: "Producto agregado",

            duration: 3000,
        }).showToast();
    });
    const btnAlert8 = document.getElementById("btn-add-product-8");
    btnAlert8.addEventListener("click", () => {
        Toastify({
            text: "Producto agregado",

            duration: 3000,
        }).showToast();
    });
    const btnAlert9 = document.getElementById("btn-add-product-9");
    btnAlert9.addEventListener("click", () => {
        Toastify({
            text: "Producto agregado",

            duration: 3000,
        }).showToast();
    });
    const btnAlert10 = document.getElementById("btn-add-product-10");
    btnAlert10.addEventListener("click", () => {
        Toastify({
            text: "Producto agregado",

            duration: 3000,
        }).showToast();
    });
    const btnAlert11 = document.getElementById("btn-add-product-11");
    btnAlert11.addEventListener("click", () => {
        Toastify({
            text: "Producto agregado",

            duration: 3000,
        }).showToast();
    });
    const btnAlert12 = document.getElementById("btn-add-product-12");
    btnAlert12.addEventListener("click", () => {
        Toastify({
            text: "Producto agregado",

            duration: 3000,
        }).showToast();
    });
    const btnAlert13 = document.getElementById("btn-add-product-13");
    btnAlert13.addEventListener("click", () => {
        Toastify({
            text: "Producto agregado",

            duration: 3000,
        }).showToast();
    });
    const btnAlert14 = document.getElementById("btn-add-product-14");
    btnAlert14.addEventListener("click", () => {
        Toastify({
            text: "Producto agregado",

            duration: 3000,
        }).showToast();
    });
    const btnAlert15 = document.getElementById("btn-add-product-16");
    btnAlert15.addEventListener("click", () => {
        Toastify({
            text: "Producto agregado",

            duration: 3000,
        }).showToast();
    });
    const btnAlert16 = document.getElementById("btn-add-product-16");
    btnAlert16.addEventListener("click", () => {
        Toastify({
            text: "Producto agregado",

            duration: 3000,
        }).showToast();
    });
    const btnAlert17 = document.getElementById("btn-add-product-17");
    btnAlert17.addEventListener("click", () => {
        Toastify({
            text: "Producto agregado",

            duration: 3000,
        }).showToast();
    });
    const btnAlert18 = document.getElementById("btn-add-product-18");
    btnAlert18.addEventListener("click", () => {
        Toastify({
            text: "Producto agregado",

            duration: 3000,
        }).showToast();
    });
    const btnAlert19 = document.getElementById("btn-add-product-19");
    btnAlert19.addEventListener("click", () => {
        Toastify({
            text: "Producto agregado",

            duration: 3000,
        }).showToast();
    });
    const btnAlert20 = document.getElementById("btn-add-product-20");
    btnAlert20.addEventListener("click", () => {
        Toastify({
            text: "Producto agregado",

            duration: 3000,
        }).showToast();
    });
}

function deleteProductsToCarrito(index) {
    if (index >= 0 && index < carritoDeCompras.length) {
        const productoSeleccionado = carritoDeCompras[index];
        carritoDeCompras.splice(index, 1);
        localStorage.setItem(
            "carritoDeCompras",
            JSON.stringify(carritoDeCompras)
        );

        actualizarCarritoHTML();

        totalCost = calcularTotalCost(carritoDeCompras);
        let costoConEnvio = totalCost + envio;

        imprimeValorCompra(totalCost);
        imprimeValorCompraConEnvio(costoConEnvio);

        console.log("Producto borrado al carrito:", productoSeleccionado);
    } else {
        console.error("Índice de producto fuera de los límites.");
    }
}

let productoSeleccionado;

function calcularTotalCost(carrito) {
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].price;
    }
    return total;
}

function actualizarCarritoHTML() {
    let tbody = document.querySelector("#contenedor-productos");
    if (tbody) {
        tbody.innerHTML = "";
    } else {
        console.error("El elemento tbody no se encontró en el DOM.");
        return;
    }

    carritoDeCompras.forEach(function (producto, index) {
        let row = document.createElement("tr");
        row.innerHTML = `
        <th scope="row">
            <div class="d-flex align-items-center">
                <img src="${producto.image}" class="bd-placeholder-img card-img-top"
                style="width: 220px;" alt="Book">
                <div class="flex-column ms-4">
                    <p class="mb-2">${producto.title}</p>
                </div>
            </div>
        </th>
        <td class="align-middle">
            <p class="mb-0" style="font-weight: 500">${producto.category}</p>
        </td>
        <td class="align-middle">
            <p class="mb-0" style="font-weight: 500">$${producto.price}</p>
        </td>
        <button type="button" class="btn btn-outline-danger" onclick="deleteProductsToCarrito(${index})">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"></path>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"></path>
                </svg>
        </button>
    `;
        tbody.appendChild(row);
    });
}

window.onload = function () {
    let carritoGuardado = localStorage.getItem("carritoDeCompras");
    if (carritoGuardado) {
        carritoDeCompras = JSON.parse(carritoGuardado);
        actualizarCarritoHTML();
    }
};

let totalCost = 0;
let carritoDeComprasGuardado = localStorage.getItem("carritoDeCompras");

if (carritoDeComprasGuardado) {
    carritoDeCompras = JSON.parse(carritoDeComprasGuardado);

    for (let i = 0; i < carritoDeCompras.length; i++) {
        totalCost += carritoDeCompras[i].price;
    }
    imprimeValorCompra(totalCost);
} else {
    console.log("No se encontró el carrito de compras en el localStorage.");
}

function imprimeValorCompra(totalCost) {
    let totalCostoCompra = document.getElementById("contenedor-saldos");

    if (!totalCostoCompra) {
        console.error(
            "El elemento contenedor-saldos no se encontró en el DOM."
        );
        return;
    }

    totalCostoCompra.innerHTML = "";

    totalCostoCompra.innerHTML += `
            <p class="mb-2">Subtotal</p>
            <p class="mb-2">$${totalCost}</p>
    `;
}

let envio = 300;
let costoConEnvio = totalCost + envio;

function imprimeValorCompraConEnvio(costoConEnvio) {
    let totalCostoCompraEnvio = document.getElementById(
        "contenedor-saldos-envio"
    );

    if (!totalCostoCompraEnvio) {
        console.error(
            "El elemento contenedor-saldos no se encontró en el DOM."
        );
        return;
    }

    totalCostoCompraEnvio.innerHTML = "";

    totalCostoCompraEnvio.innerHTML += `
            <p class="mb-2">Total (Impuestos incluidos)</p>
            <p class="mb-2">$${costoConEnvio}</p>
    `;

    actualizarCarritoHTML();
}

imprimeValorCompraConEnvio(costoConEnvio);
const searchInput = document.getElementById("searchInput");

const handleSearch = (e) => {
    const searchItern = e.target.value.toLowerCase();
    const filteredProducts = productsArray.filter((fProducts) =>
        fProducts.title.toLowerCase().startsWith(searchItern)
    );
    actualizarCarsHTML(filteredProducts);
};

searchInput.addEventListener("keyup", handleSearch);

fetch(url)
    .then((res) => res.json())
    .then((json) => {
        allProducts = json;
        productsArray = allProducts;

        imprimeValorCompraConEnvio(costoConEnvio);
        actualizarCarsHTML(productsArray);
    })
    .catch((error) => {
        console.error("Ups, nos quitaron el acceso a la API otra vez.");
    });
