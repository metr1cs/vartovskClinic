function directionViewMain(){
    let idDirection = '';
    const listDirection = document.querySelectorAll(".direction");
    for (let Direction of listDirection){
        Direction.addEventListener("click", function (e) {
            idDirection = Direction.dataset.direction;
            localStorage.setItem('idDirectionValue', idDirection);
            window.location.href = "/doctors.html";
        })
    }
}

directionViewMain();