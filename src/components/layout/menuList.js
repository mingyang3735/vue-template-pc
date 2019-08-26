const menuList = [
  {
    name: '首页',
    icon: 'el-icon-s-home',
    web_url: '/home',
    child: [],
    id: 1
  }, {
    name: '交易管理',
    icon: 'el-icon-s-home',
    web_url: '/deal',
    child: [
      {
        name: '导入付款明细',
        icon: 'el-icon-s-help',
        web_url: '/deal/import',
        id: 21
      }
    ],
    id: 2
  }
]
export default menuList
