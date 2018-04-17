// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  api_url: 'http://192.168.9.123:3001',
  menuList: [
    {
      id: "home",
      icon: "icon-home",
      value: '首页',
      select: true,
    },
    {
      id: "create",
      icon: "icon-Meeting",
      value: '创建会议',
      select: false,
    },
    {
      id: "list",
      icon: "icon-iconfontlistul",
      value: '会议列表',
      select: false,
    },
    {
      id: "room",
      icon: "icon-meeting1",
      value: '会议室',
      select: false,
    },
    {
      id: "music",
      icon: "icon-yinlemusic",
      value: '音乐库',
      select: false,
    },
    {
      id: "device",
      icon: "icon-shebeiguanli",
      value: '设备管理',
      select: false,
    },
  ]
};
