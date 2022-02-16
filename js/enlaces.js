let seccion = document.querySelectorAll(".seccion");
seccion.forEach(element => {
    element.addEventListener("click", () => {

        let texto = element.querySelector(".texto").textContent;
        console.log(texto);
        switch (true) {
            case texto =="Tema 1. Planificación de interfaces":
                document.location.href = "pag/tema1.html"
                break;
            case texto =="Tema 2. Uso de estilos":
                document.location.href = "pag/tema2.html"
                break;
            case texto =="Tema 3. Contenido multimedia":
                document.location.href = "pag/tema3.html"
                break;
            case texto =="Tema 5. Diseño de Webs Accesibles":
                document.location.href = "pag/tema5.html"
                break;
            case texto =="Tema 6. Implementación de la usabilidad":
                document.location.href = "pag/tema6.html"
                break;
        }
    });
});