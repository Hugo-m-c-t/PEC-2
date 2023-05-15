//var parseNycAddress = require("parse-nyc-address");

function randomizar(){
    var lista = [pre1, pre2, pre3, pre4, pre5, pre6, pre7, pre8, pre9, pre10];
    var pregunta = math.randomInt(9);
    return lista[pregunta]();
}

function pre1() {
    var q1 = prompt("¿Cuánto mide la Estatua de la libertad, en metros?");
    if (q1 == "93"){
        alert("¡Exacto!");
    }
    else if (q1 == "93 metros"){
        alert("¡Exacto!");
    }
    else {
        alert ("¡No exactamente! Mide 93 metros.");
    }
}

function pre2() {
    var q1 = prompt("¿Qué area en kilómetros cuadrados ocupa Central Park?");
    if (q1 == "3,41"){
        alert("¡Exacto!");
    }
    else if (q1 == "3.41"){
        alert("¡Exacto!");
    }
    else {
        alert ("¡No exactamente! Mide 3,41 kilómetros cuadrados.");
    }
}

function pre3() {
    var q1 = prompt("¿Qué criatura se sube a lo alto del Empire State en una famosa película de 1933?").toLocaleLowerCase();
    if (q1 == "king kong"){
        alert("¡Exacto!");
    }
    else {
        alert ("¡No exactamente! La criatura era King Kong.");
    }
}

function pre4() {
    var q1 = prompt("¿Cuántos aeropuertos tiene Nueva York?");
    if (q1 == "3"){
        alert("¡Exacto!");
    }
    else {
        alert ("¡No exactamente! Tiene tres: JFK, Newark y La Guardia.");
    }
}

function pre5() {
    var q1 = prompt("¿Alrededor de cuántas personas pasan diariamente por Times Square?");
    if (q1 == "360.000"){
        alert("¡Exacto!");
    }
    else if (q1 == "360,000"){
        alert("¡Exacto!");
    }
    else if (q1 == "360000"){
        alert("¡Exacto!");
    }
    else {
        alert ("¡No exactamente! Diariamente pasan unas 360,000 personas.");
    }
}

function pre6() {
    var q1 = prompt("¿Cuántos teatros hay en Broadway?");
    if (q1 == "41"){
        alert("¡Exacto!");
    }
    else {
        alert ("¡No exactamente! Actualmente hay 41 teatros, cada uno con 500 asientos o más.");
    }
}

function pre7() {
    var q1 = prompt("Además de los New York Mets, ¿qué otro equipo de baseball tiene Nueva York?").toLocaleLowerCase();
    if (q1 == "yankees"){
        alert("¡Exacto!");
    }
    else if (q1 == "new york yankees"){
        alert("¡Exacto!");
    }
    else {
        alert ("¡No exactamente! Nueva York tiene a los New York Mets y a los New York Yankees");
    }
}

function pre8() {
    var q1 = prompt("¿Qué arquitecto español diseñó 'El Óculus', que se encuentra en la zona financiera de Manhattan?").toLocaleLowerCase();
    if (q1 == "calatrava"){
        alert("¡Exacto!");
    }
    else {
        alert ("¡No exactamente! Lo diseñó Santiago Calatrava.");
    }
}

function pre9() {
    var q1 = prompt("¿Cuántos millones de pasajeros pasaron por Ellis Island entre 1892 y 1954?");
    if (q1 == "12"){
        alert("¡Exacto!");
    }
    else if (q1 == "12 millones"){
        alert("¡Exacto!");
    }
    else {
        alert ("¡No exactamente! Se estima que fueron 12 millones. En esa época, la isla actuaba como aduana para aquellos que llegasen por barco a la ciudad.");
    }
}

function pre10() {
    var q1 = prompt("¿Cuántas líneas de metro tiene Nueva York actualmente?");
    if (q1 == "28"){
        alert("¡Exacto!");
    }
    else {
        alert ("¡No exactamente! Tiene 28 líneas, compuestas por colores, letras y números que indican cada ruta y su extensión.");
    }

}

class Hotel {
    constructor (nombre, dir){
        this.nombre = nombre;
        this.dir = parseNycAddress(dir); 
    }
}

var hotel1 = new Hotel ("The Dominick", "246 Spring Street SoHo NY 10013 USA");
var hotel2 = new Hotel ("Hampton Inn", "59 W 35th St NY 10001 USA");
var hotel3 = new Hotel ("The Central Park North", "137 W 111th St NY 10026 USA");
var listaHoteles = [hotel1, hotel2, hotel3];

function recibido() {
    //var num = math.randomInt(3);
    alert("Recibido!");
    //alert("¡Recibido! Te recomendamos alojarte en el hotel " + listaHoteles[num] + " que se encuentra en " + listaHoteles[num].dir["housenumber"] + " " + listaHoteles[num].dir["street"]);
}