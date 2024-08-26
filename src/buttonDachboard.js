const showVerplichtButton = document.getElementById('showVerplicht');
const showAanbevolenButton = document.getElementById('showAanbevolen');
const verplichtTable = document.getElementById('Verplicht');
const aanbevolenTable = document.getElementById('Aanbevolen');
aanbevolenTable.style.display = 'none';
showVerplichtButton.addEventListener('click', () => {
    verplichtTable.style.display = 'table';
    aanbevolenTable.style.display = 'none';
    showVerplichtButton.classList.add("filterbtn-click");
    showAanbevolenButton.classList.remove("filterbtn-click");
});
showAanbevolenButton.addEventListener('click', () => {
    verplichtTable.style.display = 'none';
    aanbevolenTable.style.display = 'table';
    showVerplichtButton.classList.remove("filterbtn-click");
    showAanbevolenButton.classList.add("filterbtn-click");
});