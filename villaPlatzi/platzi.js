var canvas = document.getElementById("villaPlatzi");
var lienzo = canvas.getContext("2d");
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keydown", moverCerdo);

// Fondo
var fondo = {
    url: "tile.png",
    cargaOK: false,
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

// Vacas
var vacas = {
    url: "vaca.jpg",
    cargaOK: false,
    cantidad: aleatorio(1, 10)
};

vacas.imagen = new Image();
vacas.imagen.src = vacas.url;
vacas.imagen.addEventListener("load", cargarVacas);

// Cerdos
var cerdos = {
    url: "cerdo.jpg",
    cargaOK: false,
    cantidad: aleatorio(1, 1)
};

cerdos.imagen = new Image();
cerdos.imagen.src = cerdos.url;
cerdos.imagen.addEventListener("load", cargarCerdos);

// Pollos
var pollos = {
    url: "pollo.jpg",
    cargaOK: false,
    cantidad: aleatorio(1, 10)
};

pollos.imagen = new Image();
pollos.imagen.src = pollos.url;
pollos.imagen.addEventListener("load", cargarPollos);

function dibujar()
{
    if (fondo.cargaOK == true) {
        lienzo.drawImage(fondo.imagen, 0, 0);
    }

    if (vacas.cargaOK == true) {
        for (let v = 0; v < vacas.cantidad; v++) {
            lienzo.drawImage(vacas.imagen, vacas.posiciones[v]["x"], vacas.posiciones[v]["y"]);
        }
    }

    if (cerdos.cargaOK == true) {
        for (let c = 0; c < cerdos.cantidad; c++) {
            lienzo.drawImage(cerdos.imagen, cerdos.posiciones[c]["x"], cerdos.posiciones[c]["y"]);
        }
    }

    if (pollos.cargaOK == true) {
        for (let p = 0; p < pollos.cantidad; p++) {
            lienzo.drawImage(pollos.imagen, pollos.posiciones[p]["x"], pollos.posiciones[p]["y"]);
        }
    }
}

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas()
{
    vacas.posiciones = new Array();
    for (let v = 0; v < vacas.cantidad; v++) {
        vacas.posiciones.push(new Array());
        vacas.posiciones[v]['x'] = aleatorio(0, 420);
        vacas.posiciones[v]['y'] = aleatorio(0, 420);
    }
    vacas.cargaOK = true;
    dibujar();
}

function cargarCerdos()
{
    cerdos.posiciones = new Array();
    for (let c = 0; c < cerdos.cantidad; c++) {
        cerdos.posiciones.push(new Array());
        cerdos.posiciones[c]['x'] = aleatorio(0, 420);
        cerdos.posiciones[c]['y'] = aleatorio(0, 420);
    }
    cerdos.cargaOK = true;
    dibujar();
}

function cargarPollos()
{
    pollos.posiciones = new Array();
    for (let p = 0; p < pollos.cantidad; p++) {
        pollos.posiciones.push(new Array());
        pollos.posiciones[p]['x'] = aleatorio(0, 420);
        pollos.posiciones[p]['y'] = aleatorio(0, 420);
    }
    pollos.cargaOK = true;
    dibujar();
}

function aleatorio(min, max)
{
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}

function moverCerdo(event)
{
    var movimiento = 10;
    switch (event.keyCode) {
        case teclas.UP:
            cerdos.posiciones[0]['y'] = cerdos.posiciones[0]['y'] - movimiento;
            break;
        case teclas.DOWN:
            cerdos.posiciones[0]['y'] = cerdos.posiciones[0]['y'] + movimiento;
            break;
        case teclas.LEFT:
            cerdos.posiciones[0]['x'] = cerdos.posiciones[0]['x'] - movimiento;
            break;
        case teclas.RIGHT:
            cerdos.posiciones[0]['x'] = cerdos.posiciones[0]['x'] + movimiento;
            break;
    }
    dibujar();
}