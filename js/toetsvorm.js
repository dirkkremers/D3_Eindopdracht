function toetsvorm() {
	
	//Variabelen
	var totaal = [102, 33, 17];
	var jaar1 = [41, 18, 4];
	var jaar2 = [33, 15, 4];
	var jaar3 = [19, 0, 8];
	var jaar4 = [9, 0, 1];
	
	var color = ["#203766","#3a64bb","#83a5ee"];

	var width = 500;
	var height = 500;
	var radius = Math.min(width, height) /2;

	var pie = d3.layout.pie().sort(null);													

	var arc = d3.svg.arc().innerRadius(radius-120).outerRadius(radius-50);					

	//Pie chart
	var svg = d3.select("#toetsvorm").append("svg")
		.attr("width", width)
		.attr("height", 460)
		.attr("class", "toetsvorm")																
		.append("g")
		.attr("transform", "translate("+width/2+", "+height/2+")");								
 
	var path = svg.selectAll("path")														
		.data(pie(totaal))																		
		.enter() 
		.append("path")
		.attr("fill", function(d,i) { return color[i];})										
		.attr("d", arc)
		.each(function(d) { this._current = d; }); 

	//Button clicks	
	function updateDonut(data) {
		var path = d3.select("#toetsvorm svg").selectAll("path");
		path.data(pie(data));
		path.transition().duration(1000).attrTween("d", arcTween) 			
	}
	
	d3.select("#toetsvorm_totaal").on('click', function() {
		var labels = svg.selectAll("text")
		updateDonut(totaal);
	});
	
	d3.select("#toetsvorm_jaar1").on('click', function() {
		var labels = svg.selectAll("text")
		updateDonut(jaar1);
	});
	
	d3.select("#toetsvorm_jaar2").on('click', function() {
		updateDonut(jaar2);		
	});
	
	d3.select("#toetsvorm_jaar3").on('click', function() {
		updateDonut(jaar3);
	});
	
	d3.select("#toetsvorm_jaar4").on('click', function() {
		updateDonut(jaar4);
	});
	
	//Rond animeren
	function arcTween(a) {													
		var i = d3.interpolate(this._current, a);
		this._current = i(0);
		return function(t) {
			return arc(i(t));
		};
	} 			
} //einde toetsvorm()		


 