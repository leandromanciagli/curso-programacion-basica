var express = require("express");

var aplicacion = express();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado)
{
    resultado.send("Este es el <strong>home</strong>");
}

function cursos(peticion, resultado)
{
    resultado.send("Esta es la sección de <strong>Cursos</strong>");
}

aplicacion.listen(8989);