var w = 500,
	h = 500;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['Manhã', 'Tarde', 'Noite'];

//Data
var d = [
		  [
			{axis:"0",value:1},
			{axis:"1",value:0},
			{axis:"2",value:2},
			{axis:"3",value:4},
			{axis:"4",value:3},
			{axis:"5",value:5},
			{axis:"6",value:3},
			{axis:"7",value:20},
			{axis:"8",value:8},
			{axis:"9",value:5},
		  ],[
        {axis:"0",value:4},
  			{axis:"1",value:0},
  			{axis:"2",value:5},
  			{axis:"3",value:7},
  			{axis:"4",value:9},
  			{axis:"5",value:13},
  			{axis:"6",value:17},
  			{axis:"7",value:20},
  			{axis:"8",value:19},
  			{axis:"9",value:6},
		  ],[
        {axis:"0",value:4},
  			{axis:"1",value:4},
  			{axis:"2",value:1},
  			{axis:"3",value:9},
  			{axis:"4",value:8},
  			{axis:"5",value:16},
  			{axis:"6",value:9},
  			{axis:"7",value:30},
  			{axis:"8",value:13},
  			{axis:"9",value:5},
		  ]
		];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 0.6,
  levels: 6,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)

//Create the title for the legend
var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)')
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("Turno");

//Initiate Legend
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)')
	;
	//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i){ return colorscale(i);})
	  ;
	//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;
