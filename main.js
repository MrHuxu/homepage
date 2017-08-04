const { select } = d3;

const bodyWidth = document.body.clientWidth;
const bodyHeight = document.body.clientHeight;
const svg = select('body')
  .append('svg')
  .attr('width', bodyWidth)
  .attr('height', bodyHeight);

// const containerWidth = 600;
// const containerHeight = 400;
// const detailContainer = svg.append('g')
//   .attr('transform', `translate(${(bodyWidth - containerWidth) / 2}, 200)`);

const websiteEles = svg.selectAll('.website-ele')
  .data(websites)
  .enter()
  .append('text')
  .attr('class', 'website-ele')
  .attr('y', (d, i) => (i + 1) * 20)
  .text(d => d.label)
  .style('color', '#FFFFFF');

const skillEles = svg.selectAll('.skill-ele')
  .data(skills)
  .enter()
  .append('text')
  .attr('class', 'skill-ele')
  .text(d => `${d.key} : ${d.value}`);

const careerEles = svg.selectAll('.career-ele')
  .data(career)
  .enter()
  .append('text')
  .attr('class', 'career-ele')
  .text(d => `${d.timeRange} : ${d.description.label}`);