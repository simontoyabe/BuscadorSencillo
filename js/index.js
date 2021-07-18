function redireccionarBusqueda(url) {
    window.open(url, "_blank");
};


function guardarBusqueda(valor) {
    const historial = localStorage.getItem("historial");
    const historialArray = JSON.parse(historial);
    historialArray.push(valor);
    localStorage.setItem("historial", historialArray);
}


window.onload = () => {
    const form = document.forms.searchForm;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const valor = form.busqueda.value;
        const url = `https://www.google.com/search?q=${valor}`;
        redireccionarBusqueda(url);

    });
};