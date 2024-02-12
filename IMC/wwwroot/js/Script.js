window.SalvarIMC = (lista) => {
    localStorage.setItem("imcs", lista);
};

window.PegaLsitaImc = () => {
   return localStorage.getItem("imcs");
};
