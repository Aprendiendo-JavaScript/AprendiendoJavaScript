let alto = window.screen.height;
let ancho = window.screen.width;
let comprar = confirm(`El alto es de ${alto} y El ancho es: ${ancho}`);


if(comprar){
    alert("Compra realizada correctamente!!");
}else{
    alert("Compra cancelada!!");
}



let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;


let html = `Protocolo: <b>${protocol}</b><br>
Pathname: <b>${pathname}</b><br>
Hostname: <b>${hostname}</b><br>
Href: <b>${href}</b><br>`;

document.write(html);