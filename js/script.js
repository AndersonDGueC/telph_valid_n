/**
 * @fileoverview Verificador de numeros telefonicos USA
 * @version 1.0
 * @author Anderson Danilo Guerrer Calpa <adguerreroc@unal.edu.co>
 * @copyright Acadademia Geek
 * @param {string} val
 * @return {boolean}  
 */



let telphNumVal=(val)=>{
    /*
    la variable regExp repreasanta el incio de caracteres como parenteiis y busqueda de 3 digitos
    cada guio y por ultimo 4 digifos
    */
  let regExp=/^([(]\d{3}[)]|\d{3})[ -]{0,1}\d{3}[ -]{0,1}\d{4}/;
if(val[0]==='1'){ //verficacion del codigo de estado antes del numero
    val=val.slice(1,val.length);
}
if(val[0]===' '){ //verificacion de un espacio
    val=val.slice(1,val.length);
}
if(val.match(/\d/g).length !==10){//verificacion de los digitos con la bandera de varios casos y su longitud
    return false;
}
else if(regExp.test(val)){//valoracion de encontar las caracteristicas sobre el numero telefonico
    return true;
}
else{
    return false;
}
}

//llamada del evento desde la interfaz del usuario
document.querySelector('#btn_send').addEventListener('click',(e)=>{
    let num = document.querySelector('#num_val').value;
    let resultado = telphNumVal(num);
    document.querySelector('#result').innerHTML=`Su verificacion es: ${resultado}`;
})
