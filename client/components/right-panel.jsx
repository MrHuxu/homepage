import React, { Component } from 'react';
import Radium, { Style } from 'radium';

import {
  global, container, title,
  education as educationStyle,
  career as careerStyle,
  open as openStyle,
  work as workStyle,
  websites as websitesStyle
} from '../styles/right-panel';

import { education, career, projects, websites } from '../data';
const { open, work } = projects;

@Radium
class RightPanel extends Component {
  render () {
    return (
      <div className="right-panel" style={ container }>
        <Style rules={ global } />

        <div style={ title }>
          xhu
        </div>

        <h4 style={ educationStyle.title }> /* Education */ </h4>
        <ul style={ educationStyle.container }>
          { education.map(e => (
            <li key={ e.timeRange }>
              <div style={ educationStyle.container.timeRange }> { e.timeRange } </div>
              ,&nbsp;
              <a
                style={ educationStyle.container.website }
                href={ e.description.url }
              >
                { e.description.label }
              </a>
              ,&nbsp;
              <div style={ educationStyle.container.description }> { e.description.title } </div>
            </li>
          )) }
        </ul>

        <h4 style={ careerStyle.title }> /* Career */ </h4>
        <ul style={ careerStyle.container }>
          { career.map(c => (
            <li key={ c.timeRange }>
              <div style={ careerStyle.container.timeRange }> { c.timeRange } </div>
              ,&nbsp;
              <div style={ careerStyle.container.description }> { c.description.title } at </div>
              <a style={ careerStyle.container.website }href={ c.description.url }> { c.description.label } </a>
            </li>
          )) }
        </ul>

        <h4 style={ workStyle.title }> /* Projects */</h4>
        <ul style={ workStyle.container }>
          { work.map(w => (
            <li key={ w.name } style={ workStyle.container.item }>
              <div style={ workStyle.container.item.name }> { w.name } </div>
              <div style={ workStyle.container.item.techStack }> { w.techStack.join(' · ') } </div>
              <div style={ workStyle.container.item.description }> { w.description.label } </div>
            </li>
          )
          ) }
        </ul>

        <h4 style={ openStyle.title }> /* Open-source Contributions */ </h4>
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

        <ul style={ websitesStyle }>
          <h4 style={ websitesStyle.title }> /* Websites */ </h4>
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
