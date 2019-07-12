import styled from 'styled-components';

export const Container = styled.div`
  position        : relative;
  padding         : 6em 2em;
  background-color : #ECF0F1;
`;

export const Divider = styled.div`
  margin           : 2.7em 0 4em 0;
  width            : 100%;
  height           : 2px;
  background-color : #DEDEDE;
`;

const title = styled.h4`
  color     : #787878;
  margin    : 0 0 0 0.6em;
  font-size : 2em;
`;

export const Education = {
  title : styled(title)``,

  container : styled.ul`
    padding : 2em;
  `,

  item : {
    container : styled.li`
      color : #929292;
    `,

    timeRange : styled.div`
      display   : inline-block;
      color     : #FBA77A;
      font-size : 1.3em;
    `,

    description : styled.div`
      display   : inline-block;
      font-size : 1.3em;
    `,

    website : styled.a`
      color     : #00ADB5;
      font-size : 1.3em;
    `
  }
};

export const Career = {
  title : styled(title)``,

  container : styled.ul`
    padding : 2em;
  `,

  item : {
    container : styled.li`
      color  : #929292;
      margin : 0 0 1em 0
    `,

    timeRange : styled.div`
      display   : inline-block;
      color     : #FBA77A;
      font-size : 1.3em;
    `,

    description : styled.div`
      display   : inline-block;
      font-size : 1.3em;
    `,

    website : styled.a`
      color     : #00ADB5;
      font-size : 1.3em;
    `
  }
};

export const Skills = {
  title : styled(title)``,

  container : styled.ul`
    padding : 2em;
  `,

  items : level => ({
    li : styled.li`
      color    : #929292;
      position : relative;
      margin   : 0.5em 0;
    `,

    container : styled.div`
      height : 1em;
    `,

    name : styled.div`
      position         : absolute;
      top              : -0.2em;
      padding          : 0 0.7em 0 0;
      font-size        : 1.2em;
      background-color : #ECF0F1;
      z-index          : 900;
    `,

    done : styled.div`
      position         : absolute;
      height           : 2px;
      top              : 0.4em;
      width            : ${level}%;
      background-color : #AAA;
      zIndex           : 800;

      @media (min-width: 1201px) {
        width : ${level * 0.9}%;
      },

    `,

    icon : styled.i`
      position : absolute;
      top      : 0.05em;
      left     : ${level}%;

      @media (min-width: 1201px) {
        left : ${level * 0.9}%;
      },
    `
  })
};

export const Open = {
  title : styled(title)``,

  container : styled.ul`
    padding : 2em;
  `,

  item : {
    container : styled.li`
      color  : #929292;
      margin : 0 0 1em 0;
    `,

    website : styled.a`
      color     : #00ADB5;
      margin    : 0 0.5em 0 0;
      font-size : 1.3em;
    `
  }
};

export const Websites = {
  title : styled(title)`
    margin-bottom : 1em;
  `,

  items : width => ({
    container : styled.li`
      display           : inline-block;
      width             : ${width}em;
      padding           : 0.5em 0.5em;
      background-color  : #E6E6E6;
      border-radius     : 0.5em;
      margin            : 1em;
    `,

    subContainer : styled.div`
      color   : #929292;
      display : inline-block;
    `,

    favicon : styled.img`
      width  : 1.4em;
      height : 1.4em;
      margin : 0 0.5em -0.35em 0;
    `,

    link : styled.a`
      color     : #00ADB5;
      font-size : 1.2em;
    `,

    label : styled.p`
      display   : inline;
      font-size : 1.2em;
    `
  })
};
