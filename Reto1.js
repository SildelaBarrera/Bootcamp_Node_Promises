// • Hacer que se imprima un mensaje que indique “Mensaje 1” nada más ejecutar el programa.
// • Pasados tres segundos, se debe imprimir “Mensaje 2”.
// • Y después de que se imprima este mensaje, que se imprima “Mensaje 3”

console.log("Mensaje 1");

setTimeout(function (){
    console.log("Mensaje 2")

    function mensaje3(){
       return("Mensaje 3");
    }
    console.log(mensaje3())
}, 2000);



    


    


