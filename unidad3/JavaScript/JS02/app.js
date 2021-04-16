//var
console.log(uno);

var uno="variable";
console.log(uno);

if(true){
    var x="equis"
}
console.log(x);

//let
//console.log(dos);

let dos="variable";
console.log(dos);

if(true){
    let y ="ye"
    console.log(y)
}
// console.log(y)

dos="dos"
console.log(dos)


var var1=1
var var1=2

let let1=1
// let let1=2

let let2=1
if(true){
    let let2=3
    console.log(let2)
}
console.log(let2)


const const2="algo"
// const2="otra cosa"


/********** Valores verdaderos y falsos **********/
// valores falsos: undefined,null,0,""
//valores verdaderos: los que no son falsos

let mes
if(mes){
    document.getElementById("texto").innerText="Variable valor verdadero"
}else{
    document.getElementById("texto").innerText="Variable valor falso"
}




/********** Valores de igualdad **********/

// == doble igual- devuelve verdadero si ambos operandos son iguales
//3 =="3"
//compara valor independientemente del tipo

//=== triple igual- devuelve verdadero si ambos operandos son iguales y tiene el mismo tipo
// 3===3
mes=10

mes==="10"?console.log("verdadero"):console.log("falso")


/********** concatenacion **********/
//templete string
let nombre="juan"
let apellido="lopez"
const nacimiento=1990
function calculaEdad(nac){
    return 2021-nac;
}

console.log(nombre + " "+apellido+", su edad es: "+calculaEdad(nacimiento))
console.log(`${nombre} ${apellido}, su edad es ${calculaEdad(nacimiento)}`)

/********** Valores de flecha **********/

const anios=[2000,2005,2010,2020]

let edad= anios.map(function(el){
    return 2021-el;
})
console.log(edad)

let edadNueva=anios.map(el =>2021-el)
console.log(edad)

let edadNN=anios.map((el,index)=>`Edad ${index+1}: ${2021-el}`)//si es un solo parametro no lleva parentesis, si es mas de 1 si
                                                              //si es una sola instruccion del cuerpo no lleva nada, si es mas de 1 se encierra con llave
console.log(edadNN)

let edadNNN=anios.map((el,index)=>{
    const actual = new Date().getFullYear();
    const edad=actual -el;
    return `Edad ${index+1}: ${edad}`
})

console.log(edadNNN)

const cuadrado= function(num){
    return num*num;
}

console.log(cuadrado(64))

const cuadrado2=(num)=>{
    return num*num;
}
console.log(cuadrado2(64))


const cuadrado3= num=>num*num;
console.log(cuadrado3(64))

const frutas=[
    {
        nombre:"Manzana",
        cantidad:1
    },
    {
        nombre:"Fresa",
        cantidad:12
    },
    {
        nombre:"Mora Azul",
        cantidad:3
    },
    {
        nombre:"Uva",
        cantidad:8 
    }
]

const menores10=frutas.filter(item=>item.cantidad<10&&item.nombre.startsWith("M"))
console.log("arreglo: ",frutas)
console.log("filter",menores10)

const inv=frutas.reduce((suma,fruta)=>suma+fruta.cantidad,0)
console.log("inv",inv)



/********** DESTRUCTURACION DE OBJETOS **********/

let color=
    {
        favorito:"si",
        letraInicial:"c",
        numero:0,
        cantidad:0
    }


// let favorito=color.favorito;
// let letraInicial=color.letraInicial;


function hola({numero,cantidad}){
    console.log(numero," ",cantidad)
}

hola(color)

const response={
    clave:1,
    error:false,
    data:{
        persona:{
            nombre:"",
            edad:0
        }
    }
}

console.log("response",response)
let {clave:nuevonombreClave,error}=response
//para cambiar el nombre de la propiedad se pone dos puntos seguido del nuevo nombre
console.log("clave",nuevonombreClave,"error",error)


let suma=(a,b,c,d)=>a+b+c+d;
console.log("suma",suma(1,2,3,4))

let numeros=[1,2,3,4]
console.log("suma2",suma(...numeros))

const alumnos=["nombre1","nombre2"]
const maestros=["nombre3","nombre4"]

const poblacion=[...alumnos,...maestros]
console.log(poblacion)


















