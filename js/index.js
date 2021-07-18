function redireccionarBusqueda(url) {
    window.open(url, "_blank");
};


function guardarBusqueda(valor) {
    const historial = localStorage.getItem("historial");
    const historialArray = JSON.parse(historial);
    historialArray.push(valor);
    console.log(historialArray);
    localStorage.setItem("historial", JSON.stringify(historialArray));
    return historialArray;
}

function crearHistorial() {
    if (localStorage.getItem("historial") === null) {
        localStorage.setItem("historial", "[]");
    }
}

function renderizarHistorial(historialVista, busquedasRealizadas) {
    historialVista.innerHTML = "";
    busquedasRealizadas.forEach((item) => {
        const template = `<p>${item}</p>`;
        historialVista.innerHTML += template;

    });
}
window.onload = () => {
    const form = document.forms.searchForm;
    const historial = document.querySelector("#busquedas-realizadas")
    crearHistorial();
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const valor = form.busqueda.value;
        const url = `https://www.google.com/search?q=${valor}`;
        busquedasRealizadas = guardarBusqueda(valor);
        renderizarHistorial(historial, busquedasRealizadas);
        redireccionarBusqueda(url);

    });
};