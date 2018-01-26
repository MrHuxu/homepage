import { title as leftTitle } from './left-panel';

export const global = {
  '.right-panel *' : {
    color : '#393E46'
  }
};

export const container = {
  position        : 'relative',
  width           : '100%',
  height          : '100%',
  padding         : '180px 0 0 0',
  backgroundColor : '#ECF0F1'
};

export const title = {
  ...leftTitle,

  container : {
    ...leftTitle.container,

    prefix : {
      ...leftTitle.container.prefix,
      left : '40px'
    }
  }
};
