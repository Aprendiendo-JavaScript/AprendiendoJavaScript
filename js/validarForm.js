
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll("#formulario input")

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
    nombre:  /^[a-zA-ZÁ-ÿ\s]{1,40}$/,
    password:  /^.{4,12}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[aa-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const validarFormulario = (e)=>{
    switch(e.target.name){
        case "usuario":
            if(expresiones.usuario.test(e.target.value)){

            }else{
                document.getElementById("usuario");
            }
        break;
        case "nombre" || "materia":
                
        break;
        case "email":
                
        break;
    }
}

inputs.forEach((input)=>{
    input.addEventListener("keyup",validarFormulario);
    input.addEventListener("blur",validarFormulario);
});

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();

});