export const global = {
  'html, body, .full-height' : {
    width  : '100%',
    height : '100%'
  },

  '*' : {
    margin     : 0,
    padding    : 0,
    fontFamily : '\'Lucida Sans Unicode\',\'Lucida Grande\',sans-serif',
    fontSize   : '16px'
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
  width    : '36%',
  overflow : 'hidden'
};

export const rightPanel = {
  ...panel,
  width    : '64%',
  overflow : 'auto'
};
