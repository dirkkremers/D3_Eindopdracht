function herkansingen() {

	d3.csv("dataset/dataset_herkansingen.csv", function (data) {
		
		//Variabelen
		var width = 1200;
		var height = 525;
		
		var canvas = d3.select("#herkansingen").append("svg")
				.attr("width", width)
				.attr("height", height)
	
		var widthScale = d3.scale.linear()
				.domain([0, 10])
				.range([0, 1000]);

		var color = d3.scale.linear()
				.domain([0, 10])
				.range(["red", "green"])		

		var axis = d3.svg.axis()
				.ticks(10)
				.scale(widthScale);			
		
		//Cirkels
		canvas.selectAll("circle")
			.data(data)
			.enter()
				.append("circle")
				.attr("fill", "#c94540")
				.attr("width", function(d) { return widthScale(d); })
				.attr("cx", function (d) { return 190 + d.onvoldoende * 10; })
				.attr("cy", function (d, i) { return i * 50 + 50; })
				.attr("r", 20)
		
		//Tekst
		var text = canvas.selectAll("text")
				.data(data)
				.enter()
				.append("text")
				.attr("x", 0)
				.attr("y", function (d, i) { return i * 50 + 50; })
				.text( function (d) { return d.vak; })
				.attr("font-size", "0.75em")
                .attr("fill", "#202020");

		//Axis
		canvas.append("g")
			.attr("transform", "translate(190, 500)")
			.attr("class", "axis")
			.call(axis);
	
		//Button clicks
		d3.select('#cijfers_poging1').on('click', function() {	
		var canvas = d3.select("#herkansingen").selectAll("circle")
				.transition()
				.delay(500)
				.duration(1500)
				.attr("cx", function (d) { return 190 + d.onvoldoende * 10;})  
				.attr("fill", "#c94540");
		}) 
		
		d3.select('#cijfers_poging2').on('click', function() {	
		var canvas = d3.select("#herkansingen").selectAll("circle")
				.transition()
				.delay(500)
				.duration(1500)
				.attr("cx", function (d) { return 190 + d.voldoende * 10;})           
				.attr("fill", "#488a30");
		}) 
		
	}) //einde function (data)
} //einde herkansingen()

				
	