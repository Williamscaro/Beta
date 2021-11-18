'use strict'

const EMAIL = [
    {  email: "alberto@gmail.com" }
  ];

  const PASSWORD = [
      {password: "albertpp"}
  ];
  var correo = EMAIL.values();
  var pass = PASSWORD.values();
  //validacion de email

var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var email = expReg.test(correo);
if(email == true){
    console.log("el Correo electronico es valido");
}
else {
    console.log("el correo no es valido");
}

//validacion de contrase
if(pass.value.length < 8 ){
    console.log("la contraseña no es valida");
}

else
{
    console.log("contraseña creada correctamente")
}