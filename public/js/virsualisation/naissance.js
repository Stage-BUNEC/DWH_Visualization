
// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';


// on  visualise les statistiques sur les mariages générés
function visualise(id , dataV , libelleV){    
    return  new Chart(id, {
      type: 'bar',
      data: {
        labels: libelleV,
        datasets: [{
          label: "Nombre =",
          lineTension: 0.3,
          backgroundColor: "#1cc88a",
          borderColor: "rgba(78, 115, 223, 1)",
          pointRadius: 3,
          pointBackgroundColor: "rgba(78, 115, 223, 1)",
          pointBorderColor: "rgba(78, 115, 223, 1)",
          pointHoverRadius: 3,
          pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
          pointHoverBorderColor: "rgba(78, 115, 223, 1)",
          pointHitRadius: 10,
          pointBorderWidth: 2,
          data:dataV ,
        }],
      },
      options: {
        maintainAspectRatio: false,
        layout: {
          padding: {
            left: 10,
            right: 25,
            top: 25,
            bottom: 0
          }
        },
        scales: {
          xAxes: [{
            time: {
              unit: 'date'
            },
            gridLines: {
              display:false,
              drawBorder: false
            },
            ticks: {
              maxTicksLimit: 7
            }
          }],
          yAxes: [{
            ticks: {
              maxTicksLimit: 5,
              padding: 10,
    
            },
            gridLines: {
              color: "#1cc88a",
              zeroLineColor: "rgb(234, 236, 244)",
              drawBorder: false,
              borderDash: [2],
              zeroLineBorderDash: [2]
            }
          }],
        },
        legend: {
          display: false
        },
        tooltips: {
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          titleMarginBottom: 10,
          titleFontColor: '#6e707e',
          titleFontSize: 14,
          borderColor: '#dddfeb',
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          intersect: false,
          mode: 'index',
          caretPadding: 10,
          callbacks: {
            label: function(tooltipItem, chart) {
              var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
              return datasetLabel+ number_format(tooltipItem.yLabel);
            }
          }
        }
      }
    });
}
let sexePlot = document.getElementById("sexePorportion")

//visualiser la proportion des sexes
const data_sexe = [] , label_sexe = [] ;

sexeP.forEach((element) =>{
  data_sexe.push(element.Nombre);
  label_sexe.push(element.sexe)
})

let sexeVis = visualise(sexePlot , data_sexe , label_sexe);


// situation matrimoniale de la mere



let matriPlot = document.getElementById("matriProportion")


const data_matri = [] , label_matri = [] ;

data_label_matrimoniale.forEach((element) =>{
  data_matri.push(element.nombre);
  label_matri.push(element.situation_matrimoniale_mere)
})

let matriVis = visualise(matriPlot , data_matri , label_matri);

// Visualise statut acte


let statusPlot = document.getElementById("statusProportion")


const data_ma = [] , label_m = [] ;

data_label_status.forEach((element) =>{
  data_ma.push(element.Nombre);
  label_m.push(element.sexe)
})
console.log(data_label_status)
console.log(label_m)

let statut = visualise(statusPlot , data_ma , label_m);
