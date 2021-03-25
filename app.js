//donut chart

            google.charts.load("current", {packages:["corechart"]});
            google.charts.setOnLoadCallback(drawChart);
            function drawChart() {
              var data = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Search engine',     30],
                ['Direct Click',      30],
                ['Bookmark click',  40],
              ]);
              
              var options = {
                title:"Traffic Sources",
                fontSize:20,
                pieSliceText: 'none',
                backgroundColor:'none',
                pieHole: 0.4,
                legend:{
                    position:"bottom",
                    alignment:'start',
                    textStyle:{
                        fontSize:14
                    }
                    }
            
              };
              
      
              var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
              chart.draw(data, options);
            }


            //column chart
           