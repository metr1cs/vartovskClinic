function directionView(){
    let idDirection = '';
    const listDirection = document.querySelectorAll(".direction");
    for (let Direction of listDirection){
        Direction.addEventListener("click", function (e) {
            idDirection = Direction.dataset.direction;
            openTab(idDirection);
        })
    }
}

function openTab(idDirection){
const listBoard = document.querySelectorAll(".doctors-content");
            for (let Board of listBoard){
                Board.style.display = 'none';
                idBoard = Board.dataset.id;
                if (idDirection === idBoard){
                    const listTabs = document.getElementsByName("tab-sets");
                    for (let Tab of listTabs){
                        Tab.checked = false;
                    }
                    Board.style.display = 'block';
                    const panelName = document.querySelector(".tab-menu__title");
                    const panelNameNew = Board.querySelector('.doctors-name');
                    panelName.textContent = panelNameNew.textContent;
                    return 0;
                }
            }
}

function localStoreDetails(){
    let idDirection = localStorage.getItem('idDetailsValue');
    if (idDirection != null){
        openTab(idDirection);
        localStorage.removeItem('idDetailsValue');
    }
    idDirection = localStorage.getItem('idDirectionValue');
    if (idDirection != null){
        openTab(idDirection);
        localStorage.removeItem('idDirectionValue');
    }
}

function localStore(){
    let idSale = localStorage.getItem('idSaleValue');
    openSale(idSale);
    localStorage.removeItem('idSaleValue');
}

function detailsView(){
    let idBoard = '';
    let idDetails = '';
    const listDetails = document.querySelectorAll(".specialist-cart__bottons-details");
    for (let Details of listDetails){
        Details.addEventListener("click", function (e) {
            idDetails = Details.dataset.details;
            const listBoard = document.querySelectorAll(".doctors-content");
            for (let Board of listBoard){
                Board.style.display = 'none';
                idBoard = Board.dataset.id;
                if (idDetails === idBoard){
                    const listTabs = document.getElementsByName("tab-sets");
                    for (let Tab of listTabs){
                        Tab.checked = false;
                    }
                    Board.style.display = 'block';
                    const panelName = document.querySelector(".tab-menu__title");
                    const panelNameNew = Board.querySelector('.doctors-name');
                    panelName.textContent = panelNameNew.textContent;
                    return 0;
                }
            }
        })
    }
}

function directionHide(){
    const listTabs = document.getElementsByName("tab-sets");
    for (let Tab of listTabs){
        Tab.addEventListener("change", function (e) {
            const listPanel = document.querySelectorAll(".doctors-content");
            for (let Panel of listPanel){
                Panel.style.display = 'none';
            }
            const panelName = document.querySelector(".tab-menu__title");
            panelName.textContent = Tab.value;
        })
    }
}

function directionSearch(){
    const searchInput = document.getElementById('searchInput');
    const articleList = document.querySelectorAll('.direction');
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        Array.from(articleList).forEach(function(article) {
            const articleTitle = article.querySelector('.direction__title');
            const articleTitleText = articleTitle.textContent.toLowerCase();
            if (articleTitleText.includes(searchTerm)) {
                article.style.display = 'flex';
            } else {
                article.style.display = 'none';
            }
        });
    })
}

function onepAnalys(){
    const analys = document.getElementById('tab-tests');
    if (analys.checked === false){
        analys.checked = true;
    }
}

function singUp(){
    const buttonArray = document.querySelectorAll(".specialist-cart__bottons-signup");
    const form = document.querySelector(".application");
    const complate = document.querySelector(".complate");

    for (button of buttonArray){
        button.addEventListener('click', function(e){
            e.preventDefault();
            form.style.display = 'block';
            let answer = document.querySelector(".application-center");
            answer.style.display = 'block';
            let send = document.querySelector(".form-inputs__button");
            answer.addEventListener('click', function(e){
                e.stopPropagation();})
            send.addEventListener('click', function(e){
                e.stopPropagation();
                answer.style.display = 'none';
                complate.style.display = 'flex'; 
            })
            form.addEventListener('click', function(e){
            complate.style.display = 'none';
            form.style.display = 'none';
        })
        })
    }
}

function openSale(idSale){
    const tabArray = document.querySelectorAll('input[type="radio"]');
    const title = document.querySelector('.tab-menu__title');
    for (tab of tabArray){
        if (tab.id === idSale){
            tab.checked = true;
            title.textContent = tab.value;
        }
    }
}

localStoreDetails();
localStore();
detailsView();
// directionSearch();
directionView();
directionHide();
singUp();