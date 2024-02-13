window.SalvarIMC = (lista) => {
    localStorage.setItem("imcs", lista);
};

window.PegaLsitaImc = () => {
    console.log(localStorage.getItem("imcs"));
    return localStorage.getItem("imcs");
};


var ModalVisivel = false;

window.MostrarModal = () => {
    window.document.getElementById("Modal").style.display = "flex";
    ModalVisivel = false;
}
window.OcultarModel = () => {
    window.document.getElementById("Modal").style.display = "none";
    ModalVisivel = true;
    console.log("Oculta")
}

window.EstadoModal = () => {
    return ModalVisivel;
}
