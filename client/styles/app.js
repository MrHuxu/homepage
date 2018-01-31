export const global = {
  'html, body, .full-height' : {
    width  : '100%',
    height : '100%'
  },

  '*' : {
    margin     : 0,
    padding    : 0,
    fontFamily : '\'Lucida Sans Unicode\',\'Lucida Grande\',sans-serif'
  },

  a : {
    textDecoration : 'none'
  }
};

const panel = {
  display       : 'inline-block',
  verticalAlign : 'top',
  height        : '100%'
};

export const leftPanel = {
  ...panel,
  width           : '36%',
  backgroundColor : '#393E46',

  '@media (min-height: 52em)' : {
    overflow : 'hidden'
  },

  '@media (max-height: 52em)' : {
    overflow : 'auto'
  },

  '@media (max-width: 680px)' : {
    width  : '100%',
    height : '52em'
  }
};

export const rightPanel = {
  ...panel,
  width : '64%',

  '@media (max-width: 680px)' : {
    width : '100%'
  },

  '@media (min-width: 680px)' : {
    overflow : 'auto'
  }
};
