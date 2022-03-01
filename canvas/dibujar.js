var canvas = document.getElementById("dibujito");
var lienzo = canvas.getContext("2d");
var cantidad_lineas_ingresadas = document.getElementById("cantidad_lineas_ingresadas");
var boton = document.getElementById("boton");
var color = "crimson";
var colorCuadrado = "white";

boton.addEventListener("click", dibujoPorClick);
dibujarCuadrado(colorCuadrado);

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarCuadrado(color)
{
    dibujarLinea(color, 1, 1, 1, canvas.width - 1);
    dibujarLinea(color, 1, 1, canvas.width - 1, 1);
    dibujarLinea(color, canvas.width - 1, 1, canvas.width - 1, canvas.width - 1);
    dibujarLinea(color, 1, canvas.width - 1, canvas.width - 1, canvas.width - 1);
}

function dibujarTorreEiffel(esquina, cantidad_lineas, color)
{
    var x_inicial;
    var y_final;
    var x_final;
    var y_inicial;
    var hayQueSumarEnX;
    var hayQueSumarEnY;
    var espacioEntreLineas = determinarEspacioEntreLineas(cantidad_lineas);
    
    switch (esquina) {
        case "superiorIzquierda":
            x_inicial = 0;
            y_inicial = 0;
            x_final = espacioEntreLineas;
            y_final = canvas.width;
            hayQueSumarEnX = true;
            hayQueSumarEnY = true;
            break;
        case "superiorDerecha":
            x_inicial = canvas.width;
            y_inicial = 0;
            x_final = canvas.width - espacioEntreLineas;
            y_final = canvas.width;
            hayQueSumarEnX = false;
            hayQueSumarEnY = true;
            break;
        case "inferiorDerecha":
            x_inicial = canvas.width;
            y_inicial = canvas.width;
            x_final = canvas.width - espacioEntreLineas;
            y_final = 0;
            hayQueSumarEnX = false;
            hayQueSumarEnY = false;
            break;
        case "inferiorIzquierda":
            x_inicial = 0;
            y_inicial = canvas.width;
            x_final = espacioEntreLineas;
            y_final = 0;
            hayQueSumarEnX = true;
            hayQueSumarEnY = false;
            break;
        default:
            return;
            break;
    }

    for (let l = 0; l < cantidad_lineas; l++) {
        dibujarLinea(color, x_inicial, y_inicial, x_final, y_final);
        if(hayQueSumarEnY){
            y_inicial = y_inicial + espacioEntreLineas;
        }else{
            y_inicial = y_inicial - espacioEntreLineas;
        }
        if(hayQueSumarEnX){
            x_final = x_final + espacioEntreLineas;
        }else{
            x_final = x_final - espacioEntreLineas;
        }
    }
}

function determinarEspacioEntreLineas(cantidad_lineas)
{
    return canvas.width / cantidad_lineas;
}

function dibujoPorClick()
{
    lienzo.clearRect(0, 0, canvas.width, canvas.height);
    dibujarCuadrado(colorCuadrado);
    dibujarTorreEiffel("superiorDerecha", cantidad_lineas_ingresadas.value, color);
    dibujarTorreEiffel("superiorIzquierda", cantidad_lineas_ingresadas.value, color);
    dibujarTorreEiffel("inferiorDerecha", cantidad_lineas_ingresadas.value, color);
    dibujarTorreEiffel("inferiorIzquierda", cantidad_lineas_ingresadas.value, color);
}