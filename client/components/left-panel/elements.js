import styled from 'styled-components';

export const Container = styled.div`
  position : relative;
  height   : calc(100% - 10em);
  padding  : 5em 3em 5em 0;

  @media (max-width: 680px) {
    height : 42em;
  }
`;

export const Avatar = {
  container : styled.div`
    position : relative;
    height   : 24em;
  `,

  img : styled.img`
    position : absolute;
    right    : 0;
    width    : 24em;
  `
};

export const Intro = {
  container : styled.div`
    position  : relative;
    text-align : right;
    margin    : 1.2em 0 0 0;
  `,

  item : {
    container : styled.div`
      margin : 0.5em 0 0 0;
    `,

    prefix : styled.span`
      color    : #888;
      font-size : 1.7em;
      margin   : 0 0.3em 0 0;
    `,

    content : styled.span`
      fontSize : 1.7em;
    `
  }
};

export const Title = {
  container : styled.div`
    position : relative;
    width    : 100%;
    height   : 3.4em;
    overflow : hidden;
  `,

  prefix : styled.div`
    color      : #888;
    position   : absolute;
    right      : 7.8em;
    font-size   : 1.7em;
    line-height : 2em;
  `,

  label : {
    container : styled.div`
      position      : absolute;
      width         : 18.5em;
      right         : 0;
      text-align     : right;
      animation     : 10s linear 0s normal none infinite;
      animation-name : titleKeyframes;
    `,

    item : styled.div`
      font-size   : 1.7em;
      line-height : 2em;
    `
  }
};

export const Icons = {
  list : styled.ul`
    position : absolute;
    right    : 3em;
    bottom   : 5em;
  `,

  item : {
    container : styled.li`
      display : inline-block;
      margin  : 0 0 0 1.5em;
    `,

    link : styled.a`
      font-size : 2em;
      color    : rgba(255,255,255,0.4);
    `
  }
};
