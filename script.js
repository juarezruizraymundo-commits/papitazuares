function promedio() {
    let Promedio1 = Number(document.getElementById("Promedio1").value);
    let Promedio2 = Number(document.getElementById("Promedio2").value);
    let Promedio3 = Number(document.getElementById("Promedio3").value);
    let Promedio4 = Number(document.getElementById("Promedio4").value);
    let Promedio5 = Number(document.getElementById("Promedio5").value);

    let suma = Promedio1 + Promedio2 + Promedio3 + Promedio4 + Promedio5;
    let resultado = suma / 5;

    document.getElementById("total").innerHTML =
        "El resultado del promedio es: " + resultado;
}