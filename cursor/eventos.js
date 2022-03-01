var canvas = document.getElementById("area_de_dibujo");
var lienzo = canvas.getContext("2d");
var estado = false;

canvas.addEventListener("mousedown", activaLienzo);
document.addEventListener("mousemove", dibujar);
canvas.addEventListener("mouseup", desactivarLienzo);

function dibujar(event)
{
    chequearLimites(event.layerX, event.layerY);
    if (estado) {
        lienzo.strokeStyle = "white";
        lienzo.lineWidth = 3;
        lienzo.lineTo(event.layerX, event.layerY);
        lienzo.stroke();
    }
}

function activaLienzo(event)
{
    estado = true;
    lienzo.moveTo(event.layerX, event.layerY);
}

function desactivarLienzo()
{
    estado = false;
}

function chequearLimites(x, y)
{
    if(x > canvas.width || x < 0 || y > canvas.height || y < 0){
        desactivarLienzo();
    }
}