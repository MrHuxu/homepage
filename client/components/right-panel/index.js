import React from 'react';

import { Container, Divider, Education, Career, Skills, Open, Websites } from './elements';

import { education, career, skills, projects, websites } from '../../data';
const { open } = projects;

const RightPanel = () => (
  <Container>
    <Education.title> Education </Education.title>
    <Education.container>
      { education.map(e => (
        <li key={ e.timeRange }>
          <Education.item.timeRange>{ e.timeRange }</Education.item.timeRange>
      ,&nbsp;
          <Education.item.description> { e.description.title } at&nbsp;</Education.item.description>
          <Education.item.website
            target="_blank"
            href={ e.description.url }
          >
            { e.description.label }
          </Education.item.website>
        </li>
      )) }
    </Education.container>

    <Divider />

    <Career.title> Career </Career.title>
    <Career.container>
      { career.map(c => (
        <Career.item.container key={ c.timeRange }>
          <Career.item.timeRange> { c.timeRange } </Career.item.timeRange>
          ,&nbsp;
          <Career.item.description> { c.description.title } at&nbsp;</Career.item.description>
          <Career.item.website
            target="_blank"
            href={ c.description.url }
          >
            { c.description.label }
          </Career.item.website>
        </Career.item.container>
      )) }
    </Career.container>

    <Divider />

    <Skills.title> Skills </Skills.title>
    <Skills.container>
      { skills.map(skill => {
        const ItemStyle = Skills.items(skill.level);
        return (
          <ItemStyle.li key={ skill.name }>
            <ItemStyle.container>
              <ItemStyle.name>{ skill.name }</ItemStyle.name>
              <ItemStyle.done>{ skill.done }</ItemStyle.done>
              <div>
                <ItemStyle.icon className="fa fa-circle" />
              </div>
            </ItemStyle.container>
          </ItemStyle.li>
        );
      }) }
    </Skills.container>

    <Divider />

    <Open.title> Open-source Contributions </Open.title>
    <Open.container>
      { open.map(o => (
        <Open.item.container key={ o.label }>
          <Open.item.website
            target="_blank"
            href={ o.url }
          >
            { o.label }
          </Open.item.website>
        </Open.item.container>
      )) }
    </Open.container>

    <Divider />

    <Websites.title> Websites </Websites.title>
    { websites.map(site => {
      const ItemStyle = Websites.items(site.width);
      return (
        <ItemStyle.container key={ site.url }>
          <ItemStyle.subContainer>
            <ItemStyle.favicon src={ site.favicon } />
          </ItemStyle.subContainer>
          <ItemStyle.subContainer>
            <ItemStyle.link
              target="_blank"
              href={ `http://${site.url}` }
            >
              { site.url }
            </ItemStyle.link>
            <ItemStyle.label>,&nbsp;{ site.label }</ItemStyle.label>
          </ItemStyle.subContainer>
        </ItemStyle.container>
      );
    }) }

  </Container>
);

export default RightPanel;
