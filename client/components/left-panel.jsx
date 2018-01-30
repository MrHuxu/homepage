import React, { Component } from 'react';
import Radium, { Style } from 'radium';

import { links, skills } from '../data';

import { global, container, title, skills as skillsStyle, icons } from '../styles/left-panel';

@Radium
class LeftPanel extends Component {
  render () {
    return (
      <div className="left-panel" style={ container }>
        <Style rules={ global } />

        <div style={ title.container }>
          <div style={ title.container.label }>
              Programmer<br />
              Web Developer<br />
              Fighter !<br />
          </div>
        </div>

        <ul style={ skillsStyle }>
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
