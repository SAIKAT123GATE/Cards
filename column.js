google.charts.load('current', {'packages':['corechart','bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses', 'Profit'],
    ['jan', 1000, 400, 200],
    ['feb', 1170, 460, 250],
    ['mar', 660, 1120, 300],
    ['apr', 1030, 540, 350]
  ]);

  var options = {
     
      
    legend:{
      position:"top",
      maxLines:4,
         }
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('columnchart_material'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}