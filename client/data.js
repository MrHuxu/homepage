export const links = [
  { href: 'http://blog.xhu.me/', className: 'fa fa-pencil' },
  { href: 'https://twitter.com/hxtheone', className: 'fa fa-twitter' },
  { href: 'https://github.com/MrHuxu', className: 'fa fa-github' },
  { href: 'http://steamcommunity.com/id/TDFJ', className: 'fa fa-steam' },
  { href: 'http://www.linkedin.com/in/xu-hu-12a9ab111/', className: 'fa fa-linkedin' },
  { href: 'mailto:hxtheone@gmail.com', className: 'fa fa-envelope-o' }
];

export const websites = [{
  favicon : 'http://blog.xhu.me/assets/images/x-billabong.png',
  url     : 'blog.xhu.me',
  label   : 'My blog',
  width   : 15
}, {
  favicon : 'http://h.xhu.me/favicon.ico',
  url     : 'h.xhu.me',
  label   : 'Little CMS',
  width   : 15
}, {
  favicon : 'https://raw.githubusercontent.com/MrHuxu/img-repo/master/yrel/favicon.png',
  url     : 'yrel.xhu.me',
  label   : 'A script language written in Go',
  width   : 28
}, {
  favicon : 'https://raw.githubusercontent.com/MrHuxu/img-repo/master/bar/favicon.png',
  url     : 'bar.xhu.me',
  label   : 'A place to store thoughts',
  width   : 25
}, {
  favicon : 'https://raw.githubusercontent.com/MrHuxu/MySnippets/master/vendor/icon/logo.ico',
  url     : 'snippets.xhu.me',
  label   : 'Snippets manager',
  width   : 23
}];

export const skills = [ {
  name  : 'Ruby on Rails',
  level : '75'
}, {
  name  : 'Go',
  level : '90'
}, {
  name  : 'React.js & Redux',
  level : '80'
}, {
  name  : 'Node.js',
  level : '80'
}, {
  name  : 'HTML & CSS',
  level : '70'
}, {
  name  : 'Docker',
  level : '60'
}];

export const contact = {
  email   : 'hxtheone@gmail.com',
  phone   : '18609669205',
  github  : 'MrHuxu',
  website : 'xhu.me'
};

export const education = [{
  timeRange   : '2010/09 ~ 2014/06',
  description : {
    url   : 'http://www.hit.edu.cn/',
    label : 'Harbin Institute of Technology',
    title : 'Bachelor'
  }
}];

export const career = [{
  timeRange   : '2018/04/03 ~ Now',
  description : {
    url   : 'http://didichuxing.com/',
    label : 'DiDi Chuxing',
    title : 'Senior Software Engineer'
  }
}, {
  timeRange   : '2014/07/14 ~ 2018/04/02',
  description : {
    url   : 'http://freewheel.tv/',
    label : 'FreeWheel Beijing Office',
    title : 'Senior Software Engineer'
  }
}];

export const projects = {
  open : [{
    label       : 'MrHuxu/blogo',
    url         : 'https://github.com/MrHuxu/blogo',
    description : 'A static blog written in Go'
  }, {
    label       : 'MrHuxu/react-go-boilerplate',
    url         : 'https://github.com/MrHuxu/react-go-boilerplate',
    description : 'A boilerplate for building web application with React & Go'
  }, {
    label       : 'MrHuxu/yrel',
    url         : 'https://github.com/MrHuxu/yrel',
    description : 'A script language of which the interpreter is written in Go'
  }, {
    label       : 'MrHuxu/cn-city-select',
    url         : 'https://github.com/MrHuxu/cn-city-select',
    description : 'A directive being used to provide China region selector for Angular app'
  }, {
    label       : 'MrHuxu/server-rendering-demo',
    url         : 'https://github.com/MrHuxu/server-rendering-demo',
    description : 'A server side rendering demo, powered by react & react-router & redux & express'
  }, {
    label       : 'xcatliu/typescript-tutorial',
    url         : 'https://github.com/xcatliu/typescript-tutorial',
    description : 'TypeScript tutorial'
  }],
  work : [{
    name        : 'Workflow Service',
    techStack   : ['Go', 'gRPC'],
    description : {
      // label    : '为公司业务提供流程控制的基础服务组件',
      label    : 'A basic service which provides the workflow control to business entities',
      features : [
        '独立完成项目的技术 design, 注重与服务之间的解耦, 并且适当暴露接口以便于优化和扩展.',
        '代码采用清晰的分层结构, 下层方法通过接口被上层调用, 适当解耦的同时也便于编写单元测试.',
        '每一层都贯彻 \'单一职责原则\', 提高方法的可复用性.',
        '代码的单元覆盖率达到 85% 以上.'
      ]
    }
  }, {
    name        : 'HyLDA',
    techStack   : ['Ruby on Rails', 'jQuery', 'Redis', 'MySQL'],
    description : {
      // label    : '线性广告和数字广告混合投放系统的 UI 部分.',
      label    : 'Building both the back-end & front-end of the UI part of HyLDA Project',
      features : {
        '性能问题' : [
          '采用 Activerecord 中的 eager load 操作避免了加载数据时可能出现的 n+1 问题.',
          '将部分非常耗时的操作使用 Resque 的任务队列进行管理, 提升页面的整体响应效率.',
          '给数据库中常用的外键搜索字段加上索引, 使查询升级操作由表锁变为行锁, 提升项目的并发性能.'
        ],
        '质量控制' : [
          '完善的 Tech Design, Case Design, 以及充足的单元测试和自动化测试流程.',
          '建立完善的监控机制: 使用 RoR 的 hook 机制无侵入的实现自定义 log, 学习使用 ELK 建立了相应的 dashboard 以可视化用户的使用情况.'
        ]
      }
    }
  }, {
    name        : 'SparkUI Adoption',
    techStack   : ['React.js', 'Redux'],
    description : {
      // label    : '带领一个团队使用内部的 SparkUI 框架对 HyLDA 模块进行完整的前端替换.',
      label    : 'Leading a team to adopt SparkUI(an internal front-end framework) to the UI of HyLDA project',
      features : {
        '项目设计' : [
          '项目初期进行详细的 design, 特别是和后端的 API 设计, 在保证功能的情况下尽可能使用统一格式, 方便今后的后端升级.',
          '项目初期确定测试框架: 采用单元测试(mocha)测试数据 + 行为测试(cucumber)测试页面组件的方案, 避免在测试方式上出现重复.',
          '使用 Agouti 编写了一个小型的性能测试工具, 并且使用 ECharts 可视化对比替换前后测试结果, 确保了产品的稳定上线.'
        ],
        '代码重构' : [
          '使用柯里化的方式编写功能类似的函数的 generator, 避免了大量重复代码的产生.',
          '优化数据模型结构, 使得组件之间的耦合变小, 通过给组件自定义 shouldComponentUpdate 方法避免页面大规模重绘.',
          '在2的基础上, 把大的数据模型拆分成小的文件, 在使用 Redux 框架的前提下, 每个文件专注于一个功能的 action/actionType/reducer, 方便后续维护和升级.'
        ]
      }
    }
  }, {
    name        : 'Bug Bash Tool',
    techStack   : ['Ruby on Rails', 'React.js', 'Redux', 'Express.js', 'Go', 'MongoDB'],
    description : {
      // label    : '内部的一个统计特定 Jira ticket 的工具.',
      label    : 'An internal tool which can collect specific Jira tickets and visualize the result',
      features : [
        '初始版本使用 Ruby on Rails 和 React.js 实现了完整的前后端分离开发.',
        '将后端使用 Node.js 进行了重写, 实现数据的并行获取, 了解了 ES6 原生的 Promise 规范, 并对前端代码进行了部分重构.',
        '在 Jira 速度太慢的前提下, 采用 redis 作为数据缓存, 提升了页面整体响应速度.',
        '使用自己写的脚手架用 Go 重写后端代码, 使用 MongoDB 持久化数据.'
      ]
    }
  }]
};
