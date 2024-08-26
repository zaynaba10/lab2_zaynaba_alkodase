document.getElementById('nav-dachboar-Button').addEventListener('click', function() {
    var navMenu = document.getElementById('Sidebar');
    var buttonNavDach = document.getElementById('navToggleDach');
    if(navMenu.classList.contains('open-nav-dachboard')){
        navMenu.classList.remove('open-nav-dachboard');
        buttonNavDach.classList.remove("fa-xmark");
        buttonNavDach.classList.add("fa-bars");
    }
    else{
        navMenu.classList.add('open-nav-dachboard');
        buttonNavDach.classList.remove("fa-bars");
        buttonNavDach.classList.add("fa-xmark");
    }
});

document.getElementById('dropdownDac').addEventListener('click', function() {
    var dropbtnContent = document.getElementById('dropbtnContent');
    var iconChevronDrop = document.getElementById('iconChevronDrop');
    if (dropbtnContent.style.display === "flex") {
        dropbtnContent.style.display = "none";
        iconChevronDrop.classList.remove("fa-chevron-up");
        iconChevronDrop.classList.add("fa-chevron-down");
    } else {
        dropbtnContent.style.display = "flex";
        iconChevronDrop.classList.add("fa-chevron-up");
        iconChevronDrop.classList.remove("fa-chevron-down");
    }
});