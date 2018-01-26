import { keyframes } from 'radium';

export const global = {
  '.left-panel *' : {
    color : '#ECF0F1'
  }
};

export const container = {
  position        : 'relative',
  width           : '100%',
  height          : '100%',
  padding         : '180px 0 0 0',
  backgroundColor : '#393E46'
};

const titleCommon = {
  fontSize   : '35px',
  lineHeight : '40px',
  position   : 'absolute'
};

let pulseKeyframes = keyframes({
  '0%, 20%, 100%' : { top: '0' },
  '25%, 45%'      : { top: '-40px' },
  '50%, 70%'      : { top: '-80px' },
  '75%, 95%'      : { top: '-40px' }
}, 'pulse');

export const title = {
  position : 'absolute',
  top      : '80px',
  right    : '20px',
  width    : '100%',

  container : {
    position : 'relative',
    width    : '100%',
    height   : '40px',
    overflow : 'hidden',

    prefix : {
      ...titleCommon,
      top   : '-1px',
      width : '120px',
      right : '260px'
    },

    postfix : {
      ...titleCommon,
      width         : '260px',
      right         : '0',
      textAlign     : 'right',
      animation     : '10s linear 0s normal none infinite',
      animationName : pulseKeyframes
    }
  }
};

export const websites = {
  margin : '0 0 0 100%',

  li : width => ({
    width                  : `${width}px`,
    padding                : '6px 4px 6px 8px',
    backgroundColor        : '#E6E6E6',
    borderTopLeftRadius    : '8px',
    borderBottomLeftRadius : '8px',
    margin                 : `15px 0 0 -${width}px`,

    container : {
      display : 'inline-block',

      img : {
        width  : '20px',
        height : '20px',
        margin : '0 7px -5px 0'
      },

      a : {
        color : '#0079BF'
      },

      p : {
        display : 'inline',
        color   : '#666'
      }
    }
  })
};

export const skills = {
  textAlign : 'right',
  float     : 'right',

  li : level => ({
    margin : '16px 0',

    p : {
      margin : '0 12px 0 0'
    },

    progress : {
      position        : 'relative',
      width           : '480px',
      height          : '2px',
      margin          : '5px 0 0 0',
      backgroundColor : 'rgba(255, 255, 255, 0.19)',

      icon : {
        position : 'absolute',
        top      : '-8px',
        left     : `${100 - level}%`
      },

      done : {
        margin          : `0 0 0 ${100 - level}%`,
        width           : `${level}%`,
        height          : '2px',
        backgroundColor : '#78909C'
      }
    }
  })
};

export const icons = {
  position : 'absolute',
  right    : '30px',
  bottom   : '240px',

  li : {
    display : 'inline-block',
    margin  : '0 0 0 15px',

    a : {
      fontSize : '35',
      color    : 'rgba(255,255,255,0.4)'
    }
  }
};
