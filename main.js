const { select } = d3;

// create container for animations
const bodyWidth = document.body.clientWidth;
const bodyHeight = document.body.clientHeight;
const containerWidth = 660;
const containerHeight = 350;
const div = select('body')
  .append('div')
  .attr('id', 'detail')
  .style('width', `${containerWidth}px`)
  .style('margin', `250px 0 0 ${(bodyWidth - containerWidth) / 2}px`)
  .style('height', `${containerHeight}px`);

// seperate the container into two parts
const leftContainer = div.append('div')
  .attr('id', 'left-container')
  .style('height', `${containerHeight}px`);
const rightContainer = div.append('div')
  .attr('id', 'right-container')
  .style('height', `${containerHeight}px`);
