export const global = {
  'html, body, .full-height' : {
    width  : '100%',
    height : '100%'
  },

  '*' : {
    margin     : 0,
    padding    : 0,
    fontFamily : '\'Roboto\', sans-serif'
  },

  a : {
    textDecoration : 'none'
  }
};

const panel = {
  position      : 'relative',
  display       : 'inline-block',
  verticalAlign : 'top',
  height        : '100%'
};

export const leftPanel = {
  ...panel,
  width           : '36%',
  backgroundColor : '#393E46'
};

export const rightPanel = {
  ...panel,
  width    : '64%',
  overflow : 'auto'
};
