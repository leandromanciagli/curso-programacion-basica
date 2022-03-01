var canvas = document.getElementById("area_de_dibujo");
var lienzo = canvas.getContext("2d");
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
var x = 150;
var y = 150;

document.addEventListener("keyup", dibujarTeclado);
dibujarLinea("white", x-1, y-1, x+1, y+1);

function dibujarTeclado(event)
{    
    var color = "white";
    var movimiento = 10;
    switch (event.keyCode) {
        case teclas.UP:
            dibujarLinea(color, x, y, x, y - movimiento);
            y = y - movimiento;
            break;
        case teclas.DOWN:
            dibujarLinea(color, x, y, x, y + movimiento);
            y = y + movimiento;
            break;
        case teclas.LEFT:
            dibujarLinea(color, x, y, x - movimiento, y);
            x = x - movimiento;
            break;
        case teclas.RIGHT:
            dibujarLinea(color, x, y, x + movimiento, y);
            x = x + movimiento;
            break;
    }
}

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}