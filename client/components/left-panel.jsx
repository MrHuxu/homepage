import React, { Component } from 'react';
import Radium, { Style } from 'radium';

import { links, websites, skills } from '../data';

import { global, container, title, websites as websitesStyle, skills as skillsStyle, icons } from '../styles/left-panel';

@Radium
class LeftPanel extends Component {
  render () {
    return (
      <div className="left-panel" style={ container }>
        <Style rules={ global } />

        <div style={ title }>
          <div style={ title.container }>
            <div style={ title.container.postfix }>
              Programmer<br />
              Web Developer<br />
              Fighter !<br />
            </div>
          </div>
        </div>

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

        <ul style={ skillsStyle }>
          <h4 style={ skillsStyle.title }> /* Skills */ </h4>
          { skills.map(skill => {
            const liStyle = skillsStyle.li(skill.level);
            const { progress } = liStyle;
            return (
              <li key={ skill.name } style={ liStyle }>
                <p style={ liStyle.p }>{ skill.name }</p>
                <div style={ progress }>
                  <i className="fa fa-circle" style={ progress.icon } />
                  <div style={ progress.done } />
                </div>
              </li>
            );
          }
          ) }
        </ul>

        <ul style={ icons }>
          { links.map(link => (
            <li key={ link.href } style={ icons.li }>
              <a
                className={ link.className }
                href={ link.href }
                style={ icons.li.a }
                target="_blank"
              />
            </li>
          )
          ) }
        </ul>
      </div>
    );
  }
}

export default LeftPanel;
