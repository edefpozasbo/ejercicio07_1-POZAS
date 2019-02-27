//Se crea una función que recibe una lista para sumar sus elemento
var sumar_elementos_lista=function(lista,callback){
    //se suman los elementos de la lista
    let suma=0;
    for(var i=0;i<lista.length;i++){
        suma+=lista[i];
    }
    //se manda a llamar la función que se mando por parametro y se le envia la respuesta
    callback(suma);
}
//se crea la función que valida si es par
var es_par=function(valor,callback){
    //se valida si es par
    let res=valor%2==0;
    //se construye la respuesta
    let cad="La suma : "+valor+" - "+(res?"Es par":"No es par");
    //se manda a llamar la función que se mando por parametro y se le envia la respuesta
    callback(cad);
}
//se manda a llamar la suma de elementos y se le manda la función que va a retornar el resultado en suma
sumar_elementos_lista([1,2,4,5,8],function(suma){
    //una vez se tenga el resultado se ocupa invocar es_par
    //se manda la suma y se le manda la función que va a retornar el resultado
    //se encadenan metiendo uno sobre otro y otro y otro
    es_par(suma,function(resultado){
        console.log(resultado);
    });
});
