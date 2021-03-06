import $ from "jquery"; // importing jQuery, you can delete if not needed
require("./lib/social"); // Twitter intent JS
import Chart from 'chart.js';



var deckReveal = $('#deck-appear').offset().top;
var vanishInfo = $('#vanish').offset().top-300;



$(document).scroll(function() {

  var scroll = $(document).scrollTop();


  if (scroll > 100) {

    $(".title h1").css('display','block')  

  }

  if (scroll > deckReveal){

    $(".title .deck").css('display','block')  
  
  }

  if (scroll > vanishInfo){

    $(".title").css('display','none')  
  
  } else{
    $(".title").css('display','flex')  
  }

});



// creating a chart
var ctx = document.getElementById('chartone');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Nursing and residential care', 'Motor home manufacturing', 'Skiing facilities', 'Recycling facilities (MRFS)', 'Veterinary services', 'Average, all industries'],
        datasets: [{
            label: 'Injury rate per 100 workers',
            data: [10.9, 10.3, 10.2, 9.8, 9.8, 3.1,],
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
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


var ctx = document.getElementById('chartpres');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2015', '2016', '2017', 'Average for all industries, 2017'],
        datasets: [{
            label: 'Injuries per 100 workers',
            data: [5.1, 6.0, 9.8, 3.1],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


// creating a chart
// var ctx = document.getElementById('charttwo');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['2015', '2016', '2017'],
//         datasets: [{
//             label: 'Injuries per 100 workers',
//             data: [5.1, 6.0, 9.8,],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });


$( document ).ready(function() {

  $( ".hamburger" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
      $( ".hamburger" ).hide();
      $( ".cross" ).show();
    });
  });

  $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
    });
  });

  $( ".menu ul" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
    });
  });

});





