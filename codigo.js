let primeraPers = false

const maquinaFiesta = ()=> {
    let edad = document.getElementById("edad").value;
    let hora = document.getElementById("hora").value;
    let nombre = document.getElementById("nombre").value;
    let volver = document.getElementById("principal").innerHTML;
    if(edad >= 18){
        if (hora >= 2 && primeraPers == false) {
            primeraPers = true;
            document.getElementById("principal").innerHTML=`<p>No tienes que pagar ${nombre}, fiera!</p>`;
        } else {
            document.getElementById("principal").innerHTML=`<p>Puedes pasar ${nombre}, pero tienes que pagar</p>`;
        }
    }else{
        document.getElementById("principal").innerHTML=`<p>${nombre}, no eres mayor de edad, tira para casa a dormir</p>`;
    }
    document.getElementById("principal").innerHTML+= volver;
}


