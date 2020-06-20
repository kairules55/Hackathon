let corrdinates = [
  { x: 4, y: 5 },
  { x: 20, y: 30 },
  { x: 75, y: 85 },
  { x: 95, y: 20 },
  { x: 50, y: 60 },
];

let selection = d3
  .select("body")
  .select("#site-container")
  .select("#graph-container")
  .append("svg")
  .attr("width", 60 + "%")
  .attr("height", 100 + "%")
  .style("border", "1px solid black");

let circles = selection
  .selectAll("circle")
  .data(corrdinates)
  .enter()
  .append("circle")
  .attr("cx", function (d) {
    return d.x;
  })
  .attr("cy", function (d) {
    return d.y;
  })
  .attr("r", 2)
  .style("fill", "red")
  .on("click", function (d) {
    alert(d.x);
  });

let circle2 = selection
  .selectAll("circle")
  .data(corrdinates)
  .attr("cx", function (d) {
    return d.x;
  })
  .attr("cy", function (d) {
    return d.y;
  })
  .attr("r", 4)
  .style("fill", "blue")
  .on("click", function (d) {
    alert(d.x);
  });
