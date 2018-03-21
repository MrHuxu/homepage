import React, { Component } from 'react';
import Radium, { Style } from 'radium';

import {
  global, container, divider,
  education as educationStyle,
  career as careerStyle,
  skills as skillsStyle,
  open as openStyle,
  websites as websitesStyle
} from '../styles/right-panel';

import { education, career, skills, projects, websites } from '../data';
const { open } = projects;

@Radium
class RightPanel extends Component {
  render () {
    return (
      <div className="right-panel" style={ container }>
        <Style rules={ global } />

        <h4 style={ educationStyle.title }> Education </h4>
        <ul style={ educationStyle.container }>
          { education.map(e => (
            <li key={ e.timeRange }>
              <div style={ educationStyle.container.timeRange }> { e.timeRange } </div>
              ,&nbsp;
              <div style={ educationStyle.container.description }> { e.description.title } at&nbsp;</div>
              <a
                target="_blank"
                style={ educationStyle.container.website }
                href={ e.description.url }
              >
                { e.description.label }
              </a>

            </li>
          )) }
        </ul>

        <div style={ divider } />

        <h4 style={ careerStyle.title }> Career </h4>
        <ul style={ careerStyle.container }>
          { career.map(c => (
            <li key={ c.timeRange }>
              <div style={ careerStyle.container.timeRange }> { c.timeRange } </div>
              ,&nbsp;
              <div style={ careerStyle.container.description }> { c.description.title } at&nbsp;</div>
              <a
                target="_blank"
                style={ careerStyle.container.website }
                href={ c.description.url }
              >
                { c.description.label }
              </a>
            </li>
          )) }
        </ul>

        <div style={ divider } />

        <h4 style={ skillsStyle.title }> Skills </h4>
        <ul style={ skillsStyle.container }>
          { skills.map(skill => {
            const liStyle = skillsStyle.container.li(skill.level);
            return (
              <li key={ skill.name } style={ liStyle }>
                <div style={ liStyle.container }>
                  <div style={ liStyle.container.p }>{ skill.name }</div>
                  <div style={ liStyle.container.done } />
                  <div>
                    <i className="fa fa-circle" style={ liStyle.container.icon } />
                  </div>
                </div>
              </li>
            );
          }
          ) }
        </ul>

        <div style={ divider } />

        <h4 style={ openStyle.title }> Open-source Contributions </h4>
        <ul style={ openStyle.container }>
          { open.map(o => (
            <li key={ o.label } style={ openStyle.container.item }>
              <a
                style={ openStyle.container.item.website }
                target="_blank"
                href={ o.url }
              >
                { o.label }
              </a>
            </li>
          )
          ) }
          <li key="etc" style={ openStyle.container.item }>
            <a style={ openStyle.container.item.website }>
              etc.
            </a>
          </li>
        </ul>

        <div style={ divider } />

        <ul style={ websitesStyle }>
          <h4 style={ websitesStyle.title }> Websites </h4>
          { websites.map(site => {
            const liStyle = websitesStyle.li(site.width);
            return (
              <li style={ liStyle } key={ site.url }>
                <div style={ liStyle.container }>
                  <img src={ site.favicon } style={ liStyle.container.img } />
                </div>
                <div style={ liStyle.container }>
                  <a
                    style={ liStyle.container.a }
                    target="_blank"
                    href={ `http://${site.url}` }
                  >
                    { site.url }
                  </a>
                  <p style={ liStyle.container.p }>,&nbsp;{ site.label }</p>
                </div>
              </li>
            );
          }
          ) }
        </ul>

      </div>
    );
  }
}

export default RightPanel;
