import { keyframes } from 'radium';

export const global = {
  '.left-panel *' : {
    color : '#DCDCDC'
  },

  '.left-panel li' : {
    listStyleType : 'none'
  }
};

export const container = {
  position : 'relative',
  height   : '100%',
  padding  : '6em 3em 0 0'
};

export const avatar = {
  position : 'relative',
  height   : '24em',

  img : {
    position : 'absolute',
    right    : 0,
    width    : '24em'
  }
};

export const introduction = {
  position  : 'relative',
  textAlign : 'right',
  margin    : '1.2em 0 0 0',

  container : {
    margin : '0.5em 0 0 0',

    prefix : {
      color    : '#888',
      fontSize : '1.9em',
      margin   : '0 0.3em 0 0'
    },

    content : {
      fontSize : '1.9em'
    }
  }
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
    height   : '2.3em',
    overflow : 'hidden',
    margin   : '0.5em 0 0 0',

    prefix : {
      color    : '#888',
      position : 'absolute',
      right    : '7.8em',
      fontSize : '1.9em',
      top      : '-0.15em'
    },

    label : {
      fontSize      : '1.9em',
      lineHeight    : '1.3em',
      position      : 'absolute',
      width         : '18.5em',
      right         : '0',
      textAlign     : 'right',
      animation     : '10s linear 0s normal none infinite',
      animationName : titleKeyframes
    }
  }
};

export const icons = {
  position : 'absolute',
  right    : '3em',
  bottom   : '9em',

  li : {
    display : 'inline-block',
    margin  : '0 0 0 1.5em',

    a : {
      fontSize : '2em',
      color    : 'rgba(255,255,255,0.4)'
    }
  }
};
