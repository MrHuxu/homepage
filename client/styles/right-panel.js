import { titleCommon } from './left-panel';

export const global = {
  '.right-panel *' : {
    color : '#929292'
  }
};

export const container = {
  position        : 'relative',
  width           : '100%',
  padding         : '4em 2em 2em 2em',
  backgroundColor : '#ECF0F1'
};

export const title = {
  ...titleCommon,
  position : 'unset',
  color    : '#393E46',
  left     : '0'
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

export const websites = {
  title : {
    ...subModuleTitle,
    margin : '0 0 1.1em 0'
  },

  li : width => ({
    display         : 'inline-block',
    width           : `${width}em`,
    padding         : '0.5em 0.5em',
    backgroundColor : '#E6E6E6',
    borderRadius    : '0.5em',
    margin          : '10px',

    container : {
      display : 'inline-block',

      img : {
        width  : '1.4em',
        height : '1.4em',
        margin : '0 0.5em -0.35em 0'
      },

      a : {
        color    : '#0079BF',
        fontSize : '1.2em'
      },

      p : {
        display  : 'inline',
        fontSize : '1.2em'
      }
    }
  })
};
