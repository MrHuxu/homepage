const careerContainerHeight = containerHeight / 2;
const careerContainer = rightContainer.append('div')
  .attr('id', 'career-container')
  .style('height', `${careerContainerHeight}px`);

careerContainer.style('opacity', 0)
  .style('margin-left', '-300px')
  .transition()
  .duration(1000)
  .style('opacity', 0.9)
  .style('margin-left', '20px');

careerContainer.append('h2').text('Career');

const careerItemsContainer = careerContainer.append('ul');
careerItemsContainer.selectAll('li')
  .data(career)
  .enter()
  .append('li')
  .html(d => `
    <p>${d.timeRange}&nbsp;:&nbsp;</p>
    <a
      class='career-detail'
      target='_blank'
      href=${d.description.url}
    >
      ${d.description.label}
    </a>
  `);