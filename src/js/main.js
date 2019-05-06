import $ from "jquery"; // importing jQuery, you can delete if not needed
require("./lib/social"); // Twitter intent JS
import Chart from "chart.js";

var imgReveal = $('#top-quote').offset().top;

// creating a chart
var ctx = document.getElementById('charttwo');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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



// $("[href*=")
// $("html,body").stop().animate({scrolTop: })

$(document).scroll(function() {

  var scroll = $(document).scrollTop();


  if (scroll > 300) {

  	$(".bg-img").css({"-webkit-filter": "blur(5px)","filter": "blur(5px)" })  

  } else {

  	$(".bg-img").css({"-webkit-filter": "blur(10px)","filter": "blur(10px)" })  
  
  }

  if (scroll > imgReveal){

  	$(".bg-img").css({"-webkit-filter": "blur(0px)","filter": "blur(0px)" })  
  
  } 


});




