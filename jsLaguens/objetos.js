class telefono{
    constructor(color,peso,resPant,resCam,ram){
        this.colour = color;
        this.weight = peso;
        this.screen = resPant;
        this.camera = resCam;
        this.ram = ram;
        this.nucleos = null;
        this.encendido = false;
    }
    encender() {
        if (this.encendido) {
            alert("Apagando el telefono");
            this.encendido = false;
        }else {
            alert("El telefono se ha encendido");
            this.encendido = true;
        }
    }
    reinciar() {
        if (this.encendido) {
            alert("El telefono se está reiniciando");
        }else {
            alert("El telefono debe estar encendido para reiniciarse");
        }
    }
    tomarFotos(){
        if (this.encendido) {
            alert("El telefono ha tomado una foto");
        }else {
            alert("El telefono debe estar encendido para tomar una foto");
        }
    }
    grabar(){
        if (this.encendido) {
            alert("El telefono está grabando");
        }else {
            alert("El telefono debe estar encendido para grabar");
        }
    }
}

const iphone = new telefono("negro","300g","1080","15MP","6GB");
const samsung = new telefono("blanco","400g","1080","17MP","5GB");
const xiaomi = new telefono("gris","350g","1080","20MP","8GB");

// iphone.encender();
// iphone.encender();
// iphone.reinciar();
// iphone.encender();
// iphone.tomarFotos();
// iphone.grabar();



class stringPrueba{
    constructor(cad1){
        this.cad1 = cad1;
    }
    comienzaCon(cad2) {
        if (cad2 == this.cad1.substr(0,cad2.length)) {
            return true;
        } else {
            return false;
        }
    }
    finalizaCon(cad2) {
        if (cad2 == this.cad1.substr(-cad2.length)) {
            return true;
        } else {
            return false;
        }
    }
}

const prueba = new stringPrueba("hola buenas");

alert(prueba.comienzaCon("hola"));
alert(prueba.finalizaCon("buenas"));

const prueba1 = "hola buenas";

alert(prueba1[0])