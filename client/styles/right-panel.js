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
  padding         : '180px 0 0 20px',
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

const subModuleTitle = {
  color : '#999'
};

export const education = {
  title : {
    ...subModuleTitle
  },

  container : {
    padding : '20px',

    timeRange : {
      display : 'inline-block',
      color   : '#fba77a'
    },

    website : {
    },

    description : {
      display : 'inline-block'
    }
  }
};

export const career = {
  title : {
    ...subModuleTitle
  },

  container : {
    padding : '20px',

    timeRange : {
      display : 'inline-block',
      color   : '#fBA77A'
    },

    website : {
    },

    description : {
      display : 'inline-block'
    }
  }
};

export const open = {
  title : {
    ...subModuleTitle
  },

  container : {
    padding : '20px',

    item : {
      margin : '0 0 15px 0',

      website : {
        color : '#00ADB5'
      },

      description : {
        display : 'inline-block'
      }
    }
  }
};

export const work = {
  title : {
    ...subModuleTitle
  },

  container : {
    padding : '20px',

    name : {
      display : 'inline-block'
    },

    techStack : {
      display : 'inline-block'
    },

    description : {
    }
  }
};
