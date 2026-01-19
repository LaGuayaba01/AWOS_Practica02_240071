//personalizaciuon el separador del ejercicio 03
console.log("%cEjercicio 03: Funciones", style_console);
//1. funciones Proocedurares, funciones vacias (VOID) o funciones que no retornan un valor
function saludar()
{
    console.log("Bienvenido, al sistema de Bienes raices");
}
//console.log(saludar());
console.warn("1.Funciones procedurales");
saludar();
//2 crear funciiones procedurales con parametros de entrada , es decir que reciben datos para funcionar
function saludarUsuario(nombreUsuario, generarUsuario)
{
    if(generarUsuario="H")
        console.log(`Bienvenido ${nombreUsuario} al sistema de Bienes Raices`);
    else if (generarUsuario="M") console.log(`Bienvenida ${nombreUsuario} al sistema de Bienes Raices`); 
    else
        console.log(`Bienvenid@ ${nombreUsuario} al sistema de Bienes Raices`);
}
console.warn("2.Funciones Procedurales con parametros de emntrada");

console.log("Nombre usuario= yhios genero=H ")
saludarUsuario("Yhos", "H");
console.log("Nombre usuario= Estela genero=M ")
saludarUsuario("Estela", "M");
console.log("Nombre usuario= JAN  genero=null ")
saludarUsuario("JAN", null);
//3.funciones que retornan un valor pero que no reciben parametros (datos de entrada)

function fechaActual(){
const fecha=new Date();
const dias=["Domingo","Lunes","MArtes","Miercoles","Jueves","Viernes","Sabado"];
const meses= [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];
const fecha_formatoMX=`${dias[fecha.getDay()]},${fecha.getDate()} de ${meses[fecha.getMonth()]} de
 ${fecha.getFullYear()}`;
return fecha_formatoMX
}
console.warn("3. funciones que retornan un valor , pero no tienen parametros de entrada")
let hoy=fechaActual();
console.log (fechaActual());
console.log(typeof(fechaActual));
console.log(hoy);

//funcioones  que retornan un valor y reciben parametros (datos de entrada )
function login(username, password)
{
    let userValidation=false;
    if (username=="admin" && password=="12345"){
        userValidation=true;
        console.log("Bienvenido usuario admin");
    }
    else if (username==="admin" && password!="12345"){
        userValidation=false;
        console.log("error en la contraseña del admin");
    }
    else if (username==="admin" && password=="12345"){
        userValidation=false;
        console.log("error el usuario no existe");
    }
    else if (username!="admin" && password!="12345"){
        userValidation=false;
        console.log("Porfavor verifica todo");
} return userValidation;
}
console.warn("4. funciones que retornan un dato y reciben parametros de entrada")
var loginStatus;
//test 1- usuario y contraseña  correctos
console.log("test1-usuario:admin, password:12345")
loginStatus=login("admin","12345");
console.log(`${loginStatus? "el usuario admin se ha logueado correctamente ":"hubo un error en el login del usuario admin."}`);

console.log("test2-usuario:admin, password:1234567890")
loginStatus=login("admin","1234567890");
console.log(`${loginStatus? "el usuario admin se ha logueado correctamente ":"hubo un error en el login del usuario admin."}`);

console.log("test3-usuario:admin, password:12345")
loginStatus=login("administrador","12345");
console.log(`${loginStatus? "el usuario admin se ha logueado correctamente ":"hubo un error en el login del usuario admin."}`);

console.log("test4-usuario:marco, password:abcd")
loginStatus=login("marco","abcd");
console.log(`${loginStatus? "el usuario admin se ha logueado correctamente ":"hubo un error en el login del usuario admin."}`);

// 5.- Funciones sin parametros (Version Extendida)
isNewUser = function(){
    const hoy = new Date();

    return(
        lastLogin.getFullYear() === hoy.getFullYear() &&
        lastLogin.getMonth() === hoy.getMonth () &&
        lastLogin.getDate() === hoy.getDate()
    );

};

console.warn("5.- Funciones Anónimas, sin parametros");

console.log("Test 1 - Fecha de ultimo acceso es igual a la fecha de hoy");
console.log(`La fecha del último acceso es: ${lastLogin}`);
console.log(`El usuario logeado es: ${isNewUser()? "Nuevo Usuario":"Usuario Antiguo"}`);

console.log("---------------------------------------------------------------------------");
lastLogin = new Date("2025/12/31");
console.log("Test 2 - Fecha de ultimo acceso es diferente a la fecha de hoy");
console.log(`La fecha del ultimo acceso es: ${lastLogin}`);
console.log(`El usuario logeado es: ${isNewUser()?"Nuevo Usuario":"Usuario Antiguo"}`);

//6. Funciones anonimas con parametros (version arrow o lambda)

const sumar=(a,b)=>{
    let resultado=a+b;      
    return resultado;
}
console.warn("6.Funciones anonuima con parametros");
console.log(`el resultado de la suma es 15+83 es: ${sumar(15,83)}`);
/* cuando la funcion anonima tiene solo una li8nea de operacion se puede usar una version 
simplificaada que no usa {} llaves , ni la palabra reservada return*/
const multiplicar=(a,b)=>a*b;
console.log(`el resultado de la suma de 15+125 es: ${multiplicar(15,125)}`);



//7. Funciones Callback (Regreso de Llamado)
console.warn("7.- Funciones Anónimas Callback (Respuesta)");
const recoverPassword = function(email, callback)
{
    //Generamos el codigo a enviar al usuario
    const recoveryCode = Math.floor(100000 + Math.random()*900000)

    console.log(`
        ======================================================
        Solicitud de recuperación recibida
        Correo del usuario solicitante: ${email}
        Generando Codigo de Recuperacion...
        Codigo de Seguridad Generado: ${recoveryCode}
        Enviando el Correo al Usuario...
        Correo Enviado a: ${email}, con el codigo de seguridad: ${recoveryCode}
        ========================================================`);

        //Definiendo la respuesta del sistema
        const response = 
        {
            status:"Ok",
            message: "Codigo de Recuperación Enviado Satisfactoriamente."
        };
        
        callback(response);
};

//Invocación de una función callback
recoverPassword("240071@utxicotepec.edu.mx",
    function (systemResponse){
        console.log("Respuesta del sistema: ");
        console.log(systemResponse.message);
    }
);

