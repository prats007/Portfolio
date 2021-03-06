<HTML>

<head>
    <script src="https://d3js.org/d3.v4.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/4.1.2/papaparse.min.js" charset="utf-8"></script>
    <script src="https://d3js.org/d3-color.v1.min.js"></script>
    <script src="https://d3js.org/d3-interpolate.v1.min.js"></script>
    <script src="https://d3js.org/d3-scale-chromatic.v1.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <style>
        text {
            font-family: Arial;
            font-size: 15px;
        }
        /*button style*/

        .myButton {
            -moz-box-shadow: inset 0px 1px 0px 0px #bbdaf7;
            -webkit-box-shadow: inset 0px 1px 0px 0px #bbdaf7;
            box-shadow: inset 0px 1px 0px 0px #bbdaf7;
            background: -webkit-gradient(linear, left top, left bottom, color-stop(0.05, #79bbff), color-stop(1, #378de5));
            background: -moz-linear-gradient(top, #79bbff 5%, #378de5 100%);
            background: -webkit-linear-gradient(top, #79bbff 5%, #378de5 100%);
            background: -o-linear-gradient(top, #79bbff 5%, #378de5 100%);
            background: -ms-linear-gradient(top, #79bbff 5%, #378de5 100%);
            background: linear-gradient(to bottom, #79bbff 5%, #378de5 100%);
            filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#79bbff', endColorstr='#378de5', GradientType=0);
            background-color: #79bbff;
            -moz-border-radius: 6px;
            -webkit-border-radius: 6px;
            border-radius: 6px;
            border: 1px solid #84bbf3;
            display: inline-block;
            cursor: pointer;
            color: #ffffff;
            font-family: Arial;
            font-size: 15px;
            font-weight: bold;
            padding: 8px 20px;
            text-decoration: none;
            text-shadow: 0px 1px 0px #528ecc;
        }

        .myButton:hover {
            background: -webkit-gradient(linear, left top, left bottom, color-stop(0.05, #378de5), color-stop(1, #79bbff));
            background: -moz-linear-gradient(top, #378de5 5%, #79bbff 100%);
            background: -webkit-linear-gradient(top, #378de5 5%, #79bbff 100%);
            background: -o-linear-gradient(top, #378de5 5%, #79bbff 100%);
            background: -ms-linear-gradient(top, #378de5 5%, #79bbff 100%);
            background: linear-gradient(to bottom, #378de5 5%, #79bbff 100%);
            filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#378de5', endColorstr='#79bbff', GradientType=0);
            background-color: #378de5;
        }

        .myButton:active {
            position: relative;
            top: 1px;
        }
        /*button style*/

        .axis path,
        .axis line {
            fill: none;
            stroke: black;
            shape-rendering: crispEdges;
        }

        .tick text {
            fill: black;
            font-size: 11px;
        }

        .box {
            float: left;
            height: 50px;
            margin-top: 2px;
            margin-left: 20px;
            display: inline-block;
            position: relative;
        }

        .boxtext {
            font-size: 15px;
            padding-right: 5px;
            white-space: nowrap;
            display: block;
        }

        .line {
            fill: none;
            stroke-width: 1.5px;
            stroke: rgba(92, 113, 222, 0.98);
        }

        .line2 {
            fill: none;
            stroke-width: 1.5px;
            stroke: rgba(82, 219, 170, 0.96);
        }

        .checkform {
            position: absolute;
            left: 1050px;
            top: 150px;
            width: 600px;
            height: 500px;
            border-style: solid;
            border-color: red;
            overflow: scroll;
        }

        .bar:nth-child(odd) {
            stroke: white;
            fill: rgba(92, 113, 222, 0.98);
        }

        .bar:nth-child(even) {
            stroke: white;
            fill: rgba(82, 219, 170, 0.96);
        }

        .legend:nth-child(odd) {
            fill: rgba(92, 113, 222, 0.98);
        }

        .legend:nth-child(even) {
            fill: rgba(82, 219, 170, 0.96);
        }

        .sliderdiv {
            position: absolute;
            left: 1050px;
            top: 150px;
            width: 600px;
            height: 500px;
            display: none;
        }
        /***************************************************************************************
          *    Title:Tooltips
          *    Author: d3noob
          *    Date: July 30 2016
          *    Availability: http://bl.ocks.org/d3noob/a22c42db65eb00d4e369
          *
        ***************************************************************************************/

        div.tooltip {
            position: absolute;
            text-align: center;
            width: 80px;
            height: 28px;
            padding: 2px;
            font: 12px sans-serif;
            background: lightsteelblue;
            border: 0px;
            border-radius: 8px;
            pointer-events: none;
        }
        /***************************************************************************************
          *    Title:Drag Slider
          *    Author: Mike Bostock
          *    Date: July 1 2016
          *    Availability: https://bl.ocks.org/mbostock/6452972
          *
        ***************************************************************************************/

        .track,
        .track-inset,
        .track-overlay {
            stroke-linecap: round;
        }

        .track {
            stroke: #000;
            stroke-opacity: 0.3;
            stroke-width: 10px;
        }

        .track-inset {
            stroke: #ddd;
            stroke-width: 8px;
        }

        .track-overlay {
            pointer-events: stroke;
            stroke-width: 50px;
            cursor: crosshair;
        }

        .handle {
            fill: #fff;
            stroke: #000;
            stroke-opacity: 0.5;
            stroke-width: 1.25px;
        }

        .divider-vertical {
            border-right-color: #222222;
            border-left-color: #111111;
        }
    </style>
</head>

<body class="container row">
    <div class="page-header row">
        <p style="font-size:22px;text-align:center">Data visualization Project 1</div>
    <div class="col-xl-6">
        <svg id="main" width="900" height="900">
          <svg x="-80" y="0" id="label"></svg>
        </svg>
    </div>
    <div class="col-xl-6 row">
        <button id="create" style="position: absolute; left: 1050px; top: 50px" class="myButton">BUILD</button>
        <button id="toggle" style="position: absolute; left: 1150px; top: 50px;" class="myButton">2 Variable</button>
        <div class="row">
            <select class="form-control col-sm-4" id="selectionWidgetAttr" style="position: absolute; left: 1050px; top: 100px; width:250"></select>
            <select class="form-control col-sm-4" id="selectionWidgetAttr2" style="position: absolute; left: 1300px; top: 100px; width:250" disabled></select>
            <select class="form-control col-sm-4" id="selectionWidgetAttr3" style="position: absolute; left: 1550px; top: 100px; display:none; width:250" disabled></select>
        </div>
        <form id="switch" style="position:absolute; left:1300px; top:50px">
            <input type="radio" name="graphType" value="bar" checked onchange="showslide()">Bar Graph</input>
            <input type="radio" name="graphType" value="line" onchange="showslide()">Line Graph</input>
            <input type="radio" name="graphType" value="scatter" onchange="showslide()">Scatter plot</input>
        </form>
        <div class="sliderdiv">
            <form>
                <input type="range" id="slider" min="1980" max="2012" Step="1" value="1980" style="width:400px" />
                <span id="rangetxt">1980</span>&nbsp &nbsp
                <p> Compare 3 properties for any given year. Select year with slider (All countries will be displayed)</p>
            </form>
        </div>
        <div id="formfill" class="checkform">
            <center>
                <B>List of Countries</B>
            </center>
            <form id="checker" style="display: block; margin-top:10px; margin-right:10px"></form>
        </div>
    </div>
    <script type="text/javascript">
        var pId;

        function showslide() {
            var sdi = document.querySelector('input[name=graphType]:checked').value;
            if (sdi == 'scatter') {
                var sd = document.getElementsByClassName('sliderdiv');
                var ff = document.getElementsByClassName('checkform');
                var at3 = document.getElementById('selectionWidgetAttr3');
                var at2 = document.getElementById('selectionWidgetAttr2');
                sd[0].style.display = 'block';
                ff[0].style.display = 'none';
                at3.style.display = 'block';
                at2.disabled = false;
                at3.disabled = false;
            } else {
                var el = document.getElementById('toggle')
                if (el.firstChild.data == "1 Variable") {
                    document.getElementById('selectionWidgetAttr2').disabled = false;
                } else {
                    document.getElementById('selectionWidgetAttr2').disabled = true;
                }
                var sd = document.getElementsByClassName('sliderdiv');
                var ff = document.getElementsByClassName('checkform');
                var at3 = document.getElementById('selectionWidgetAttr3');
                var at2 = document.getElementById('selectionWidgetAttr2');
                sd[0].style.display = 'none';
                ff[0].style.display = 'block';
                at3.style.display = 'none';
                at3.disabled = true;
            }
        }

        var dynx = 100;
        var rangeval = 1980;
        var dyny = 100;
        var listOfLocalities = [];
        var listOfAttr = [];
        var count = 0;
        var listOf = [];
        var allResults = [];
        var temp = [];
        var tempcon = "";
        var files = ["data\\coal_consumption.csv", "data\\coal_production.csv", "data\\petroleum_production.csv", "data\\petroleum_consumption.csv", "data\\co2_emissions_per_capita.csv",
            "data\\renewable_biofuel_consumption.csv", "data\\renewable_biofuel_production.csv", "data\\renewable_electricity_consumption.csv", "data\\renewable_electricity_generation.csv",
            "data\\total_electricity_consumption.csv", "data\\total_electricity_generation.csv", "data\\total_primary_energy_consumption.csv", "data\\total_primary_energy_production.csv"
        ];

        var country = {
            countryName: "",
            coal_consumption: [],
            coal_production: [],
            petroleum_production: [],
            petroleum_consumption: []
        };

        var units = {
            coal_consumption: "in million short tons",
            coal_production: "in million short tons",
            petroleum_production: "in thousand barrels per day",
            petroleum_consumption: "in thousand barrels per day",
            co2_emissions_per_capita: "in metric tons per capita",
            renewable_biofuel_consumption: "in thousand barrels per day",
            renewable_biofuel_production: "in thousand barrels per day",
            renewable_electricity_consumption: "in billion Kilowatt-hours",
            renewable_electricity_generation: "in billion Kilowatt-hours",
            total_electricity_consumption: "in billion Kilowatt-hours",
            total_electricity_generation: "in billion Kilowatt-hours",
            total_primary_energy_consumption: "in quadrillion BTU",
            total_primary_energy_production: "in quadrillion BTU"
        };
        for (var i = 0; i < files.length; i++) {
            Papa.parse(files[i], {
                download: true,
                header: true,
                skipEmptyLines: true,
                error: function(err, file, inputElem, reason) {},
                complete: function(results) {
                    count++;
                    allResults.push(results);
                    if (allResults.length == files.length) {
                        for (var j = 0; j < files.length; j++) {
                            var file = allResults[j];
                            var attribute = files[j].slice(5, -4);
                            listOfAttr.push(attribute);
                            console.log("---------------------------------------------------------------------------");
                            console.log(attribute);
                            for (var row = 0; row < file.data.length; row++) {
                                var record = file.data[row];
                                // make an object to store data for the current locality
                                if (j == 0) {
                                    country = {
                                        countryName: record.Locality
                                    };
                                    tempcon = country;
                                    listOf.push(country);
                                    listOfLocalities.push(tempcon.countryName);
                                } else {
                                    //fetch the object from object array
                                    for (k = 0; k < listOf.length; k++) {
                                        if (record.Locality == listOf[k].countryName) {
                                            tempcon = listOf[k];
                                            //  console.log(listOf[k].countryName + " " + k);
                                        }
                                    }
                                }
                                for (var year = 1980; year <= 2012; year++) {
                                    var value = record[year];

                                    // deal with missing data points
                                    if (value === '--') {
                                        value = 0;
                                    } else if (value === 'NA') {
                                        value = 0;
                                    } else if (value === '(s)') {
                                        value = 0;
                                    } else if (value === 'W') {
                                        value = 0;
                                    } else if (value == null) {
                                        value = 0;
                                    }

                                    // add record of current energy production
                                    temp.push(parseFloat(value));
                                }
                                tempcon[attribute] = temp;
                                temp = [];
                            }
                        }
                    }

                    if (count == 13) {

                        for (h = 0; h < listOf.length; h++) {
                            if (Object.keys(listOf[h]).length != 15)
                                console.log(listOf[h]);
                        }
                        drawBarChart('United States', ['coal_consumption'], 0);
                        //d3.select('#label')
                        ///  .html("coal consumption in million short tons");
                        // populate selection list
                        d3.select('#selectionWidgetAttr').selectAll('option').data(listOfAttr).enter().append('option')
                            .html(function(d) {
                                return d;
                            })
                            .attr('value', function(d) {
                                return d;
                            });
                        d3.select('#selectionWidgetAttr2').selectAll('option').data(listOfAttr).enter().append('option')
                            .html(function(d) {
                                return d;
                            })
                            .attr('value', function(d) {
                                return d;
                            });
                        d3.select('#selectionWidgetAttr3').selectAll('option').data(listOfAttr).enter().append('option')
                            .html(function(d) {
                                return d;
                            })
                            .attr('value', function(d) {
                                return d;
                            });
                        d3.select('#checker').selectAll('label').data(listOfLocalities).enter().append('label')
                            .attr('class', 'box')
                            .append('font').attr('class', 'boxtext')
                            .text(function(d) {
                                return d;
                            })
                            .append('input')
                            .attr('type', 'checkbox').attr('name', 'countries')
                            .attr('value', function(d) {
                                return d;
                            });
                        d3.select('#slider')
                            .on('change', function() {
                                rangeval = document.getElementById('slider').value;
                                document.getElementById('rangetxt').innerHTML = rangeval;
                            });


                        d3.select("#toggle")
                            .on('click', function() {
                                var el = document.getElementById('toggle')
                                if (el.firstChild.data == "2 Variable") {
                                    el.firstChild.data = "1 Variable";
                                    document.getElementById('selectionWidgetAttr2').disabled = false;
                                } else {
                                    el.firstChild.data = "2 Variable";
                                    document.getElementById('selectionWidgetAttr2').disabled = true;
                                }
                            });


                        //get all selected values
                        var switchVal = d3.select('input[name="graphType"]:checked').node().value;
                        var selection3 = document.getElementsByName('countries')
                        d3.select("#create")
                            .on('click', function() {

                                // figure out the newly selected locality
                                var localityName;
                                var selection2 = document.getElementById('selectionWidgetAttr');
                                var selection2v = document.getElementById('selectionWidgetAttr2');
                                var selection3v = document.getElementById('selectionWidgetAttr3');
                                var type = [];
                                type.push(selection2.options[selection2.selectedIndex].value);
                                if (!(document.getElementById('selectionWidgetAttr2').disabled)) {
                                    type.push(selection2v.options[selection2v.selectedIndex].value);
                                }
                                if (!(document.getElementById('selectionWidgetAttr3').disabled)) {
                                    type.push(selection2v.options[selection3v.selectedIndex].value);
                                }
                                switchVal = d3.select('input[name="graphType"]:checked').node().value;
                                var conVal = [];
                                for (p = 0; selection3[p]; ++p) {
                                    if (selection3[p].checked)
                                        conVal.push(selection3[p].value);
                                }
                                if (conVal.length == 0) {
                                    d3.select("#main").selectAll('g').remove();
                                    //alert("Please select at least one country from the checklist");
                                    if (switchVal == "scatter") {
                                        drawScatter(listOf, type, rangeval);
                                    }
                                } else {
                                    // clear the contents of the chart
                                    d3.select("#main").selectAll('g').remove();
                                    for (con in conVal) {
                                        localityName = conVal[con];
                                        // re-draw bar chart for the new locality
                                        if (switchVal == "bar") {
                                            drawBarChart(localityName, type, parseInt(con));
                                        } else if (switchVal == "line") {
                                            drawLineChart(localityName, type, parseInt(con));
                                        } else {
                                            drawScatter(listOf, type, rangeval);
                                        }
                                    }
                                }
                            });
                    }
                }
            });
            console.log(i + 1 + "file processed");

        }

        function drawBarChart(localityName, energyType, index) {

            for (k = 0; k < listOf.length; k++) {
                if (localityName == listOf[k].countryName) {
                    obj = listOf[k];
                    console.log(obj.countryName + " started");
                }
            }
            // get energy production for a country
            console.log(obj);
            console.log(energyType[0]);
            var energyProduction1 = [];
            var energyProduction2 = [];
            var energyProductiontotal = [];
            //d3.select('#label')
            //  .html(energyType.replace(/_/g, " ") + " " + units[energyType]);
            // chart size
            var chartWidth = 750;
            var chartHeight = 180;
            var offset = -10;

            dyny = 100 + 300 * (index);
            console.log(dynx + " " + dyny);
            // figure out the width of individual bars
            var barWidth = chartWidth / (2012 - 1980 + 1);

            //Data for Axes for e1
            energyProduction1 = obj[energyType[0]];
            console.log(energyProduction1[0]);
            // figure out maximum energy production
            var maxProduction1 = d3.max(energyProduction1);
            console.log(maxProduction);
            console.log(index);
            var maxProduction = maxProduction1;

            if (energyType.length > 1) {
                //Data for Axes for e2
                energyProduction2 = obj[energyType[1]];
                // figure out maximum energy production
                var maxProduction2 = d3.max(energyProduction2);
                maxProduction = Math.max(maxProduction1, maxProduction2);
                // create a y scale
                console.log("IMP" + maxProduction);
            }
            // create a y scale
            var yScale = d3.scaleLinear()
                .domain([0, maxProduction])
                .range([chartHeight, 0]);
            yScale.clamp(true);
            //create a x scale
            var timeScale = d3.scaleTime()
                .domain([new Date(1980, 0, 0), new Date(2012, 0, 0)])
                //.range([0, chartWidth]);
                .range([barWidth / 2, chartWidth + barWidth / 2]);

            // create x axis

            var xAxis = d3.axisBottom()
                .scale(timeScale)
                .ticks(22);

            // create y axis

            var yAxis = d3.axisLeft()
                .scale(yScale);
            // create y2 axis
            // if (energyType.length > 1) {
            //     var yAxis2 = d3.axisRight()
            //         .scale(y2Scale);
            // }

            // Define the div for the tooltip
            var div = d3.select("body").append("div")
                .attr("class", "tooltip")
                .style("opacity", 0);

            var group = d3.select("#main").append("g")
                .attr("transform", "translate(" + dynx + "," + dyny + ")");

            group.append("g")
                .attr('class', 'axis')
                .attr('transform', 'translate(-2,0)')
                .call(yAxis);
            group.append("g")
                .attr('class', 'axis')
                .attr('transform', 'translate(' + offset + ',' + chartHeight + ')')
                .call(xAxis);
            /*.selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-65)");*/
            //collect data
            if (energyType.length > 1) {
                barWidth = barWidth - barWidth / 2;
                for (var i = 0; i < 2 * (energyProduction1.length);) {
                    console.log("entered" + 2 * energyProduction1.length);
                    energyProductiontotal[i] = energyProduction1[i / 2];
                    energyProductiontotal[i + 1] = energyProduction2[i / 2];
                    i = i + 2;
                }
                console.log("Mergerd");
                group.selectAll("rect").data(energyProductiontotal).enter().append('rect')
                    .attr("x", function(d, i) {
                        return (i * barWidth);
                    })
                    .attr("y", function(d, i) {
                        return yScale(d);
                    })
                    .attr("width", barWidth)
                    .attr("height", function(d) {
                        return chartHeight - yScale(d);
                    })
                    .attr("class", "bar").on("mouseover", function(d, i) {
                        div.transition()
                            .duration(200)
                            .style("opacity", .9);
                        div.html(1980 + Math.floor((i / 2)) + " " + d)
                            .style("left", (d3.event.pageX) + "px")
                            .style("top", (d3.event.pageY - 28) + "px");
                    })
                    .on("mouseout", function(d) {
                        div.transition()
                            .duration(500)
                            .style("opacity", 0);
                    });


                // create a group for the bar chart
                // create a group for the bar chart
                d3.select('#main').append("g")
                    .append('text')
                    .attr("x", dynx - 30)
                    .attr("y", dyny - 30)
                    .html(localityName);

                drawLegend(energyType);


            } else {
                energyProductiontotal = energyProduction1;
                group.selectAll("rect").data(energyProduction1).enter().append('rect')
                    .attr("x", function(d, i) {
                        return i * barWidth;
                    })
                    .attr("y", function(d, i) {
                        return yScale(d);
                    })
                    .attr("width", barWidth)
                    .attr("height", function(d) {
                        return chartHeight - yScale(d);
                    })
                    //.attr("class","bar");
                    .style("stroke", "white")
                    .style("fill", "rgba(92, 113, 222, 0.98)")
                    .on("mouseover", function(d, i) {
                        div.transition()
                            .duration(200)
                            .style("opacity", .9);
                        div.html(1980 + i + " " + d)
                            .style("left", (d3.event.pageX) + "px")
                            .style("top", (d3.event.pageY - 28) + "px");
                    })
                    .on("mouseout", function(d) {
                        div.transition()
                            .duration(500)
                            .style("opacity", 0);
                    });

                // create a group for the bar chart
                d3.select('#main').append("g")
                    .append('text')
                    .attr("x", dynx - 30)
                    .attr("y", dyny - 30)
                    .html(localityName);

                drawLegend(energyType);
            }


        }


        function drawLineChart(localityName, energyType, index) {
            for (k = 0; k < listOf.length; k++) {
                if (localityName == listOf[k].countryName) {
                    obj = listOf[k];
                    console.log(obj.countryName + " started");
                }
            }
            var energyProduction1 = [];
            var energyProduction2 = [];
            var energyProductiontotal = [];
            // get energy production for a country
            console.log(energyType);
            // chart size
            var chartWidth = 750;
            var chartHeight = 150;
            var offset = -10;

            dyny = 100 + 300 * (index);
            console.log(dynx + " " + dyny);
            var barWidth = chartWidth / (2012 - 1980);
            //Data for Axes for e1
            energyProduction1 = obj[energyType[0]];
            console.log(energyProduction1);
            // figure out maximum energy production
            var maxProduction1 = d3.max(energyProduction1);
            console.log(maxProduction);
            console.log(index);
            var maxProduction = maxProduction1;

            if (energyType.length > 1) {
                //Data for Axes for e2
                energyProduction2 = obj[energyType[1]];
                // figure out maximum energy production
                var maxProduction2 = d3.max(energyProduction2);
                maxProduction = Math.max(maxProduction1, maxProduction2);
                // create a y scale
                console.log("IMP" + maxProduction);
            }
            // create a y scale
            var yScale = d3.scaleLinear()
                .domain([0, maxProduction])
                .range([chartHeight, 0]);
            yScale.clamp(true);
            // create x axis
            var timeScale = d3.scaleTime()
                .domain([new Date(1980, 0, 0), new Date(2012, 0, 0)])
                .range([barWidth / 2, chartWidth + barWidth / 2]);

            var xAxis = d3.axisBottom()
                .scale(timeScale);


            var div = d3.select("body").append("div")
                .attr("class", "tooltip")
                .style("opacity", 0);
            //Create line
            var lineFunction = d3.line()
                .x(function(d, i) {
                    return i * barWidth;
                })
                .y(function(d) {
                    return yScale(d);
                });


            //Label for the graph
            d3.select('#main').append("g")
                .append('text')
                .attr("x", dynx - 30)
                .attr("y", dyny - 30)
                .html(localityName);

            var group = d3.select("#main").append("g")
                .attr("transform", "translate(" + dynx + ", " + dyny + ")");

            group.append("path")
                .attr("d", lineFunction(energyProduction1))
                .attr("class", "line")
                .on("mouseover", function(d, i) {
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
                    div.html(yScale.invert(d3.event.pageY))
                        .style("left", (d3.event.pageX) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
                })
                .on("mouseout", function(d) {
                    div.transition()
                        .duration(500)
                        .style("opacity", 0);
                });
            if (energyType.length > 1) {
                group.append("path")
                    .attr("d", lineFunction(energyProduction2))
                    .attr("class", "line2");
            }
            // create y axis
            group.append("g")
                .attr('class', 'axis')
                .attr('transform', 'translate(' + offset + ',' + chartHeight + ')')
                .call(xAxis);

            var yAxis = d3.axisLeft()
                .scale(yScale);

            group.append("g")
                .attr('class', 'axis')
                .attr('transform', 'translate(-2,0)')
                .call(yAxis);

            drawLegend(energyType);

        }



        function drawScatter(objlist, energyType, yearval) {
            dynx = 100;
            dyny = 100;
            console.log("Scatter");
            var dataset = [];
            var temp1;
            var temp2 = [];
            var tempobj;
            var max = [0, 0, 0];

            for (var i = 0; i < listOfLocalities.length - 1; i++) {
                tempobj = objlist[i];
                for (var j = 0; j < 3; j++) {
                    temp1 = tempobj[energyType[j]];
                    try {
                        if (max[j] < temp1[yearval - 1980]) {
                            max[j] = temp1[yearval - 1980];
                            console.log(j + ": " + max[j]);
                        }
                    } catch (err) {
                        console.log(listOfLocalities[i]);
                        console.log(err.message);
                    }
                    temp2.push(temp1[yearval - 1980]);
                }
                temp2.push(listOfLocalities[i]);
                dataset.push(temp2);
                temp2 = [];
            }
            console.log(dataset);
            console.log(max);
            var chartWidth = 750;
            var chartHeight = 600;
            var offsetX = 0;
            var offsetY = 0;
            //create scales for scatterplot
            var yScale = d3.scaleLinear()
                .domain([0, max[1]])
                .range([chartHeight, 0]);
            yScale.clamp(true);
            var xScale = d3.scaleLinear()
                .domain([0, max[0]])
                .range([0, chartWidth]);
            xScale.clamp(true);

            var rScale = d3.scaleSequential(d3.interpolateRdPu);

            var offset = -10;

            // create x axis
            var xAxis = d3.axisBottom()
                .scale(xScale)

            var group = d3.select("#main").append("g")
                .attr("transform", "translate(" + dynx + "," + dyny + ")");

            // create y axis
            group.append("g")
                .attr('class', 'axis')
                .attr('transform', 'translate(0,' + chartHeight + ')')
                .call(xAxis);

            var yAxis = d3.axisLeft()
                .scale(yScale);

            group.append("g")
                .attr('class', 'axis')
                .attr('transform', 'translate(-2,0)')
                .call(yAxis);

            // create a group for the bar chart
            d3.select('#main').append("g")
                .append('text')
                .attr("x", dynx + 30)
                .attr("y", dyny - 30)
                .html("Scatterplot");
            //y axis
            group.append("g")
                .append('text')
                .attr('transform', 'translate(15,100) rotate(-90)')
                .style('font-size', '12')
                .html(energyType[1].replace(/_/g, " "));

            //x axis
            group.append("g")
                .append('text')
                .attr('transform', 'translate(650,590)')
                .style('font-size', '12')
                .html(energyType[0].replace(/_/g, " "));

            var div = d3.select("body").append("div")
                .attr("class", "tooltip")
                .style("opacity", 0);

            group.selectAll("circle").data(dataset).enter().append('circle')
                .attr("cx", function(d) {
                    return xScale(d[0]);
                })
                .attr("cy", function(d) {
                    return yScale(d[1]);
                })
                .attr("r", 10)
                //.attr("class","bar");
                .style("stroke", "white")
                .style("opacity", .7)
                .style("fill", function(d) {
                    return rScale(d[2]);
                })
                .on("mouseover", function(d, i) {
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
                    div.html(d[3])
                        .style("left", (d3.event.pageX) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
                })
                .on("mouseout", function(d) {
                    div.transition()
                        .duration(500)
                        .style("opacity", 0);
                });




            //drawLegend(energyType);
        }



        function drawLegend(energyType) {
            if (energyType.length > 1) {
                var legend = d3.select("#label").append("g");
                //legend variable 1
                legend.append("rect")
                    .attr("x", dynx + 200)
                    .attr("y", dyny - 50)
                    .attr("width", "20")
                    .attr("height", "20")
                    .attr("class", "legend");
                //legend variable 2
                legend.append("rect")
                    .attr("x", dynx + 500)
                    .attr("y", dyny - 50)
                    .attr("width", "20")
                    .attr("height", "20")
                    .attr("class", "legend");

                legend.append("text").
                html(energyType[0].replace(/_/g, " "))
                    .attr('class', 'legendtext')
                    .attr("x", dynx + 235)
                    .attr("y", dyny - 39)
                    .attr("dy", ".35em");

                legend.append("text").
                html(energyType[1].replace(/_/g, " "))
                    .attr('class', 'legendtext')
                    .attr("x", dynx + 535)
                    .attr("y", dyny - 39)
                    .attr("dy", ".35em");
            } else {
                var legend = d3.select("#label").append("g");

                legend.append("rect")
                    .attr("x", dynx + 200)
                    .attr("y", dyny - 50)
                    .attr("width", "20")
                    .attr("height", "20")
                    .attr("class", "legend");

                legend.append("text").
                html(energyType[0].replace(/_/g, " "))
                    .attr("x", dynx + 235)
                    .attr("y", dyny - 40)
                    .attr("dy", ".35em");
            }
        }
    </script>
</body>

</html>
