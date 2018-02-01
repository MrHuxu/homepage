import React, { Component } from 'react';
import Radium, { Style } from 'radium';

import { links } from '../data';

import { global, container, avatar, introduction, title, icons } from '../styles/left-panel';

@Radium
class LeftPanel extends Component {
  render () {
    return (
      <div className="left-panel" style={ container }>
        <Style rules={ global } />

        <div style={ avatar }>
          <img style={ avatar.img } src="https://avatars3.githubusercontent.com/u/2713125?s=400&u=34b6e592249c652609a7242fe5a656a1f3929b86&v=4" />
        </div>

        <div style={ introduction }>
          <div style={ introduction.container }>
            <span style={ introduction.container.prefix }>I'm&nbsp;</span>
            <span style={ introduction.container.content }>xhu(胡旭),</span>
          </div>
          <div style={ introduction.container }>
            <span style={ introduction.container.prefix }>aka&nbsp;</span>
            <span style={ introduction.container.content }>hxtheone,</span>
          </div>
          <div style={ introduction.container }>
            <span style={ introduction.container.prefix }>aka&nbsp;</span>
            <span style={ introduction.container.content }>TDFJ(跳大飞机).</span>
          </div>
        </div>

        <div style={ title.container }>
          <div style={ title.container.prefix }>A</div>
          <div style={ title.container.label }>
            <div style={ title.container.label.div }>Programmer</div>
            <div style={ title.container.label.div }>Web Developer</div>
            <div style={ title.container.label.div }>Fighter !</div>
          </div>
        </div>

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
