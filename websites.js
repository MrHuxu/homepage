
// websites container
const websitesContainerWidth = (bodyWidth - containerWidth) / 2 + 70;
const websitesContainer = leftContainer.append('div')
  .attr('id', 'websites-container')
  .style('width', `${websitesContainerWidth}px`);

const websitesMetadatas = [{
  background : '#daeef9',
  width      : 210
}, {
  background : '#d5d8d4',
  width      : 200
}, {
  background : '#dadcdf',
  width      : 320
}, {
  background : '#e7eaef'
}];

// websites elements
const websitesEles = websitesContainer.selectAll('.websites-ele')
  .data(websites)
  .enter()
  .append('div')
  .attr('class', 'websites-ele')
  .style('margin-left', `${websitesContainerWidth + 80}px`)
  .style('background-color', (d, i) => websitesMetadatas[i].background);

websitesEles.html(d => `
  <img src='${d.favicon}' />
  <a target='_blank' href='http://${d.url}'>${d.url}</a>
  <p>,&nbsp;${d.label}</p>
`);
  
websitesEles.on('mouseover', function (d, i) {
  select(this)
    .transition()
    .duration(500)
    .style('margin-left', `${websitesContainerWidth - websitesMetadatas[i].width}px`);
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

