function cijfers() {

	d3.csv("dataset/dataset_cijfers.csv", draw);
	
	function draw(data) {	
		
		//Variabelen
		var width = 1200;
		var height = 500;
	
		var canvas = d3.select("#cijfers").append("svg")
				.attr("width", width)
				.attr("height", height)
		
		var widthScale = d3.scale.linear()
					.domain([10, 0])
					.range([0, height]);
		
		var yaxis = d3.svg.axis()
				.ticks(11)
				.orient("right")
				.scale(widthScale);
		
		//Staven
		canvas.selectAll("rect")
				.data(data)
				.enter()
					.append("rect")
					.attr("fill", "#203766")					
					.attr("width", 7.4)
					.attr("height", function (d) { return d.punt * 5; })
					.attr("y", function (d) { return 510 - d.punt * 5; })
					.attr("x", function (d, i) { return i * 7.6; });

		//Axis			
		canvas.append("g")
				.attr("transform", "translate(1170,10)")
				.attr("class", "axis")
				.call(yaxis);
			
		//Button clicks
		d3.select('#cijfers_jaar1').on('click', function() {	
			var canvas = d3.select("#cijfers").selectAll("rect")
					.transition()
					.duration(1000)
					.style("fill", function(d) {        
						if (d.jaar == 1) 
							if (d.punt < 55) {return "#c94540"}		
								else {return "#488a30"}				
					;}) 
			})
				
		d3.select('#cijfers_jaar2').on('click', function() {	
			var canvas = d3.select("#cijfers").selectAll("rect")
					.transition()
					.duration(1000)
					.style("fill", function(d) {        
						if (d.jaar == 2) 
							if (d.punt < 55) {return "#c94540"}	
								else {return "#488a30"}
					;}) 
			})

		d3.select('#cijfers_jaar3').on('click', function() {	
			var canvas = d3.select("#cijfers").selectAll("rect")
					.transition()
					.duration(1000)
					.style("fill", function(d) {        
						if (d.jaar == 3)  
							if (d.punt < 55) {return "#c94540"}	
								else {return "#488a30"}                  
					;}) 
			})
				
		d3.select('#cijfers_jaar4').on('click', function() {	
			var canvas = d3.select("#cijfers").selectAll("rect")
					.transition()
					.duration(1000)
					.style("fill", function(d) {        
						if (d.jaar == 4)  
							if (d.punt < 55) {return "#c94540"}	
								else {return "#488a30"}                 
					;}) 
			})
				
	} // einde draw()
} // einde cijfers()
				
	