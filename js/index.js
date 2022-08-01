let tasaAnual = document.getElementById('anual');
let tasaMort = document.getElementById('mortalidad');
let pobEmig = document.getElementById('emigran');
let pobReg = document.getElementById('reg');
let habCant = document.getElementById('habitantes');
let anio = document.getElementById('anios');
let inputR= document.getElementById('result');


function calcularPoblacion(){
let resultTasa= tasaAnual.value-tasaMort.value;
let resultPob= pobEmig.value - pobReg.value;


    return resultTasa -resultPob;
 
}


function btnCalcular(){
   

    let Acum=0;
    let aniosArray = [];
    let datosArray = [];
    let aniosT=anio.value;
    let cantidadesH=habCant.value
    
    for (let i = 0; i < aniosT; i++) {
     let pobTotal= calcularPoblacion()
     Acum+=[( pobTotal) / (cantidadesH)]*100;
   
      //console.log("este es", Acum)
      aniosArray.push(Number.parseFloat(Acum).toFixed(20) * 100000);
      datosArray.push("CantidadAnios " + (i + 1));
        
    }

   
    inputR.value = Number.parseFloat(Acum).toFixed(30);
   
}

