const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("enviar");

boton.addEventListener("click",(e)=>{
    e.preventDefault(); //No actualiza la pagina cuando se envia el formulario
    let error = validarCampos();
    if(error[0]){
        document.querySelector()
    }
});
