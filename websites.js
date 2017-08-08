
// websites container
const websitesContainerWidth = (bodyWidth - containerWidth) / 2 + 70;
const websitesContainer = leftContainer.append('div')
  .attr('id', 'websites-container')
  .style('width', `${websitesContainerWidth}px`);

// websites elements
const websitesEles = websitesContainer.selectAll('.websites-ele')
  .data(websites)
  .enter()
  .append('div')
  .attr('class', 'websites-ele')
  .style('margin-left', `${websitesContainerWidth + 80}px`);

websitesEles.html(d => `
  <div>
    <img src="${d.favicon}" />
  </div>
  <div class="websites-detail-container">
    <a target="_blank" href="http://${d.url}">${d.url}</a>
    <p>,&nbsp;${d.label}</p>
  </div>
`);
  
websitesEles.on('mouseover', function (d, i) {
  select(this)
    .transition()
    .duration(500)
    .style('margin-left', `${websitesContainerWidth - d.width}px`);
}).on('mouseout', function () {
  select(this)
    .transition()
    .duration(300)
    .style('margin-left', `${websitesContainerWidth - 30}px`);
});
 
websitesEles.transition()
  .duration(1000)
  .delay((d, i) => i * 200 + 600)
  .style('margin-left', `${websitesContainerWidth - 30}px`);

