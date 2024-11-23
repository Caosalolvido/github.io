document.addEventListener("DOMContentLoaded", function () {
    const menuToggleButtons = document.querySelectorAll("#menu-toggle");

    menuToggleButtons.forEach(toggleButton => {
        toggleButton.addEventListener("click", function() {
            const navMenu = this.nextElementSibling;
            if (navMenu.classList.contains("show")) {
                navMenu.classList.remove("show");
            } else {
                // Cierra cualquier menú abierto antes de abrir el actual
                document.querySelectorAll("#nav-menu.show").forEach(menu => menu.classList.remove("show"));
                navMenu.classList.add("show");
            }
        });
    });
});






