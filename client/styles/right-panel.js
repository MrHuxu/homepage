import { title as leftTitle } from './left-panel';

export const global = {
  '.right-panel *' : {
    color : '#929292'
  }
};

export const container = {
  position : 'relative',
  width    : '100%',
  padding  : '0 0 0 2em'
};

export const title = {
  ...leftTitle,
  margin   : '5em 0 0 0',
  position : 'unset',

  container : {
    ...leftTitle.container,

    prefix : {
      ...leftTitle.container.prefix,
      color : '#393E46',
      left  : '0'
    }
  }
};

const subModuleTitle = {
  color : '#AAA'
};

export const education = {
  title : {
    ...subModuleTitle,
    margin : '4em 0 0 0'
  },

  container : {
    padding : '2em',

    timeRange : {
      display  : 'inline-block',
      color    : '#FBA77A',
      fontSize : '1.3em'
    },

    website : {
      fontSize : '1.3em'
    },

    description : {
      display  : 'inline-block',
      fontSize : '1.3em'
    }
  }
};

export const career = {
  title : {
    ...subModuleTitle
  },

  container : {
    padding : '2em',

    timeRange : {
      display  : 'inline-block',
      color    : '#FBA77A',
      fontSize : '1.3em'
    },

    website : {
      fontSize : '1.3em'
    },

    description : {
      display  : 'inline-block',
      fontSize : '1.3em'
    }
  }
};

export const open = {
  title : {
    ...subModuleTitle
  },

  container : {
    padding : '2em',

    item : {
      margin : '0 0 15px 0',

      website : {
        color    : '#00ADB5',
        margin   : '0 0.5em 0 0',
        fontSize : '1.3em'
      },

      description : {
        display  : 'inline-block',
        fontSize : '1.3em'
      }
    }
  }
};

export const work = {
  title : {
    ...subModuleTitle
  },

  container : {
    padding : '2em',

    item : {
      margin : '0 0 15px 0',

      name : {
        display  : 'inline-block',
        color    : '#5D8994',
        margin   : '0 0.4em 0 0',
        fontSize : '1.3em'
      },

      techStack : {
        display  : 'inline-block',
        color    : '#F8C2CE',
        fontSize : '1.1em'
      },

      description : {
        margin   : '0.2em 0 0 0',
        fontSize : '1.2em'
      }
    }
  }
};
