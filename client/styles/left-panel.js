import { keyframes } from 'radium';

export const global = {
  '.left-panel *' : {
    color : '#ECF0F1'
  },

  '.left-panel li' : {
    listStyleType : 'none'
  }
};

export const container = {
  position : 'relative',
  width    : '100%',
  height   : '100%',
  padding  : '4em 0 0 0'
};

export const titleCommon = {
  fontSize   : '2.5em',
  lineHeight : '1.3em',
  position   : 'absolute'
};

const titleKeyframes = keyframes({
  '0%, 20%, 100%' : { top: '0' },
  '25%, 45%'      : { top: '-1.3em' },
  '50%, 70%'      : { top: '-2.6em' },
  '75%, 95%'      : { top: '-1.3em' }
}, 'title');

export const title = {
  container : {
    position : 'relative',
    width    : '100%',
    height   : '3.3em',
    overflow : 'hidden',

    label : {
      ...titleCommon,
      width         : '260px',
      right         : '0',
      textAlign     : 'right',
      animation     : '10s linear 0s normal none infinite',
      animationName : titleKeyframes
    }
  }
};

export const skills = {
  position  : 'absolute',
  textAlign : 'right',
  float     : 'right',
  right     : '0',
  bottom    : '15em',

  title : {
    margin : '0 21px 18px 0',
    color  : '#777'
  },

  li : level => ({
    margin : '0 0 16px 0',

    p : {
      margin : '0 12px 0 0'
    },

    progress : {
      position        : 'relative',
      width           : '480px',
      height          : '2px',
      margin          : '5px 0 0 0',
      backgroundColor : 'rgba(255, 255, 255, 0)',

      icon : {
        position : 'absolute',
        top      : '-8px',
        left     : `${100 - level}%`
      },

      done : {
        margin          : `0 0 0 ${100 - level}%`,
        width           : `${level}%`,
        height          : '2px',
        backgroundColor : 'rgb(236, 240, 241)'
      }
    }
  })
};

export const icons = {
  position : 'absolute',
  right    : '2em',
  bottom   : '7em',

  li : {
    display : 'inline-block',
    margin  : '0 0 0 15px',

    a : {
      fontSize : '2em',
      color    : 'rgba(255,255,255,0.4)'
    }
  }
};
