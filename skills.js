const skillsContainerHeight = containerHeight * 0.45;
const skillsContainer = rightContainer.append('div')
  .attr('id', 'skills-container')
  .style('height', `${skillsContainerHeight}px`);

skillsContainer.style('opacity', 0)
  .style('margin-left', '-300px')
  .transition()
  .duration(1000)
  .style('opacity', 0.9)
  .style('margin-left', '20px');

skillsContainer.append('h2').text('Skill Set');

const skillsItemsContainer = skillsContainer.append('ul');
skillsItemsContainer.selectAll('li')
  .data(skills)
  .enter()
  .append('li')
  .html(d => `
    <p> ${d.key} : <p>
    <p class='skills-detail'> ${d.value} </p>
  `);
