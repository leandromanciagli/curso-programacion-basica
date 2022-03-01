class Billete
{
    constructor(imagen, valor, cantidad){
        this.imagen = imagen;
        this.valor = valor;
        this.cantidad = cantidad;
    }

    imprimirBillete()
    {
        var img = document.createElement("img");
        img.setAttribute("src", this.imagen);
        resultado.appendChild(img);
    }
}

class Cajero
{
    constructor(imagen, billetes, extracciones){
        this.imagen = imagen;
        this.billetes = billetes;
        this.extracciones = extracciones;
    }

    calcularTotal(){
        var total = 0;
        for (var b of this.billetes) {
            total = total + (b.valor * b.cantidad);
        }
        return total;
    }

    extraer(valor, cantidad){
        for (const billete of this.billetes) {
            if(billete.valor == valor){
                if (billete.cantidad - cantidad >= 0) {
                    billete.cantidad = billete.cantidad - cantidad;
                }else{
                    billete.cantidad = 0;
                }
            }
        }
    }

    actualizar(){
        console.log(this.calcularTotal());
        document.getElementById("dineroEnCajero").innerHTML = "Total en cajero: $" + this.calcularTotal();
        this.mostrarExtracciones();
    }

    mostrarExtracciones(){
        var msj = document.getElementById("msj");
        var extraccionesRealizadas = document.getElementById("extraccionesRealizadas");
        extraccionesRealizadas.innerHTML = "";
        if (this.extracciones.length != 0) {    
            msj.innerHTML = "Últimas extracciones realizadas:";    
            for (let i = 0; i < this.extracciones.length; i++) {
                var nuevaExtraccion = document.createElement("p");
                nuevaExtraccion.innerHTML = "- Se extrajo $" + this.extracciones[i] + "<br>";
                extraccionesRealizadas.appendChild(nuevaExtraccion);
            }
        }else{
            msj.innerHTML = "Aún no se han hecho extracciones";
        }
    }
}

function crearCajero()
{
    var caja = [];
    caja.push( new Billete('img/1000_dolares.jpg', 1000, 1) ); //$1000
    caja.push( new Billete('img/100_dolares.jpg', 100, 10) );  //$1000
    caja.push( new Billete('img/50_dolares.jpg', 50, 10) );    //$500
    caja.push( new Billete('img/20_dolares.jpg', 20, 11) );    //$200
    caja.push( new Billete('img/10_dolares.jpg', 10, 11) );    //$100
    caja.push( new Billete('img/5_dolares.jpg', 5, 30) );      //$150
    caja.push( new Billete('img/1_dolar.jpg', 1, 20) );        //$20
    cajero = new Cajero('img/cajero.jpg', caja, []);
    document.getElementById("terminal").setAttribute("src", cajero.imagen);
    cajero.actualizar();
}

function entregarDinero()
{
    resultado.innerHTML = "";
    dineroSolicitado = parseInt(dineroSolicitadoInput.value);
    var dinero = dineroSolicitado;
    for (var billete of cajero.billetes) {
        if (dinero > 0) {
            div = Math.floor(dinero / billete.valor);
            if (div > billete.cantidad) {
                cantidadDePapeles = billete.cantidad;
            }else{
                cantidadDePapeles = div;
            }
            if (cantidadDePapeles > 0) {
                dineroEntregado.push(new Billete(billete.imagen, billete.valor, cantidadDePapeles));
                dinero = dinero - (billete.valor * cantidadDePapeles);
            }
        }
    }

    if (dinero == 0) {
        for (const b of dineroEntregado) {
            if (b.cantidad > 0) {
                for (let i = 1; i <= b.cantidad; i++) {
                    b.imprimirBillete();
                }
                cajero.extraer(b.valor, cantidadDePapeles);
            }
        }
        cajero.extracciones.unshift(dineroSolicitado);
        cajero.actualizar();
    }else{
        resultado.innerHTML = "Disculpe las molestias, por el momento no podemos entregar la cantidad de dinero especificada";
    }
    dineroEntregado = [];
    cantidadDePapeles = 0;
}

var cajero;
var dineroEntregado = [];
// var extracciones = [];
var div = 0;
var cantidadDePapeles = 0;
var dineroSolicitadoInput = document.getElementById("dinero");
var botonExtraer = document.getElementById("extraer");
var resultado = document.getElementById("resultado");

window.addEventListener("load", crearCajero);
botonExtraer.addEventListener("click", entregarDinero);


