function detailsOpen(){
    const listDetails = document.querySelectorAll(".podrobnee");
    for (let Details of listDetails){
        Details.addEventListener("click", function (event) {
            event.preventDefault();
            const idDetails = this.getAttribute('data-details');
            localStorage.setItem('idDetailsValue', idDetails);
             window.location.href = this.getAttribute('href');
});
};
}

function saleOpen(){
    const listSale = document.querySelectorAll(".salepage");
    for (let Sale of listSale){
        Sale.addEventListener("click", function (event) {
            event.preventDefault();
            const idSale = this.getAttribute('data-details');
            localStorage.setItem('idSaleValue', idSale);
             window.location.href = this.getAttribute('href');
});
};
}

saleOpen();
detailsOpen();