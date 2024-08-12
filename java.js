// Problema 2.1
function calcularSueldo1() {
    const sueldo = parseFloat(document.getElementById("sueldo1").value);
    const nuevoSueldo = sueldo < 1000 ? sueldo + (sueldo * 15 / 100) : sueldo;
    document.getElementById("resultado1").textContent = nuevoSueldo.toFixed(2);
}

// Problema 2.2
function calcularSueldo2() {
    const sueldo = parseFloat(document.getElementById("sueldo2").value);
    let nuevoSueldo;
    if (sueldo < 1000) {
        nuevoSueldo = sueldo + (sueldo * 15 / 100);
    } else {
        nuevoSueldo = sueldo + (sueldo * 12 / 100);
    }
    document.getElementById("resultado2").textContent = nuevoSueldo.toFixed(2);
}

// Problema 2.3
function calcularSueldo3() {
    const sueldo = parseFloat(document.getElementById("sueldo3").value);
    const categoria = document.getElementById("categoria").value;
    let aumento = 0;

    switch (categoria) {
        case "1":
            aumento = 15;
            break;
        case "2":
            aumento = 12;
            break;
        case "3":
            aumento = 10;
            break;
        case "4":
            aumento = 8;
            break;
    }

    const nuevoSueldo = sueldo + (sueldo * aumento / 100);
    document.getElementById("resultado3").textContent = nuevoSueldo.toFixed(2);
}
