let tasaAnual = document.getElementById('anual');
let tasaMort = document.getElementById('mortalidad');
let pobEmig = document.getElementById('emigran');
let pobReg = document.getElementById('reg');
let habCant = document.getElementById('habitantes');
let anio = document.getElementById('anios');
let inputR= document.getElementById('result');
let myChart;

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
      datosArray.push(Number.parseFloat(Acum).toFixed(20) * 100000);
      aniosArray.push("Año" + ' ' + (i + 1));
        
    }

   
    inputR.value = Number.parseFloat(Acum).toFixed(30);
    grafico(aniosArray, datosArray);
}


function grafico(aniosArray, datosArray) {
    console.log("este",datosArray)
    var ctx = document.getElementById('myChart').getContext('2d');
    
    if (myChart) {
        myChart.destroy();
    }
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: aniosArray,
            datasets: [{
                label: 'Representación Gráfica',
                data: datosArray,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
                indexAxis: 'y',  
        }
    });
};
