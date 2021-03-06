import React from 'react';

import { Container, Avatar, Intro, Title, Icons } from './elements';

import { links } from '../../data';

const LeftPanel = () => (
  <Container>
    <Avatar.container>
      <Avatar.img src="https://img.xhu.me/avatar/square.jpeg" />
    </Avatar.container>

    <Intro.container>
      <Intro.item.container>
        <Intro.item.prefix>I'm&nbsp;</Intro.item.prefix>
        <Intro.item.content>xhu(胡旭),</Intro.item.content>
      </Intro.item.container>
      <Intro.item.container>
        <Intro.item.prefix>aka&nbsp;</Intro.item.prefix>
        <Intro.item.content>hxtheone,</Intro.item.content>
      </Intro.item.container>
      <Intro.item.container>
        <Intro.item.prefix>aka&nbsp;</Intro.item.prefix>
        <Intro.item.content>TDFJ(跳大飞机),</Intro.item.content>
      </Intro.item.container>
    </Intro.container>

    <Title.container>
      <Title.prefix>A</Title.prefix>
      <Title.label.container>
        <Title.label.item>Programmer</Title.label.item>
        <Title.label.item>Web Developer</Title.label.item>
        <Title.label.item>Fighter !</Title.label.item>
      </Title.label.container>
    </Title.container>

    <Icons.list>
      {links.map(link => (
        <Icons.item.container key={link.href}>
          <Icons.item.link
            className={link.className}
            href={link.href}
            target="_blank"
          />
        </Icons.item.container>
      ))}
    </Icons.list>
  </Container>
);

export default LeftPanel;
