function loadkomponen(id, file) {

    return fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });

}

function startNavbar(){
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    navToggle.addEventListener("click", function(){
        navMenu.classList.toggle("active");
    });
}


loadkomponen(
    "navbar-placeholder",
    "komponen/navbar.html"
).then(() => {
    startNavbar();
});

loadkomponen(
    "footer-placeholder",
    "komponen/footer.html"
);