imagenes = [];
imagenes["Cauchin"] = "vaca.jpg";
imagenes["Pokacho"] = "pollo.jpg";
imagenes["Tocinauro"] = "cerdo.jpg";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", "tierra", 100, 150));
coleccion.push(new Pakiman("Pokacho", "tierra", 100, 75));
coleccion.push(new Pakiman("Tocinauro", "tierra", 100, 200));

for (var pakiman of coleccion)
{
    pakiman.mostrar();
}