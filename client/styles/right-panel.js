export const global = {
  '.right-panel *' : {
    color : '#929292'
  }
};

export const container = {
  position        : 'relative',
  padding         : '6em 2em',
  backgroundColor : '#ECF0F1'
};

const subModuleTitle = {
  color    : '#787878',
  margin   : '0 0 0 0.6em',
  fontSize : '2em'
};

export const divider = {
  margin          : '2.7em 0 4em 0',
  width           : '100%',
  height          : '2px',
  backgroundColor : '#DEDEDE'
};

export const education = {
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
      color    : '#00ADB5',
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

    item : {
      margin : '5px 0'
    },

    timeRange : {
      display  : 'inline-block',
      color    : '#FBA77A',
      fontSize : '1.3em'
    },

    website : {
      color    : '#00ADB5',
      fontSize : '1.3em'
    },

    description : {
      display  : 'inline-block',
      fontSize : '1.3em'
    }
  }
};

export const skills = {
  title : {
    ...subModuleTitle
  },

  container : {
    padding : '2em',

    li : level => ({
      position : 'relative',
      margin   : '0.5em 0',

      container : {
        height : '1em',

        p : {
          position        : 'absolute',
          top             : '-0.2em',
          padding         : '0 0.7em 0 0',
          fontSize        : '1.2em',
          backgroundColor : '#ECF0F1',
          zIndex          : '900'
        },

        done : {
          position        : 'absolute',
          height          : '2px',
          top             : '0.4em',
          width           : `${level * 0.65}%`,
          backgroundColor : '#AAA',
          zIndex          : '800',

          '@media (max-width: 1600px) and (min-width: 1201px)' : {
            width : `${level * 0.75}%`
          },

          '@media (max-width: 1200px) and (min-width: 681px)' : {
            width : `${level * 0.85}%`
          },

          '@media (max-width: 680px)' : {
            width : `${level * 0.95}%`
          }
        },

        icon : {
          position : 'absolute',
          top      : '0.05em',
          left     : `${level * 0.65}%`,

          '@media (max-width: 1600px) and (min-width: 1201px)' : {
            left : `${level * 0.75}%`
          },

          '@media (max-width: 1200px) and (min-width: 681px)' : {
            left : `${level * 0.85}%`
          },

          '@media (max-width: 680px)' : {
            left : `${level * 0.95}%`
          }
        }
      }
    })
  }
};

export const open = {
  title : {
    ...subModuleTitle
  },

  container : {
    padding : '2em',

    item : {
      margin : '0 0 1em 0',

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
      margin : '0 0 1em 0',

      name : {
        display  : 'inline-block',
        color    : '#588D9C',
        margin   : '0 0.6em 0 0',
        fontSize : '1.3em'
      },

      techStack : {
        display  : 'inline-block',
        color    : '#C1C0B9',
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
    marginBottom : '1em'
  },

  li : width => ({
    display         : 'inline-block',
    width           : `${width}em`,
    padding         : '0.5em 0.5em',
    backgroundColor : '#E6E6E6',
    borderRadius    : '0.5em',
    margin          : '1em',

    container : {
      display : 'inline-block',

      img : {
        width  : '1.4em',
        height : '1.4em',
        margin : '0 0.5em -0.35em 0'
      },

      a : {
        color    : '#00ADB5',
        fontSize : '1.2em'
      },

      p : {
        display  : 'inline',
        fontSize : '1.2em'
      }
    }
  })
};
